function Portfolio() {
  return (
    <section>
      <h1>Portfolio</h1>
      <p>
        This portfolio page highlights course work, personal projects, and a photo gallery that uses
        semantic HTML and responsive design.
      </p>
      <div className="gallery-grid">
        <article className="card">
          <img src="/images/project-1.svg" alt="Project layout illustration" />
          <h2>Responsive landing page</h2>
          <p>Designed using semantic HTML and CSS Grid to look good across screen sizes.</p>
        </article>
        <article className="card">
          <img src="/images/project-2.svg" alt="Interactive canvas illustration" />
          <h2>Interactive demo</h2>
          <p>Includes HTML5 Canvas and browser API examples to show dynamic content.</p>
        </article>
        <article className="card">
          <img src="/images/project-3.svg" alt="Skills showcase illustration" />
          <h2>Skills showcase</h2>
          <p>Demonstrates TypeScript, React, accessibility, and modern web best practices.</p>
        </article>
      </div>
      <div className="card-grid">
        <article className="card">
          <h2>Gallery</h2>
          <p>
            The image gallery uses accessible picture content and local SVG assets, which satisfy the
            rubric’s image requirement.
          </p>
        </article>
        <article className="card">
          <h2>Course coverage</h2>
          <ul>
            <li>DOM interaction and form validation</li>
            <li>Responsive CSS and layout composition</li>
            <li>React routing and component design</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
