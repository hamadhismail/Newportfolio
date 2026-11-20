import "./Hero.css";
import HeroImage from "../assets/Heroimage.jpg";

function Hero() {
  return (
    <section className="hero" id="home">
      {/* Left Content */}
      <div className="hero-content">
        <span className="hero-badge">
          <span className="hero-badge-dot" aria-hidden="true"></span>
          Available for Opportunities
        </span>

        <h1>
          Hello, I'm
          <span className="hero-name">Hamadh Ismail</span>
        </h1>

        <p className="hero-subtitle">
          Full Stack Developer &amp; CSE Student
        </p>

        <p className="hero-description">
          I build modern, responsive, and user-friendly web
          applications. I enjoy transforming ideas into
          practical digital experiences using technology.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            <span>Explore My Work</span>
            <span className="btn-arrow" aria-hidden="true">↗</span>
          </a>

          <a href="#contact" className="secondary-btn">
            <span>Contact Me</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="hero-socials">
          <span className="social-label">Connect:</span>
          <a
            href="https://github.com/hamadhismail"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub profile (opens in new tab)"
          >
            GitHub <span className="social-arrow" aria-hidden="true">↗</span>
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn profile (opens in new tab)"
          >
            LinkedIn <span className="social-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      {/* Right Side Profile Photo */}
      <div className="hero-image">
        <div className="hero-image-glow" aria-hidden="true"></div>

        <div className="hero-image-frame">
          <img
            src={HeroImage}
            alt="Hamadh Ismail - Full Stack Developer"
            className="profile-image"
            loading="eager"
            width="350"
            height="440"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
