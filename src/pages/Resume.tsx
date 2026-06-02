function Resume() {
  return (
    <section>
      <h1>Resume</h1>
      <p>
        A concise summary of education, technical skills, and course-relevant experience for the
        CS601 term project.
      </p>
      <div className="card-grid">
        <article className="card">
          <h2>Education</h2>
          <p>
            Currently enrolled in CS601 web development. Coursework includes HTML5, CSS3,
            JavaScript, TypeScript, and React.
          </p>
        </article>
        <article className="card">
          <h2>Technical Skills</h2>
          <ul>
            <li>HTML5 semantic markup and accessibility</li>
            <li>CSS Grid, Flexbox, responsive design, and advanced selectors</li>
            <li>JavaScript/TypeScript, DOM, events, and JSON</li>
            <li>React components, routing, and state management</li>
          </ul>
        </article>
      </div>
      <div className="card-grid">
        <article className="card">
          <h2>Project experience</h2>
          <p>
            This site was implemented as a six-page portfolio to demonstrate the breadth of
            course material with accessible layouts and interactive features.
          </p>
        </article>
        <article className="card">
          <h2>Career goals</h2>
          <p>
            I aim to build professional websites that are both visually polished and easy to use.
            This portfolio is a first step toward that goal.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Resume;
