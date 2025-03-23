import React from "react";
import NavbarComponent from "./components/misc/NavbarComponent";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Work from "./components/Work";
import GoBackUp from "./components/misc/GoBackUp";
import Projects from "./components/Projects";
import Papers from "components/Papers";
import Footer from "components/misc/Footer";

function App() {
  return (
    <>
      <div id="#">.
      <div className="overlay"></div>
      <div className="stars" aria-hidden="true"></div>
      <div className="starts2" aria-hidden="true"></div>
      <div className="stars3" aria-hidden="true"></div>
        <NavbarComponent />
        <AboutMe />
        <Skills />
        <Education />
        <Work />
        <Projects />
        <Papers />
        <Footer />
      </div>
      <GoBackUp />
    </>
  );
}

export default App;
