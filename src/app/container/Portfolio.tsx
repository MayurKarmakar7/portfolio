"use client";

import { gsap } from "gsap";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { NextPage } from "next";
import { useEffect } from "react";
import Certifications from "../_components/Ceritfication/Certification";
import ContactMe from "../_components/ContactMe/ContactMe";
import Education from "../_components/Education/Education";
import Experience from "../_components/Experience/Experience";
import Projects from "../_components/Projects/Projects";
import Skills from "../_components/Skills/Skills";
import Introduction from "../_components/intro/intro";
import HeroContainer from "../_components/HeroContainer/HeroContainer";

const Portfolio: NextPage = (): JSX.Element => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    const smoothScroll = ScrollSmoother.create({
      effects: true,
      smoothTouch: 0.1,
      smooth: 2,
    });
  }, []);
  return (
    <div className="flex h-full flex-col items-center gap-24">
      <div className="hidden lg:flex min-h-screen place-items-center justify-center">
        <HeroContainer />
      </div>
      <div
        className="flex h-full w-4/5 flex-col items-center justify-center gap-28 pb-4 overflow-x-hidden"
        id="about"
      >
        <Introduction />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <ContactMe />
      </div>
    </div>
  );
};

export default Portfolio;