import "./Skills.css";

function Skills() {
  const skillGroups = [
    {
      title: "Frontend Development",
      category: "Client Side",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Tailwind CSS"],
    },
    {
      title: "Backend Development",
      category: "Server & Logic",
      skills: ["Node.js", "Express.js", "Python", "Java", "C"],
    },
    {
      title: "Database & Cloud",
      category: "Data & Storage",
      skills: ["MongoDB", "Firebase", "Supabase", "SQL Basics"],
    },
    {
      title: "Tools & Design",
      category: "Workflow & UI",
      skills: ["Git", "GitHub", "Figcraft", "Canva", "Power BI", "VS Code", "Antigravity"],
    },
    {
      title: "AI & Modern Tech",
      category: "Exploration",
      skills: ["AI Developer Tools", "Prompt&Loop Engineering","Reverse Engineering", "Generative AI", "REST APIs"],
    },
  ];

  return (
    <section className="skills section" id="skills">
      <div className="section-heading">
        <span>My Expertise</span>
        <h2>Technical Skills</h2>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <div className="skill-card-top">
              <span className="skill-category-label">{group.category}</span>
              <span className="skill-count">{group.skills.length} skills</span>
            </div>

            <h3>{group.title}</h3>

            <div className="skill-list" aria-label={`Skills for ${group.title}`}>
              {group.skills.map((skill) => (
                <span className="skill-item" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
