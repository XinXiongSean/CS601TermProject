import { FormEvent, useState } from 'react';

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get('name')?.toString().trim(),
      email: formData.get('email')?.toString().trim(),
      message: formData.get('message')?.toString().trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatusMessage('Please complete all fields before submitting.');
      return;
    }

    setSending(true);
    setStatusMessage(null);

    try {
      const response = await fetch('/.netlify/functions/submit-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Submission failed.');
      }

      setSubmitted(true);
      setStatusMessage('Thank you! Your message was sent successfully.');
      form.reset();
    } catch (error) {
      setStatusMessage(
        error instanceof Error ? error.message : 'Something went wrong while sending your message.'
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section>
      <h1>Contact</h1>
      <p>
        Use the contact form to send a message. The form uses HTML5 validation and a Netlify serverless
        API function to process the submission.
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="contact-name">Name</label>
        <input id="contact-name" name="name" type="text" required minLength={2} maxLength={60} />

        <label htmlFor="contact-email">Email</label>
        <input id="contact-email" name="email" type="email" required />

        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" name="message" rows={6} required minLength={20} />

        <input type="submit" value={sending ? 'Sending…' : 'Send Message'} disabled={sending} />
      </form>
      {statusMessage && <p className="success-message">{statusMessage}</p>}
      {submitted && <p className="success-message">Your message was processed by the backend.</p>}
    </section>
  );
}

export default Contact;
