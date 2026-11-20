
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Dolphin Hajj & Umrah",
      category: "Travel Management Platform",
      description:
        "A digital travel platform for Hajj and Umrah packages, pilgrim bookings, document management, and customer services.",
      tech: ["React", "Node.js", "Firebase"],
      live: "https://dolphinhaj.com",
    },
    {
      title: "Arees Attars & Perfumes",
      category: "E-Commerce",
      description:
        "An online perfume shopping platform with product browsing, shopping cart, and modern user interface.",
      tech: ["React", "Tailwind CSS", "Supabase"],
      live: "https://areesperfumes.in/",
    },
    {
      title: "Student Portal",
      category: "Web Application",
      description:
        "A student management interface featuring reusable components, student details, forms, and interactive counter functionality.",
      tech: ["React", "CSS", "JavaScript"],
      live: "YOUR_STUDENT_PORTAL_LIVE_URL",
    },
    {
      title: "PRINTHUB",
      category: "Digital Platform",
      description:
        "A digital printing service project designed to provide a convenient online experience for customers.",
      tech: ["React", "JavaScript", "CSS"],
      live: "YOUR_PRINTHUB_LIVE_URL",
    },
  ];

  return (
    <section className="projects section" id="projects">
      <div className="section-heading">
        <span>MY WORK</span>
        <h2>Featured Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => {
          const isLiveAvailable =
            Boolean(project.live) && !project.live.startsWith("YOUR_");

          return (
            <article className="project-card" key={project.title}>
              <div className="project-card-header">
                <span className="project-category">{project.category}</span>
                <span className="project-index" aria-label={`Project 0${index + 1}`}>
                  0{index + 1}
                </span>
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech" aria-label="Technologies used">
                {project.tech.map((tech) => (
                  <span className="tech-tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-card-footer">
                {isLiveAvailable ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`View live project for ${project.title}`}
                  >
                    <span>View Live Project</span>
                    <span className="project-link-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                ) : (
                  <span className="project-status-badge">
                    <span className="project-status-dot" aria-hidden="true"></span>
                    In Development
                  </span>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
