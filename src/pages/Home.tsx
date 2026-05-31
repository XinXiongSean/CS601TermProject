function Home() {
  return (
    <section>
      <h1>Welcome to My CS601 Portfolio</h1>
      <p>
        This site is a personal portfolio project built for the CS601 term assignment. It shows
        responsive layout, interactive forms, React routing, and modern JavaScript and TypeScript
        patterns.
      </p>
      <div className="card-grid">
        <article className="card">
          <h2>Module highlights</h2>
          <ul>
            <li>DOM, events, and form validation</li>
            <li>HTML5 Drag & Drop, Canvas, SVG, JSON, and Web Workers</li>
            <li>Advanced CSS layout with Flexbox and Grid</li>
            <li>TypeScript, React, routing, and component communication</li>
          </ul>
        </article>
        <article className="card">
          <h2>Project goals</h2>
          <ul>
            <li>Deliver a 5-10 page portfolio website</li>
            <li>Use HTML, CSS, JavaScript, TypeScript, and React</li>
            <li>Include quality text, navigation, imagery, and accessibility</li>
            <li>Deploy with GitHub and a public repo</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Home;
