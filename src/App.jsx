import { WaveBackground, Hero, About, Skills, Projects, Contact } from './components'

function App() {

  return (
    <main className="min-h-screen bg-[#050b18] text-white relative">
      <WaveBackground />
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}

export default App
