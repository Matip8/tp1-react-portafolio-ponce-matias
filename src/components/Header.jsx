function Header({ nombre }) {
  return (
    <header className="header">
      <nav className="navbar">
        <h2 className="logo">&lt;{nombre} /&gt;</h2>

        <ul className="nav-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#sobre-mi">Sobre mí</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header