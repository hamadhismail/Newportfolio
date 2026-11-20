
import { useEffect, useState } from "react";
import "./Preloader.css";
import logo from "../assets/hamadh-logo.png";

function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    let startTime;
    let animationFrame;
    const duration = 2200;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const elapsed = timestamp - startTime;
      const value = Math.min(
        Math.floor((elapsed / duration) * 100),
        100
      );

      setProgress(value);

      if (value < 100) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setLeaving(true);

          setTimeout(() => {
            onComplete?.();
          }, 850);
        }, 350);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [onComplete]);

  return (
    <div className={`preloader ${leaving ? "preloader-exit" : ""}`}>
      <div className="preloader-noise"></div>

      <div className="preloader-content">
        <div className="logo-reveal">
          <img
            src={logo}
            alt="Hamadh Ismail Logo"
            className="preloader-logo"
          />
        </div>

        <div className="preloader-caption">
          <span></span>
          <p>FULL STACK DEVELOPER</p>
          <span></span>
        </div>

        <div className="loader-track">
          <div
            className="loader-progress"
            style={{ width: `${progress}%` }}
          />
          <div className="loader-shine"></div>
        </div>

        <div className="loader-bottom">
          <span>INITIALIZING EXPERIENCE</span>
          <span className="loader-number">
            {String(progress).padStart(2, "0")}%
          </span>
        </div>
      </div>

      <div className="preloader-corner">H.I. / 2026</div>
    </div>
  );
}

export default Preloader;
