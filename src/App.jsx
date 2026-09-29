import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import MatrixBackground from './components/MatrixBackground.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <MatrixBackground />

      <Header nombre="Matias Exequiel Ponce" />

      <main>
        <Hero
          nombre="Matias Exequiel Ponce"
          profesion="Junior Full Stack Developer en formación"
        />

        <About />

        <Skills />

        <Projects />

        <Contact />
      </main>

      <Footer nombre="Matias Exequiel Ponce" />
    </>
  )
}

export default App