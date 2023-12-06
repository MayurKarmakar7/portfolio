"use client";

import { NextPage } from "next";
import Certifications from "../_components/Ceritfication/Certification";
import ContactMe from "../_components/ContactMe/ContactMe";
import Education from "../_components/Education/Education";
import Experience from "../_components/Experience/Experience";
import Projects from "../_components/Projects/Projects";
import Skills from "../_components/Skills/Skills";
import Introduction from "../_components/intro/intro";

const Portfolio: NextPage = (): JSX.Element => {
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center gap-16 overflow-x-hidden"
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
  );
};

export default Portfolio;
