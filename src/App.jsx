import React from "react"
import NavBar from './components/Navbar'
import Hero from './components/Hero'
import Achivements from "./components/Achivements"
import ChairManSection from "./components/ChairManSection"
import OurTeam from "./components/OurTeam"
import CTA from "./components/CTA"
import Footer from './components/Footer';

function App() {

  return (
    <div>
      <NavBar />
      <Hero />
      <Achivements />
      <ChairManSection />
      <OurTeam />
      <CTA />
      <Footer/>
    </div>
  )
}

export default App
