import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import Footer from "./Footer";

function App() {
  return (
    <main className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white scroll-smooth">
      <section id="home">
        <HeroSection />
      </section>

      <section id="about">
        <AboutMe />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <ContactMe />
      </section>

      <Footer />
    </main>
  );
}

export default App;
