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
    // Fetch current data from JSONBin
    const getResponse = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
      headers: { 'X-Master-Key': API_KEY },
    });

    if (!getResponse.ok) {
      throw new Error('Failed to fetch from database.');
    }

    const data = await getResponse.json();
    const messages = data.record.messages || [];

    // Add new message
    messages.push({
      id: Date.now(),
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    });

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
      throw new Error('Failed to save to database.');
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: true, message: 'Message saved to database.' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        error: error instanceof Error ? error.message : 'Server error.',
      }),
    };
  }
};

