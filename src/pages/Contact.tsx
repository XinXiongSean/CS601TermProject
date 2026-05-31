import { useState } from 'react';

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section>
      <h1>Contact</h1>
      <p>Complete the web form to send a message, with HTML5 validation and simple JavaScript feedback.</p>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
      >
        <label>
          Name
          <input name="name" type="text" required minLength={2} maxLength={60} />
        </label>
        <label>
          Email
          <input name="email" type="email" required />
        </label>
        <label>
          Message
          <textarea name="message" rows={6} required minLength={20} />
        </label>
        <input type="submit" value="Send Message" />
      </form>
      {submitted && <p>Thank you! Your message has been prepared for submission.</p>}
    </section>
  );
}

export default Contact;
