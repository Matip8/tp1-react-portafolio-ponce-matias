function Footer({ nombre }) {
  return (
    <footer className="footer">
      <p>
        &lt;/&gt; Desarrollado por {nombre}
      </p>

      <p className="footer-copy">
        Portfolio React
      </p>
    </footer>
  )
}

export default Footer