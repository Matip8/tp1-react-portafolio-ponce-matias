import { useState } from 'react'
import fotoPerfil from '../assets/foto-perfil.png'

function About() {
  const [mostrarMas, setMostrarMas] = useState(false)

  function cambiarInformacion() {
    setMostrarMas(!mostrarMas)
  }

  return (
    <section id="sobre-mi" className="about section">
      <div className="section-title">
        <p>&gt; Sobre mí</p>
        <h2>Conoceme un poco más</h2>
      </div>

      <div className="about-container">

        <div className="about-photo">
            <img
                src={fotoPerfil}
                alt="Foto de Matias Exequiel Ponce"
                className="profile-photo"
            />
        </div>

        <div className="about-content">
          <p>
            Soy estudiante de la Tecnicatura Universitaria en Programación
            y actualmente me encuentro en formación como desarrollador
            Junior Full Stack.
          </p>

          <p>
            Me interesa el desarrollo web y continuar adquiriendo
            experiencia tanto en tecnologías frontend como backend.
          </p>

          {mostrarMas && (
            <div className="extra-info">
              <p>
                Mi objetivo es seguir desarrollando mis conocimientos,
                participar en nuevos proyectos y adquirir experiencia
                profesional en el área del desarrollo de software.
              </p>

              <p>
                Actualmente continúo aprendiendo tecnologías relacionadas
                con el desarrollo de aplicaciones web y fortaleciendo
                mis conocimientos de programación.
              </p>
            </div>
          )}

          <button
            className="btn btn-primary about-button"
            onClick={cambiarInformacion}
          >
            {mostrarMas ? 'Ver menos' : 'Ver más'}
          </button>
        </div>
      </div>
    </section>
  )
}

export default About