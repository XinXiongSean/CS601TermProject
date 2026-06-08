import { useEffect, useState, useRef } from 'react';
import './Home.css';

function Home() {
  const images = [
    { src: '/img/hotel3.JPG', alt: 'Mural 1' },
    { src: '/img/view.JPG', alt: 'Mural 2' },
    { src: '/img/umberalla.JPG', alt: 'Mural 3' },
  ];

  const [index, setIndex] = useState(0);
  const parallaxRef = useRef<HTMLDivElement | null>(null);
  const [translate, setTranslate] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % images.length), 3500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
        window.requestAnimationFrame(() => {
        const el = parallaxRef.current;
        if (!el) {
          ticking = false;
          return;
        }
        const rect = el.getBoundingClientRect();
        const windowH = window.innerHeight || 1;
        const progress = (windowH - rect.top) / (windowH + rect.height);
        const clamped = Math.min(Math.max(progress, 0), 1);
        // amplitude depends on screen width so mobile doesn't overshoot
        const screenW = window.innerWidth || 1024;
        let amplitude = 600;
        if (screenW < 480) amplitude = 60;
        else if (screenW < 768) amplitude = 140;
        else if (screenW < 1200) amplitude = 360;
        const t = (clamped - 0.5) * amplitude;
        setTranslate(t);
        ticking = false;
      });
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section className="hero">
      <div>
        <p className="eyebrow">Mr 🐻 Homepage</p>
        <h1>Welcome to Sean Xiong Homepage</h1>
        <p>
          I am platform engineer working at the intersection of software development and infrastructure.
          <br />
          This homepage serves as a touchpoint to let others to get to know me better.
          <br />
          It includes sections about my background, interests, and projects.
          <br />
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

        <div>
          <p className='littlepoem'>
            Do not go gentle into that good night,
            <br />
            Old age should burn and rave at close of day;
            <br />
            Rage, rage against the dying of the light.
            <br />
            <br />
            Though wise men at their end know dark is right,
            <br />
            Because their words had forked no lightning they
            <br />
            Do not go gentle into that good night.
            <br />
            - Dylan Thomas
          </p>
        </div>

        <div className="scroll-image-section" ref={parallaxRef}>
          <div
            className="scroll-image"
            style={{
              backgroundImage: `url(/img/boyer.png)`,
              transform: `translateY(${translate}px)`,
            }}
            aria-hidden={false}
          />
        </div>

      </div>
    </section>
  );
}

export default Home;
