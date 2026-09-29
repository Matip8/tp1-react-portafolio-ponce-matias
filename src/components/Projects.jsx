import ProjectCard from './ProjectCard.jsx'

const proyectos = [
  {
    id: 1,
    nombre: "Gestor de Eventos",
    descripcion:
      "Aplicación para administrar eventos, participantes e inscripciones.",
    tecnologias: ["HTML", "CSS", "JavaScript", "Axios", "JSON Server"]
  },
  {
    id: 2,
    nombre: "Sistema de Stock",
    descripcion:
      "Sistema desarrollado para gestionar productos y controlar información de stock.",
    tecnologias: ["C#", "MySQL"]
  }
]

function Projects() {
  return (
    <section id="proyectos" className="projects section">
      <div className="section-title">
        <p>&gt; Proyectos</p>
        <h2>Algunos de mis trabajos</h2>
      </div>

      <div className="projects-grid">
        {proyectos.map((proyecto) => (
          <ProjectCard
            key={proyecto.id}
            nombre={proyecto.nombre}
            descripcion={proyecto.descripcion}
            tecnologias={proyecto.tecnologias}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects