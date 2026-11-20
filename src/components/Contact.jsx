import { useState, useEffect } from "react";
import "./Contact.css";

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending with a slight delay for realistic tactile feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 400);
  };

  // Automatically hide popup after 4 seconds
  useEffect(() => {
    if (!isSubmitted) return;

    const timer = setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, [isSubmitted]);

  return (
    <section className="contact section" id="contact">
      <div className="section-heading">
        <span>Get In Touch</span>
        <h2>Let's Work Together</h2>
        <p>
          Have an idea or opportunity? Let's discuss how we can turn it into
          something meaningful.
        </p>
      </div>

      <div className="contact-content">
        {/* Left Column: Direct Info */}
        <div className="contact-text">
          <span className="contact-eyebrow">Let's Connect</span>

          <h3>
            Have a project <span>in mind?</span>
          </h3>

          <p>
            I'm currently looking for internships, full-stack development
            roles, and freelance collaborations.
          </p>

          <p>
            Whether you have a specific project inquiry, need a developer on
            your team, or simply want to say hello, feel free to reach out.
          </p>

          <div className="contact-availability">
            <span className="availability-dot" aria-hidden="true"></span>
            <span>Available for new opportunities</span>
          </div>

          <div className="contact-direct">
            <span className="direct-label">Prefer connecting directly?</span>
            <a
              href="mailto:hamadhismail.dev@gmail.com"
              className="contact-email"
              aria-label="Send direct email to hamadhismail.dev@gmail.com"
            >
              <span>hamadhismail.dev@gmail.com</span>
              <span className="email-arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-heading">
            <span className="form-kicker">Send a Message</span>
            <h3>Let's talk.</h3>
            <p>Fill in the details below and I'll get back to you shortly.</p>
          </div>

          <div className="form-field">
            <label htmlFor="contact-name">Your Name</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder="e.g. Alex Morgan"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="contact-email">Email Address</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder="alex@company.com"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="contact-message">Your Message</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Tell me about your project, timeline, or idea..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="contact-submit"
            disabled={isSubmitting}
          >
            <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
            <span className="submit-arrow" aria-hidden="true">
              ↗
            </span>
          </button>
        </form>
      </div>

      {/* Floating Success Notification */}
      {isSubmitted && (
        <div
          className="success-toast"
          role="status"
          aria-live="polite"
        >
          <div className="toast-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12.5L9.5 17L19 7"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="toast-content">
            <h4>Message Sent Successfully</h4>
            <p>Thank you for reaching out! I will respond promptly.</p>
          </div>

          <button
            type="button"
            className="toast-close"
            onClick={() => setIsSubmitted(false)}
            aria-label="Dismiss notification"
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
}

export default Contact;
