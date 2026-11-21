import Logo from './Logo.jsx';
import SocialIcon from './Icons.jsx';
import { company, navLinks, social } from '../config/site.js';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo light />
          <p>{company.footerBlurb}</p>
        </div>
        <nav aria-label="Footer">
          <h2 className="footer__h">Quick Links</h2>
          <ul>
            {navLinks.map((l) => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="footer__h">Follow Us</h2>
          <ul className="footer__social">
            {social.filter((s) => s.url).map((s) => (
              <li key={s.id}>
                <a href={s.url} aria-label={s.label} target="_blank" rel="noopener noreferrer">
                  <SocialIcon name={s.id} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container footer__legal">
        © {new Date().getFullYear()} Prelvia Group. All rights reserved.
      </div>
    </footer>
  );
}
