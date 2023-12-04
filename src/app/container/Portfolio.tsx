"use client";

import { NextPage } from "next";
import Certifications from "../_components/Ceritfication/Certification";
import ContactMe from "../_components/ContactMe/ContactMe";
import Education from "../_components/Education/Education";
import Experience from "../_components/Experience/Experience";
import HeroContainer from "../_components/HeroContainer/HeroContainer";
import Projects from "../_components/Projects/Projects";
import Skills from "../_components/Skills/Skills";
import Introduction from "../_components/intro/intro";

const Portfolio: NextPage = (): JSX.Element => {
  return (
    <div className="flex h-full flex-col items-center gap-24">
      <div className="hidden min-h-screen place-items-center justify-center lg:flex">
        <HeroContainer />
      </div>
      <div
        className="flex h-full w-4/5 flex-col items-center justify-center gap-16 overflow-x-hidden pb-4"
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
