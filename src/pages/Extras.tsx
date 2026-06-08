import './Extras.css';

function Extras() {
  const items = [
    { src: '/img/banff.jpg', title: 'lake moraine', desc: 'A moment from a scenic hike.' },
    { src: '/img/cancun.jpg', title: 'vacation', desc: 'Chilling at the cancun beach.' },
    { src: '/img/concert.jpg', title: 'Tao Concert', desc: 'Celebrating at the concert.' },
    { src: '/img/maple.jpg', title: 'Canada Maple', desc: 'Maple leaves in autumn.' },
    { src: '/img/game.jpg', title: 'Zelda', desc: 'Gameplay moments from the adventure.' },
    { src: '/img/banff1.jpg', title: 'lake Louise', desc: 'beautiful lake surrounded by mountains.' },
    { src: '/img/mat.jpg', title: 'Cat', desc: 'A cute cat lounging in the mat called wonderful QAQ.' },
    { src: '/img/banff3.jpg', title: 'Lake Louise', desc: 'More scenic views from the lake.' },
  ];

  return (
    <section className="extras-page">
      <h1 className="extras-title">Memory Gallery</h1>
      <div className="extras-gallery">
        {items.map((it, idx) => {
          const isTall = idx % 4 === 1 || idx % 4 === 3;
          return (
            <figure className={`extras-item ${isTall ? 'tall' : 'short'}`} key={idx} tabIndex={0}>
              <img src={it.src} alt={it.title} />
              <figcaption className="extras-caption">
                <h3>{it.title}</h3>
                <p>{it.desc}</p>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}

export default Extras;
