import gsap, { Power3 } from "gsap";
import React, { useEffect, useRef } from "react";
import { TextPlugin } from "gsap/TextPlugin";

const TextHeader: React.ForwardRefRenderFunction<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
> = ({ children, ...props }, ref): JSX.Element => {
  const headerRef = useRef<HTMLParagraphElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  gsap.registerPlugin(TextPlugin);
  useEffect(() => {
    // const ctx = gsap.context(() => {
    //   gsap.from("#header", {
    //     duration: 3,
    //     text: "",
    //     scrollTrigger: {
    //       trigger: containerRef.current,
    //       start: "-=40",
    //       end: "+=20",
    //       scrub: 1,
    //     },
    //   });
    // }, containerRef);
    // return () => ctx.revert();
  }, []);
  return (
    <div
      className="flex h-full flex-col items-center gap-2"
      ref={(el) => {
        containerRef.current = el;
      }}
    >
      <p
        id="header"
        ref={(el) => {
          headerRef.current = el;
        }}
        className="mx-auto w-full text-center text-5xl text-sky-100"
        {...props}
      >
        {children}
      </p>
    </div>
  );
};

export default React.forwardRef(TextHeader);
