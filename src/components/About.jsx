import { ArrowRight } from 'lucide-react';
import { about } from '../config/site.js';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container about__inner">
        <div className="about__text">
          <span className="rule" aria-hidden="true" />
          <h2 id="about-title" className="section-title">{about.title}</h2>
          {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
          <a className="text-link" href="#vision">
            Our vision <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
        <figure className="about__img">
          <img src={about.image} alt={about.alt} loading="lazy" width="612" height="129" />
        </figure>
      </div>
    </section>
  );
}
