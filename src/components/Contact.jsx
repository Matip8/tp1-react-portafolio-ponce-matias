function Contact() {
  return (
    <section id="contacto" className="contact section">
      <div className="section-title">
        <p>&gt; Contacto</p>
        <h2>¿Hablamos?</h2>
      </div>

      <div className="contact-container">
        <p className="contact-text">
          Si querés contactarme o conocer más sobre mis proyectos,
          podés encontrarme a través de los siguientes medios.
        </p>

        <div className="contact-links">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=Mati8ponce@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span className="contact-symbol">@</span>

            <div>
              <h3>Email</h3>
              <p>Mati8ponce@gmail.com</p>
            </div>
          </a>

          <a
            href="https://github.com/Matip8"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span className="contact-symbol">&lt;/&gt;</span>

            <div>
              <h3>GitHub</h3>
              <p>github.com/Matip8</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact