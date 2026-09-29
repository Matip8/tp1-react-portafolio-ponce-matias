function ProjectCard({ nombre, descripcion, tecnologias }) {
  return (
    <article className="project-card">
      <div className="project-card-header">
        <span>&lt;/&gt;</span>
        <span>PROYECTO</span>
      </div>

      <h3>{nombre}</h3>

      <p>{descripcion}</p>

      <div className="project-technologies">
        {tecnologias.map((tecnologia) => (
          <span key={tecnologia}>
            {tecnologia}
          </span>
        ))}
      </div>
    </article>
  )
}

export default ProjectCard