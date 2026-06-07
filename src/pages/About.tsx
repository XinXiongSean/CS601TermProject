import { useEffect, useState } from 'react';
import './About.css';

function About() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  function openLightbox(src: string) {
    setLightboxSrc(src);
  }

  function closeLightbox() {
    setLightboxSrc(null);
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') closeLightbox();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section className="about-page">
      <aside className="profile">
        <img className="avatar" src="/img/profile.jpg" alt="Profile" />
        <h2 className="name">Sean Xiong</h2>
        <p className="role">Platform Engineer in Geotechnical Saas </p>
        <a className="site" href="https://www.linkedin.com/in/xin-sean-xiong-3ab1b2153/">LinkedIn</a>
        <a className="site" href="mailto:sean.xiong@alumni.utoronto.ca">Email</a>
      </aside>

      <main className="content">
        <div className="intro">
          <h1>About</h1>
          <p>
            I am a development platform engineer at Bentley Systems, where I work on improving the developer experience and productivity for our geotechnical software products. 
            I have a background in software development and infrastructure, and I am passionate about building tools and systems that empower developers to create great software.
          </p>
        </div>

        <div className="intro">
          <h1>Biography</h1>
          <p>
            I grew up in mainland China and have lived in multiple cities Nanjing, Nanchang, and Zhuhai before moving to Toronto for university.
            Among all the places I've lived, Zhuhai is my favorite because of the beautiful coastal scenery and vibrant culture.
          </p>
        </div>

        <div className="intro">
          <h1>Interests</h1>
          <p>
            In my free time, I enjoy exploring new technologies, playing video games, and playing Billard & Basketball.
            Oh of course, I also trying new foods! I have a particular fondness for spicy cuisine, and I enjoy trying different buffet restaurants where Toronto is located.
            I did occasionally skateboard but I have been pretty bad at it and I don't do it much anymore 😅.
          </p>
        </div>

        <section className="work">
          <h3>Work Experience</h3>
          <div className="job">
            <div className="job-date">2021 — Now</div>
            <div className="job-body">
              <div className="job-title">Development Platform Engineer at Bentley Systems</div>
              <div className="job-location">Toronto, CA</div>
              <p>
                Worked on internal development platform EVO to streamline development workflows and 
                improve developer experience for geotechnical software products, resulting in increased productivity and faster time-to-market.
              </p>
            </div>
          </div>

          <div className="job">
            <div className="job-date">2020 — 2021</div>
            <div className="job-body">
              <div className="job-title">Software Engineer at Morningstar Inc.</div>
              <div className="job-location">Toronto, CA</div>
              <p>
                Worked on Data Lake team to build and maintain data pipelines and infrastructure for financial data processing, resulting in improved data quality and reliability.
              </p>
            </div>
          </div>
        </section>

        <section className="gallery">
          <h3>Picture of My HomeTown</h3>
          <div className="thumbs">
            <img src="/img/hometown.JPG" alt="thumb1" onClick={() => openLightbox('/img/hometown.JPG')} />
            <img src="/img/hometown1.JPG" alt="thumb2" onClick={() => openLightbox('/img/hometown1.JPG')} />
            <img src="/img/hometown3.JPG" alt="thumb3" onClick={() => openLightbox('/img/hometown3.JPG')} />
          </div>
        </section>
        {lightboxSrc && (
          <div className="lightbox" role="dialog" aria-modal="true" onClick={closeLightbox}>
            <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">×</button>
              <img src={lightboxSrc} alt="Full size" />
            </div>
          </div>
        )}
      </main>
    </section>
  );
}

export default About;
