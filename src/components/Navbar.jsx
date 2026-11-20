
import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`navbar-wrapper ${scrolled ? "is-scrolled" : ""}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 10000,
        background: scrolled
          ? "rgba(5, 6, 8, 0.99)"
          : "rgba(5, 6, 8, 0.94)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.12)"
          : "1px solid rgba(255,255,255,0.06)",
        boxShadow: scrolled
          ? "0 10px 35px rgba(0,0,0,0.65)"
          : "0 4px 20px rgba(0,0,0,0.2)",
        transition: "all 0.3s ease",
      }}
    >
      <nav className="navbar" aria-label="Main Navigation">
        <div className="nav-container">

          {/* Logo */}
          <a href="#home" className="logo" onClick={closeMenu}>
            HAMADH<span>.</span>
          </a>

          {/* Navigation Links */}
          <div className={`nav-links ${isOpen ? "is-open" : ""}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </div>

          {/* Right Actions */}
          <div className="nav-actions">

            <a
              href="#contact"
              className="nav-button"
              onClick={closeMenu}
            >
              <span>Let's Talk</span>
              <span className="nav-button-arrow" aria-hidden="true">
                ↗
              </span>
            </a>

            {/* Mobile Toggle */}
            <button
              type="button"
              className={`nav-toggle ${isOpen ? "is-active" : ""}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              <span className="toggle-bar"></span>
              <span className="toggle-bar"></span>
              <span className="toggle-bar"></span>
            </button>

          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
