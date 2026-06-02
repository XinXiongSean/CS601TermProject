function About() {
  return (
    <section>
      <h1>About Me</h1>
      <p>
        I’m Sean Xiong, a web developer student building a professional portfolio site for CS601.
        This project uses modern web technologies to show portfolio content, course skills, and
        personal interests.
      </p>
      <div className="card-grid">
        <article className="card">
          <h2>Biography</h2>
          <p>
            I am currently studying web development and learning how to create clean, accessible,
            and responsive websites. I enjoy turning course concepts into attractive, functional
            portfolio experiences.
          </p>
        </article>
        <article className="card">
          <h2>Interests</h2>
          <ul>
            <li>Interactive front-end applications</li>
            <li>Responsive layout with CSS Grid and Flexbox</li>
            <li>JavaScript, TypeScript, and browser APIs</li>
            <li>Designing usable interfaces for real users</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default About;
