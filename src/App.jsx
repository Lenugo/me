import { Navbar, Hero, Stars, Experience, About, Skills, Projects, Contact } from './components'

function App() {

  return (
    <main className="min-h-screen bg-[#050b18] text-white relative">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <div className="relative z-0">
        <Projects />
        <Contact />
        <Stars />
      </div>
    </main>
  )
}

export default App
