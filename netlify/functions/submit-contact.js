exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  let payload;
  try {
    payload = JSON.parse(event.body || '{}');
  } catch (error) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Invalid JSON payload' }),
    };
  }

  const { name, email, message } = payload;

  if (!name || !email || !message) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Name, email, and message are required.' }),
    };
  }

  const BIN_ID = process.env.JSONBIN_BIN_ID;
  const API_KEY = process.env.JSONBIN_API_KEY;

  if (!BIN_ID || !API_KEY) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Database config missing.' }),
    };
  }

  try {
    console.log('submit-contact: received payload', { name, email });

    // Fetch current data from JSONBin
    const getResponse = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
      headers: { 'X-Master-Key': API_KEY },
    });

    if (!getResponse.ok) {
      const text = await getResponse.text().catch(() => 'no body');
      console.error('submit-contact: GET failed', getResponse.status, text);
      throw new Error('Failed to fetch from database.');
    }

    const data = await getResponse.json();
    const messages = Array.isArray(data.record?.messages) ? data.record.messages : [];
    console.log('submit-contact: current messages count', messages.length);

    // Add new message
    const newMessage = {
      id: Date.now(),
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    };
    messages.push(newMessage);

    // Save updated data back to JSONBin
    const putResponse = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': API_KEY,
      },
      body: JSON.stringify({ messages }),
    });

    if (!putResponse.ok) {
      const t = await putResponse.text().catch(() => 'no body');
      console.error('submit-contact: PUT failed', putResponse.status, t);
      // Try a fallback: create a new backup bin with this single message so it isn't lost
      try {
        console.warn('submit-contact: attempting backup bin creation');
        await fetch('https://api.jsonbin.io/v3/b', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': API_KEY,
          },
          body: JSON.stringify({ messages: [newMessage] }),
        });
      } catch (backupErr) {
        console.error('submit-contact: backup bin creation failed', backupErr);
      }
      throw new Error('Failed to save to database.');
    }

    // Verify write: fetch again and check for id
    const verify = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
      headers: { 'X-Master-Key': API_KEY },
    });
    const verifyData = await verify.json().catch(() => null);
    const verifyMessages = Array.isArray(verifyData?.record?.messages) ? verifyData.record.messages : [];
    const found = verifyMessages.some((m) => m.id === newMessage.id);
    console.log('submit-contact: verify found', found);

    if (!found) {
      console.error('submit-contact: verification failed - message not present after PUT');
      // As a final fallback, create a backup bin
      try {
        await fetch('https://api.jsonbin.io/v3/b', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': API_KEY,
          },
          body: JSON.stringify({ messages: [newMessage] }),
        });
      } catch (backupErr) {
        console.error('submit-contact: final backup creation failed', backupErr);
      }
      return {
        statusCode: 500,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ success: false, error: 'Message not present after save. Backup attempted.' }),
      };
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: true, message: 'Message saved to database.' }),
    };
  } catch (error) {
    console.error('submit-contact: caught error', error);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        error: error instanceof Error ? error.message : 'Server error.',
      }),
    };
  }
};

