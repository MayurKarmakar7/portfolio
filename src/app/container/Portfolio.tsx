"use client";

import { NextPage } from "next";
import { useRef } from "react";
import Certifications from "../_components/Ceritfication/Certification";
import ContactMe from "../_components/ContactMe/ContactMe";
import Education from "../_components/Education/Education";
import Experience from "../_components/Experience/Experience";
import Footer from "../_components/Footer/Footer";
import Header from "../_components/Header/Header";
import Projects from "../_components/Projects/Projects";
import Skills from "../_components/Skills/Skills";
import Introduction from "../_components/intro/intro";

const Portfolio: NextPage = (): JSX.Element => {
  const introductionRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const educationRef = useRef<HTMLDivElement | null>(null);
  const certificationRef = useRef<HTMLDivElement | null>(null);
  const contactmeRef = useRef<HTMLDivElement | null>(null);

  const handleScrollIntoView = (
    view:
      | "skills"
      | "education"
      | "experience"
      | "projects"
      | "certification"
      | "contactme"
      | "introduction"
      | "",
  ) => {
    switch (view) {
      case "skills":
        if (skillsRef.current) {
          skillsRef.current.scrollIntoView({
            behavior: "smooth",
          });
        }
        break;
      case "certification":
        if (certificationRef.current) {
          certificationRef.current.scrollIntoView({
            behavior: "smooth",
          });
        }
        break;
      case "contactme":
        if (contactmeRef.current) {
          contactmeRef.current.scrollIntoView({
            behavior: "smooth",
          });
        }
        break;
      case "education":
        if (educationRef.current) {
          educationRef.current.scrollIntoView({
            behavior: "smooth",
          });
        }
        break;
      case "experience":
        if (experienceRef.current) {
          experienceRef.current.scrollIntoView({
            behavior: "smooth",
          });
        }
        break;
      case "projects":
        if (projectsRef.current) {
          projectsRef.current.scrollIntoView({
            behavior: "smooth",
          });
        }
        break;
      case "introduction":
        if (introductionRef.current) {
          introductionRef.current.scrollIntoView({
            behavior: "smooth",
          });
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex h-full flex-col gap-16 md:gap-24">
      <Header scrollIntoView={handleScrollIntoView} />
      <div
        className="flex h-full w-full flex-col items-center justify-center gap-32"
        id="about"
      >
        <Introduction ref={introductionRef} />
        <Skills ref={skillsRef} />
        <Experience ref={experienceRef} />
        <Projects ref={projectsRef} />
        <Education ref={educationRef} />
        <Certifications ref={certificationRef} />
        <ContactMe ref={contactmeRef} />
      </div>
      <Footer scrollIntoView={handleScrollIntoView} />
    </div>
  );
};

export default Portfolio;
