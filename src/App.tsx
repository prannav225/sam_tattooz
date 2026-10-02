import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Studio } from './components/Studio';
import { Works } from './components/Works';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[#1E1C1A] text-[#F7F5F2] selection:bg-[#D0AD87] selection:text-[#1C1A19]">
      {/* Subtle Architectural Plaster Grain Overlay */}
      <div className="fixed inset-0 studio-noise-overlay pointer-events-none z-40 opacity-70" />

      {/* Modern Floating Island Header */}
      <Header />

      {/* Main Experience Flow */}
      <main className="relative">
        <Hero />
        <About />
        <Studio />
        <Works />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
