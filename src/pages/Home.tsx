import { useEffect, useState } from 'react';

function Home() {
  const images = [
    { src: '/img/hotel3.JPG', alt: 'Mural 1' },
    { src: '/img/view.JPG', alt: 'Mural 2' },
    { src: '/img/umberalla.JPG', alt: 'Mural 3' },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % images.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="hero">
      <div>
        <p className="eyebrow">Mr 🐻 Homepage</p>
        <h1>Welcome to My Homepage</h1>
        <p>
          I am platform engineer working at the intersection of software development and infrastructure.
          <br></br>
          This homepage serves as a touchpoint to let others to get to know me better.
          <br></br>
          It includes sections about my background, interests, and projects.
          <br></br>
          I wish everyone a wonderful day and may the force be with you! ✨
        </p>

        <div className="carousel" aria-roledescription="carousel">
          <div className="slides" style={{ transform: `translateX(-${index * 100}%)` }}>
            {images.map((img, i) => (
              <div
                key={img.src}
                className={`slide ${i === index ? 'active' : ''}`}
                aria-hidden={i === index ? 'false' : 'true'}
              >
                <img src={img.src} alt={img.alt} />
              </div>
            ))}
          </div>

          <div className="dots" role="tablist">
            {images.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === index ? 'active' : ''}`}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-selected={i === index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* <div className="hero-summary card">
        <h2>What this space includes</h2>
        <ul>
          <li>Personal biography, interests, and resume</li>
          <li>Photo gallery and portfolio showcase</li>
          <li>Accessible contact form with validation</li>
        </ul>
      </div> */}
    </section>
  );
}

export default Home;
