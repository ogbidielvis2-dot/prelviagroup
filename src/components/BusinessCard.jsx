import { ArrowRight } from 'lucide-react';

export default function BusinessCard({ division, onLearnMore }) {
  return (
    <article className="card">
      <div className="card__img">
        <img src={division.image} alt={division.alt} loading="lazy" width="500" height="300" />
      </div>
      <div className="card__body">
        <h3>{division.name}</h3>
        <p>{division.description}</p>
        <a
          className="card__link"
          href="#contact"
          onClick={() => onLearnMore(division)}
          aria-label={`Learn more about ${division.name}`}
        >
          Learn More <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
