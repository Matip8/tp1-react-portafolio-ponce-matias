import avatar from '../assets/avatar.png'

function Hero({ nombre, profesion }) {
  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">&gt; Hola, soy</p>

        <h1>{nombre}</h1>

        <h2>{profesion}</h2>

        <p className="hero-description">
          Bienvenido a mi portfolio. Acá vas a poder conocer
          un poco sobre mí, mis habilidades y mis proyectos.
        </p>

        <div className="hero-buttons">
          <a href="#proyectos" className="btn btn-primary">
            Ver proyectos
          </a>

          <a href="#contacto" className="btn btn-secondary">
            Contactarme
          </a>
        </div>
      </div>

      <div className="hero-avatar">
        <img
            src={avatar}
            alt="Avatar"
            className="avatar-image"
        />
      </div>
    </section>
    )
}

export default Hero