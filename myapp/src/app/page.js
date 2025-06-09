import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Threed from '../components/Threed';
import Journey from '../components/Journey';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      {/* <Journey/> */}
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}