import gsap from "gsap";
import { NextPage } from "next";
import { useEffect, useRef } from "react";
import PythonDjango from "../../../assets/logos/pythonDjango.jpg";
import ReactJS from "../../../assets/logos/reactJs.png";
import Udemy from "../../../assets/logos/udemy.png";
import { LinkIcon } from "../Education/EducationContainer/Icons";
import TextHeaders from "../textHeaders/textHeaders";
import selector from "./Certification.module.css";

type Certifications = {
  image: string;
  issued: string;
  certId: string;
  link: string;
};

const Certifications: NextPage = (): JSX.Element => {
  const certifications: Certifications[] = [
    {
      image: ReactJS.src,
      issued: "Mar/ 2021",
      certId: "UC-840177ec-c9f4-41f9-a39a-27d34e4af316",
      link: "https://www.udemy.com/certificate/UC-840177ec-c9f4-41f9-a39a-27d34e4af316/",
    },
    {
      image: PythonDjango.src,
      issued: "Mar/ 2018",
      certId: "UC-ZPNYJ3TO",
      link: "https://www.udemy.com/certificate/UC-ZPNYJ3TO/",
    },
  ];
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-16">
      <TextHeaders>Certifications</TextHeaders>
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex h-full w-full flex-col items-center justify-centre gap-48 md:flex-row md:gap-8">
          {certifications.map((certificateDetails: Certifications) => (
            <Container
              image={certificateDetails.image}
              issued={certificateDetails.issued}
              certId={certificateDetails.certId}
              link={certificateDetails.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Container: NextPage<Certifications> = ({
  image,
  certId,
  issued,
  link,
}): JSX.Element => {
  return (
    <div className="h-4/5 w-full md:w-35 flex-grow rounded-md object-cover p-8">
      <CertificationItem
        image={image}
        issued={issued}
        certId={certId}
        link={link}
      />
    </div>
  );
};

const CertificationItem: NextPage<Certifications> = ({
  image,
  certId,
  issued,
  link,
}): JSX.Element => {
  const handleGotoCertificate = (link: string) => {
    window.open(link, "_blank");
  };

  useEffect(() => {
    gsap.utils.toArray(containerRef.current).forEach((card: any) => {
      if (frontRef.current && backRef.current) {
        gsap.set(card, {
          transformStyle: "preserve-3d",
          transformPerspective: 700,
        });

        gsap.set(backRef.current, { rotationY: -180 });

        const tl = gsap
          .timeline({ paused: true })
          .to(frontRef.current, { duration: 1, rotationY: 180 })
          .to(backRef.current, { duration: 1, rotationY: 0 }, 0)
          .to(card, { z: 50 }, 0)
          .to(card, { z: 0 }, 0.5);
        (card as HTMLElement).addEventListener("mouseenter", function () {
          tl.play();
        });
        (card as HTMLElement).addEventListener("mouseleave", function () {
          tl.reverse();
        });
      }
    });
  }, []);
  const frontRef = useRef<HTMLImageElement | null>(null);
  const backRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  return (
    <div
      className="flex h-3/5 w-full flex-row items-start justify-center gap-4"
      ref={(el) => (containerRef.current = el)}
    >
      <img
        src={image}
        alt="react"
        className={`rounded-md ${selector.cardFront} h-2/5 w-2/5`}
        ref={(el) => (frontRef.current = el)}
      />
      <div
        className={`flex h-2/5 w-2/5 flex-col items-center gap-2 ${selector.cardBack} py-8`}
        ref={(el) => (backRef.current = el)}
      >
        <img
          src={Udemy.src}
          alt="udemy"
          className="h-28 w-44 rounded-md bg-transparent"
        />
        <div className="flex h-full w-full flex-row items-center justify-center gap-2">
          <p className="text-lg font-normal">Udemy</p>
          <LinkIcon
            height={"2rem"}
            width={"2rem"}
            fill="white"
            className="cursor-pointer"
            onClick={(event) => {
              event.preventDefault();
              handleGotoCertificate(link);
            }}
          />
        </div>
        <div className="flex w-full flex-row justify-center gap-2">
          <p className="text-base font-thin">Issued on - {issued}</p>
        </div>
        <div className="flex w-full flex-row justify-center gap-2">
          <p className="text-base font-thin">Certificate Id - {certId}</p>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
