import { Navbar, Hero, Experience, About, Skills, Projects, Contact } from './components'

function App() {

  return (
    <main className="min-h-screen bg-[#050b18] text-white relative">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  )
}

export default App
