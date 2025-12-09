import './App.css'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Works } from './components/Works'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Testimonials } from './components/Testimonials'

function App() {
  return (
    <>
      <Header />
      <Hero/>
      <About/>
      <Works/>
      <Testimonials/>
      <Contact/>
    </>
  )
}

export default App
