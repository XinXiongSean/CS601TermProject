function Portfolio() {
  return (
    <section>
      <h1>Portfolio</h1>
      <p>Featured examples of my work and course-related interactive demonstrations.</p>
      <div className="card-grid">
        <article className="card">
          <h2>Project sample</h2>
          <p>
            A portfolio page that highlights HTML structure, CSS design, and content presentation.
          </p>
        </article>
        <article className="card">
          <h2>Interactive demo</h2>
          <p>
            This section can include a Canvas, SVG, or drag-and-drop interaction that shows dynamic
            UI behavior.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
