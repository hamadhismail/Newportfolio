import "./About.css";

function About() {
  const pillars = [
    {
      title: "Creative Engineering",
      subtitle: "Frontend & Interfaces",
      description:
        "Crafting intuitive, accessible, and high-performance user interfaces with clean styling and fluid micro-interactions.",
    },
    {
      title: "Full-Stack Architecture",
      subtitle: "Backend & Systems",
      description:
        "Building reliable web applications, database structures, and connected services with modern JavaScript frameworks.",
    },
    {
      title: "Practical Innovation",
      subtitle: "Emerging Tech & AI",
      description:
        "Exploring generative tools, modern developer workflows, and scalable engineering patterns to solve real-world problems.",
    },
  ];

  return (
    <section className="about section" id="about">
      <div className="section-heading">
        <span>Introduction</span>
        <h2>About Me</h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h3>
            Building digital experiences through thoughtful engineering.
          </h3>

          <p>
            I'm Hamadh Ismail, a Computer Science and Engineering student
            passionate about web development, software engineering, and creating
            impactful digital tools.
          </p>

          <p>
            My work focuses on bridging the gap between clean code and intuitive
            user experience. Whether designing an interactive client portal or
            architecting a backend workflow, I strive for performance, clarity,
            and craft in every project.
          </p>

          <div className="about-stats-row">
            <div className="stat-item">
              <span className="stat-number">4+</span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Core Technologies</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">CSE</span>
              <span className="stat-label">Engineering Student</span>
            </div>
          </div>
        </div>

        <div className="about-pillars">
          {pillars.map((pillar, index) => (
            <article className="pillar-card" key={pillar.title}>
              <div className="pillar-header">
                <span className="pillar-index">0{index + 1}</span>
                <span className="pillar-subtitle">{pillar.subtitle}</span>
              </div>
              <h4>{pillar.title}</h4>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
