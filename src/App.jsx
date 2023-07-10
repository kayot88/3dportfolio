import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import TechMobile from "./components/TechMobile";
import { WorksMobile } from "./components/WorksMobile";
import FeedbacksMobile from "./components/FeedbacksMobile";
import AboutMobile from "./components/AboutMobile";
import ExperienceMobile from "./components/ExperienceMobile";
import ContactMobile from "./components/ContactMobile";
import { stars } from "./assets";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero isMobile={isMobile} />
        </div>
        {isMobile ? <AboutMobile /> : <About />}
        {isMobile ? <ExperienceMobile /> : <Experience />}

        {isMobile ? <TechMobile /> : <Tech />}
        {isMobile ? <WorksMobile /> : <Works />}
        {isMobile ? <FeedbacksMobile /> : <Feedbacks />}
        <div className="relative z-0">
          {isMobile ? <img src={stars} alt="stars" /> : <StarsCanvas />}
          {isMobile ? <ContactMobile /> : <Contact />}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
