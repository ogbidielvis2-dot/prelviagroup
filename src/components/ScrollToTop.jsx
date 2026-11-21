import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import './ScrollToTop.css';

export default function ScrollToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 700);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <a href="#home" className={`to-top${show ? ' to-top--show' : ''}`} aria-label="Back to top" tabIndex={show ? 0 : -1}>
      <ArrowUp size={20} aria-hidden="true" />
    </a>
  );
}
