import './App.css'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Gallery } from './components/Gallery'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Testimonials } from './components/Testimonials'

function App() {
  return (
    <>
      <Header />
      <Hero/>
      <About/>
      <Gallery/>
      <Testimonials/>
      <Contact/>
    </>
  )
}

export default App
