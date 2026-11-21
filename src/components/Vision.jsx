import { vision, mission } from '../config/site.js';
import './Vision.css';

export default function Vision() {
  return (
    <section id="vision" className="section vision" aria-label="Vision and mission">
      <div className="container vision__grid">
        {[vision, mission].map((b) => (
          <div className="vision__block" key={b.title}>
            <h2 className="section-title">{b.title}</h2>
            <p>{b.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
