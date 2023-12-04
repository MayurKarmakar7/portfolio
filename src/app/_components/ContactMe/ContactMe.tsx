"use client";

import { NextPage } from "next";
import TextHeaders from "../textHeaders/textHeaders";
import ContactForm from "./ContactForm/ContactForm";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const ContactMe: NextPage = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("#header", {
        duration: 0.3,
        text: "",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "-=70",
          end: "+=20",
          scrub: 1,
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      className="flex h-full w-3/5 flex-col items-center justify-start gap-8 mt-96 pt-36"
      ref={(el) => {
        containerRef.current = el;
      }}
    >
      <TextHeaders>Contact Me</TextHeaders>
      <div
        className={`h-3/5 w-full flex-grow rounded border-[1px] border-solid border-white border-opacity-10 bg-gradient-to-b from-black/40 to-black/20 bg-clip-padding py-4 text-center shadow-[0_0_20px_10px_rgba(0,0,0,0.75)] backdrop-blur-lg backdrop-filter`}
      >
        <div className="flex h-full items-center justify-center text-black">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
