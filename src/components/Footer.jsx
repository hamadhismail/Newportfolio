import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              HAMADH<span>.</span>
            </a>
            <p className="footer-tagline">
              Full Stack Developer &amp; Computer Science Student.
            </p>
          </div>

          <div className="footer-nav">
            <span className="footer-heading">Navigation</span>
            <div className="footer-nav-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className="footer-socials">
            <span className="footer-heading">Social</span>
            <div className="footer-social-links">
              <a
                href="https://github.com/hamadhismail"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
              <a
                href="https://www.linkedin.com/in/hamadhismail04"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Hamadh Ismail. All rights reserved.
          </p>

          <button
            type="button"
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <span className="top-arrow" aria-hidden="true">&uarr;</span>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
