import { useEffect, useState } from 'react';

interface Message {
  id: number;
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

function Messages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('/.netlify/functions/get-messages');
        if (!response.ok) throw new Error('Failed to fetch messages.');
        const data = await response.json();
        setMessages(data.messages || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load messages.');
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  return (
    <section>
      <h1>Submitted Messages</h1>
      <p>
        This page displays all contact form submissions stored in JSONBin. Each submission is retrieved via a
        serverless API function.
      </p>

      {loading && <p>Loading messages...</p>}
      {error && <p className="error-message">{error}</p>}
      {!loading && messages.length === 0 && <p>No messages yet. Submit a contact form to see it here.</p>}

      <div className="messages-grid">
        {messages.map((msg) => (
          <article key={msg.id} className="card">
            <h2>{msg.name}</h2>
            <p>
              <strong>Email:</strong> {msg.email}
            </p>
            <p>{msg.message}</p>
            <small className="timestamp">
              {new Date(msg.timestamp).toLocaleString()}
            </small>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Messages;
