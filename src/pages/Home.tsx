function Home() {
  return (
    <section className="hero">
      <div>
        <p className="eyebrow">CS601 Term Project</p>
        <h1>Sean Xiong — Web Developer Portfolio</h1>
        <p>
          A six-page portfolio built with React and TypeScript, featuring responsive layout,
          semantic content, interactive form validation, and HTML5 API demos.
        </p>
      </div>
      <div className="hero-summary card">
        <h2>What this project includes</h2>
        <ul>
          <li>Personal biography, interests, and resume</li>
          <li>Photo gallery and portfolio showcase</li>
          <li>Accessible contact form with validation</li>
          <li>Canvas and geolocation demos for extra credit</li>
        </ul>
      </div>
    </section>
  );
}

export default Home;
