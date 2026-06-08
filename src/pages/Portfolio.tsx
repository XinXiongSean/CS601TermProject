import { useState } from 'react';
import './Portfolio.css';

function Portfolio() {
  const items = [
    { src: '/images/project1.jpg', title: 'Service Mesh on Kubernetes', desc: 'Built a service mesh deployment using Istio and Kubernetes for secure service-to-service communication and observability.' },
    { src: '/images/project2.png', title: 'Airflow Data Pipelines', desc: 'Designed ETL workflows in Apache Airflow for data engineering, orchestration, and scheduled data delivery.' },
    { src: '/images/project3.png', title: 'LangGraph Agent Orchestration', desc: 'Implemented a LangGraph agent orchestration system for managing multi-step AI workflows and tool chains.' },
    { src: '/images/project4.jpg', title: 'Stable Diffusion Image Generation', desc: 'Created an image generation pipeline using Stable Diffusion for high-quality AI-generated visuals.' },
    { src: '/images/project5.png', title: 'Fine-tuning LLMs with LoRA/SFT', desc: 'Fine-tuned large language models using LoRA and SFT methods for task-specific performance improvements.' },
    { src: '/images/project6.png', title: 'Distributed .NET Systems', desc: 'Built distributed system architecture in .NET with scalability and fault tolerance for enterprise applications.' },
    { src: '/images/project7.jpg', title: 'Agentic Reinforcement Learning', desc: 'Apply checkpoints with trajectory optimization for autonomous agent decision-making by ppo/dpo.' },
    { src: '/images/project8.jpg', title: 'Agentic Memory Management', desc: 'Apply RAG techniques for effective memory management in agentic systems.' },
  ];

  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="portfolio-page">
      <h1 className="portfolio-title">Portfolio</h1>
      <p className="portfolio-intro">Click any item to open a larger view with project details.</p>

      <div className="portfolio-ring" aria-hidden={active !== null}>
        <div className="pf-center">Carpe Diem</div>
        {items.map((it, idx) => {
          const angle = (idx / items.length) * Math.PI * 2 - Math.PI / 2; // start at top
          const radius = 38; // percent radius from center
          const left = 50 + radius * Math.cos(angle);
          const top = 50 + radius * Math.sin(angle);
          const style = { position: 'absolute' as const, left: `${left}%`, top: `${top}%`, transform: 'translate(-50%, -50%)' };

          return (
            <button
              key={idx}
              className="pf-circle"
              style={style}
              onClick={() => setActive(idx)}
              aria-label={`${it.title} — open detail`}
            >
              <img src={it.src} alt={it.title} />
            </button>
          );
        })}
      </div>

      {active !== null && (
        <div className="pf-modal" role="dialog" aria-modal="true" onClick={() => setActive(null)}>
          <div className="pf-modal-inner" onClick={(e) => e.stopPropagation()}>
            <button className="pf-close" onClick={() => setActive(null)} aria-label="Close">✕</button>
            <img className="pf-large" src={items[active].src} alt={items[active].title} />
            <div className="pf-caption">
              <h2>{items[active].title}</h2>
              <p>{items[active].desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Portfolio;
