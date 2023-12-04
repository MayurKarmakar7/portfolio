import { NextPage } from "next";
import { useEffect, useRef } from "react";
import TextHeaders from "../textHeaders/textHeaders";
import selector from "./Education.module.css";
import EducationContainer from "./EducationContainer/EducationContainer";
import gsap from "gsap";

const Education: NextPage = (): JSX.Element => {
  const parentDivRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("#box", {
        scrollTrigger: {
          trigger: parentDivRef.current,
          start: "top top",
          end: "top center",
          scrub: 1,
        },
        stagger: { amount: 0.3 },
        opacity: 0,
        duration: 1,
      });
    }, parentDivRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="flex min-h-full w-full flex-col items-center justify-center gap-16"
      ref={(el) => {
        parentDivRef.current = el;
      }}
    >
      <TextHeaders>Education</TextHeaders>
      <div
        ref={(el) => (containerRef.current = el)}
        id="box"
        className={`h-full w-full rounded-2xl border bg-clip-padding text-center backdrop-blur-md backdrop-filter md:w-2/5 ${selector.card}`}
        style={{
          background: "rgba( 255, 255, 255, 0.25 )",
          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur( 4px )",
          WebkitBackdropFilter: "blur( 4px )",
          border: "1px solid rgba( 255, 255, 255, 0.18 )",
        }}
      >
        <div className="top-[-0px] h-full w-full rounded-md border-0 border-b-gray-200">
          <div className="flex h-full w-full place-items-center justify-center rounded-md">
            <EducationContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
