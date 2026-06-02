function Extras() {
  return (
    <section>
      <h1>Memory Gallery</h1>
      <p>
        A collection of meaningful memories presented as a gallery. Replace these examples with
        your own photos and captions to personalize the site.
      </p>
      <div className="gallery-grid">
        <article className="card">
          <img src="/images/project-1.svg" alt="Memory of a study session" />
          <h2>Study day</h2>
          <p>A moment from a focused study session while building this portfolio.</p>
        </article>
        <article className="card">
          <img src="/images/project-2.svg" alt="Memory of a campus visit" />
          <h2>Campus walk</h2>
          <p>Visiting campus in spring and enjoying time between classes.</p>
        </article>
        <article className="card">
          <img src="/images/project-3.svg" alt="Memory of a project milestone" />
          <h2>Project milestone</h2>
          <p>Celebrating a milestone after completing a course project.</p>
        </article>
      </div>
    </section>
  );
}

export default Extras;
