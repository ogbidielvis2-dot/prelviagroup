import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from './Logo.jsx';
import { navLinks } from '../config/site.js';
import './Header.css';

const ids = navLinks.map((l) => l.href.slice(1));

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const mark = window.scrollY + 140;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= mark) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="container header__inner">
        <Logo />
        <nav id="primary-nav" className={`nav${open ? ' nav--open' : ''}`} aria-label="Primary">
          <ul>
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={close}
                  className={active === l.href.slice(1) ? 'is-active' : ''}
                  aria-current={active === l.href.slice(1) ? 'true' : undefined}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn--primary nav__cta-mobile" href="#contact" onClick={close}>
            Get in Touch <ArrowRight size={16} aria-hidden="true" />
          </a>
        </nav>
        <a className="btn btn--primary header__cta" href="#contact">
          Get in Touch <ArrowRight size={16} aria-hidden="true" />
        </a>
        <button
          className="header__toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
