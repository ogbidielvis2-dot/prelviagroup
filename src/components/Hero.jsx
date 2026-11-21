import { ArrowRight } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__media">
        <img
          src="/images/hero.jpg"
          alt="Diverse team of African professionals standing together in front of a modern office building"
          width="792" height="401" fetchPriority="high"
        />
      </div>
      <div className="container hero__inner">
        <div className="hero__content">
          <h1 id="hero-title">
            Building Ideas.<br />
            <span className="accent">Creating Value.</span><br />
            Shaping Possibilities.
          </h1>
          <p>
            Prelvia Group brings technology, education, fashion and print together to deliver
            innovative solutions, creative services and opportunities for growth.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary btn--lg" href="#businesses">
              Explore Our Businesses <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="btn btn--outline btn--lg" href="#contact">Get in Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
}
