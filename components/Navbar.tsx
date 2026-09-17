export default function Navbar() {
  return (
    <header className="navbar">
      <a href="/" className="brand">
        Sebastián Yopasá
      </a>

      <div className="navbar-right">
        <div className="availability">
          <span className="availability-dot" />
          Open to opportunities
        </div>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
        </nav>
      </div>
    </header>
  );
}