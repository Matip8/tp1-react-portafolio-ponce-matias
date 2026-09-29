const habilidades = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "MySQL",
  "Git / GitHub",
  "REST API",
  "JSON",
  "Bootstrap"
]

function Skills() {
  return (
    <section id="habilidades" className="skills section">
      <div className="section-title">
        <p>&gt; Habilidades</p>
        <h2>Tecnologías que utilizo</h2>
      </div>

      <div className="skills-grid">
        {habilidades.map((habilidad) => (
          <div className="skill-card" key={habilidad}>
            <span className="skill-symbol">&lt;/&gt;</span>
            <h3>{habilidad}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills