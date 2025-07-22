import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe"
import Education from "./Education"
import Skills from "./Skills"
import Projects from "./Projects"
import ContactMe from "./ContactMe"
import Footer from "./Footer"

function App() {
  return (
    <main className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white scroll-smooth">
      <HeroSection />

      <AboutMe />
      <Education />
      <Skills />
      <Projects />
      <ContactMe />

      <Footer />
    </main>
  )
}

export default App;
