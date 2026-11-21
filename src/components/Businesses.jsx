import BusinessCard from './BusinessCard.jsx';
import { divisions } from '../config/site.js';
import './Businesses.css';

export default function Businesses({ onLearnMore }) {
  return (
    <section id="businesses" className="section businesses" aria-labelledby="biz-title">
      <div className="container">
        <header className="section-head">
          <h2 id="biz-title" className="section-title section-title--ruled">Our Businesses</h2>
          <p className="section-sub">Four Divisions. One Vision.</p>
        </header>
        <div className="businesses__grid">
          {divisions.map((d) => (
            <BusinessCard key={d.id} division={d} onLearnMore={onLearnMore} />
          ))}
        </div>
      </div>
    </section>
  );
}
