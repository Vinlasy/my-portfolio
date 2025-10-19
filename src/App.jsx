import { AboutMe } from './components/AboutMe/AboutMe'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Portfolio } from './components/Portfolio/Portfolio'
import { Skills } from './components/Skills/Skills'

function App() {

  return (
    <>
      <Header />

      <main>
        
        <AboutMe />

        <Skills />

        <Portfolio />
        
      </main>
    </>
  )
}

export default App
