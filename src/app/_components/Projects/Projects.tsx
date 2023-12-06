import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NextPage } from "next";
import { useEffect, useRef } from "react";
import CP from "../../../assets/logos/collegePapers.png";
import CowinHistory from "../../../assets/logos/cowinHistory.jpg";
import DjangoRF from "../../../assets/logos/djangoRF.png";
import Keras from "../../../assets/logos/keras.png";
import MatPlot from "../../../assets/logos/matPlot.png";
import MySQL from "../../../assets/logos/mySQL.png";
import Numpy from "../../../assets/logos/numpy.png";
import Pandas from "../../../assets/logos/pandas.png";
import Python from "../../../assets/logos/python.png";
import ReactJS from "../../../assets/logos/react.png";
import ReactRouter from "../../../assets/logos/reactRouter.png";
import Redux from "../../../assets/logos/redux.png";
import SciKit from "../../../assets/logos/scikit.png";
import TensorFL from "../../../assets/logos/tensorFlow.png";
import TextHeaders from "../textHeaders/textHeaders";
import selector from "./Projects.module.css";

type ProjectDetails = {
  header: string;
  contributions: string[];
  techImages: string[];
  logo: string;
  name: string;
};

const Projects: NextPage = (): JSX.Element => {
  const triggerContainerRef = useRef<HTMLDivElement | null>(null);
  const experienceItemRefs = Array.from({ length: 2 }, () =>
    useRef<HTMLDivElement | null>(null),
  );
  gsap.registerPlugin(ScrollTrigger);
  const projectDetails: ProjectDetails[] = [
    {
      name: "CowinHistory",
      header:
        "Cowinhistory.com enables users to view past vaccine slot availability events, allowing them to predict future availability. It helps inform individuals about past slot events and assists them in making timely vaccine bookings.",
      contributions: [
        "Provides historical data on vaccine slot availability",
        "Shows past events and predicts future slot availability dates and vaccine quantity",
        "Aids individuals in staying informed about past slot events",
        "Assists users in making timely vaccine bookings based on historical patterns",
      ],
      techImages: [
        ReactJS.src,
        Redux.src,
        ReactRouter.src,
        Python.src,
        DjangoRF.src,
        MySQL.src,
        TensorFL.src,
        Keras.src,
        Pandas.src,
        MatPlot.src,
        Numpy.src,
        SciKit.src,
      ],
      logo: CowinHistory.src,
    },
    {
      name: "Collegepapers",
      header:
        "This Web Application is being developed to serve the course notes, learning materials, and previous year's question papers specific to a particular course semester.",
      contributions: [
        "Offers course-specific resources, learning materials, and previous year question papers",
        "Provides essential information about the college and various courses",
        "Presents Utkal University's proposed course syllabus",
        "Functions as a centralized platform for students to access and download study materials as needed",
      ],
      techImages: [
        ReactJS.src,
        Redux.src,
        ReactRouter.src,
        Python.src,
        DjangoRF.src,
        MySQL.src,
      ],
      logo: CP.src,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("#header", {
        duration: 0.3,
        text: "",
        scrollTrigger: {
          trigger: triggerContainerRef.current,
          start: "-=70",
          end: "+=20",
          scrub: 1,
        },
      });
      gsap.from("#expDetail", {
        scrollTrigger: {
          trigger: triggerContainerRef.current,
          start: "top top",
          end: "top center",
          scrub: 1,
        },
        stagger: { amount: 0.3 },
        scale: 0,
        duration: 0.2,
        delay: 0.1,
      });
    }, triggerContainerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      className="flex h-full w-full flex-col items-start justify-center gap-28"
      ref={(el) => {
        triggerContainerRef.current = el;
      }}
    >
      <TextHeaders>Projects</TextHeaders>
      {projectDetails.map((project:ProjectDetails ) => {
        return <></>
      })}
      {/* <div className="flex h-full flex-col items-center gap-24 md:w-full md:flex-row md:items-start md:justify-around md:gap-8">
        {projectDetails.map((project: ProjectDetails, index: number) => (
          <div
            className="relative max-h-full w-4/5 flex-grow rounded"
            key={index}
            id="expDetail"
            ref={experienceItemRefs[index]}
          >
            <div className="flex h-full w-full flex-col items-center">
              <div className="max-h-full w-full flex-grow rounded-2xl border-[1px] border-solid border-white border-opacity-10 bg-gradient-to-b from-black/40 to-black/20 py-4 text-center shadow-[0_0_20px_10px_rgba(0,0,0,0.75)] backdrop-blur-lg">
                {Array.from({ length: project.name.length }).map(
                  (_, index: number) => (
                    <div id="char" className="inline-block text-2xl">
                      {project.name[index]}
                    </div>
                  ),
                )}
                <div className="flex h-full w-full flex-col items-start justify-start gap-4 px-2 pt-8">
                  <p className="w-full break-before-auto text-left text-base font-normal">
                    {project.header}
                  </p>
                  <div className="w-full">
                    <p className="text-left text-base">Key functions</p>
                    <div className="mx-6 w-auto font-normal">
                      {project.contributions.length > 0 && (
                        <ul className="list-outside list-disc">
                          {project.contributions.map(
                            (item: string, index: number) => (
                              <li className="text-left text-base" key={index}>
                                {item}
                              </li>
                            ),
                          )}
                        </ul>
                      )}
                    </div>
                  </div>
                  <div className="mt-6 flex w-full flex-row flex-wrap justify-center gap-4">
                    {project.techImages.map((imgUrl: string, index: number) => (
                      <TechImage imageUrl={imgUrl} key={index} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

const TechImage: NextPage<{ imageUrl: string }> = ({
  imageUrl,
}): JSX.Element => {
  return (
    <div
      className={`h-14 w-14 overflow-hidden rounded-full shadow-lg ${selector.borderGlow}`}
    >
      <img className="h-full w-full object-cover" src={imageUrl} alt="!IMG" />
    </div>
  );
};

export default Projects;
