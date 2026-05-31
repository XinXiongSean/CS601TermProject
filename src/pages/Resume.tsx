function Resume() {
  return (
    <section>
      <h1>Resume</h1>
      <p>
        This page summarizes education, skills, and course-relevant project experience in a concise
        and readable format.
      </p>
      <div className="card-grid">
        <article className="card">
          <h2>Education</h2>
          <p>Details on coursework, certifications, and academic accomplishments.</p>
        </article>
        <article className="card">
          <h2>Skills</h2>
          <ul>
            <li>HTML5</li>
            <li>CSS Grid and Flexbox</li>
            <li>JavaScript & TypeScript</li>
            <li>React and React Router</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Resume;
