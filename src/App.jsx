import HeroSection from "./HeroSection";
import AboutUs from "./AboutUs";
import WorkoutSection from "./WorkoutSection"
import Plans from "./Plans"
import ContactUs from "./ContactUs"
import Location from "./Location"
import Footer from "./Footer";


function App() {

  return (
    <main className="bg-black text-white">
  <div id="home">
    <HeroSection />
  </div>
  <hr className="my-8 border-gray-700" />

  <div id="about">
    <AboutUs />
  </div>
  <hr className="my-8 border-gray-700" />

  <div id="workout">
    <WorkoutSection />
  </div>
  <hr className="my-8 border-gray-700" />

  <div id="plans">
    <Plans />
  </div>
  <hr className="my-8 border-gray-700" />

  <div id="contactus">
    <ContactUs />
  </div>
  <hr className="my-8 border-gray-700" />

  <div id="location">
    <Location />
  </div>

  <Footer />
</main>

  )
}

export default App
