export default function Logo({ light = false, href = '#home' }) {
  return (
    <a className={`logo${light ? ' logo--light' : ''}`} href={href} aria-label="Prelvia Group home">
      <span className="logo__main">PRELVIA</span>
      <span className="logo__sub">GROUP</span>
    </a>
  );
}
