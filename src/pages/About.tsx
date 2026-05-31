function About() {
  return (
    <section>
      <h1>About Me</h1>
      <p>
        This page describes who I am, why I built this site, and the skills I am developing in
        CS601. It reflects course topics and demonstrates strong content structure and readable text.
      </p>
      <div className="card-grid">
        <article className="card">
          <h2>Biography</h2>
          <p>
            A short professional summary, career interests, and the story that connects my academic
            work to real projects.
          </p>
        </article>
        <article className="card">
          <h2>Course Skills</h2>
          <ul>
            <li>HTML5 semantic structure</li>
            <li>Responsive CSS layout</li>
            <li>JS/DOM interaction and validations</li>
            <li>TypeScript and React component design</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default About;
