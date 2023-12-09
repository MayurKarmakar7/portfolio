import React from "react";

const TextHeader: React.ForwardRefRenderFunction<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
> = ({ children, ...props }, ref): JSX.Element => {
  return (
    <h1
      className="break-after-all text-3xl font-bold tracking-wider text-zinc-800 dark:text-zinc-100"
      {...props}
    >
      {children}
    </h1>
    // <p
    //   id="header"
    //   className="mx-auto w-full text-center text-5xl text-sky-100"
    // >
    // </p>
  );
};

export default React.forwardRef(TextHeader);
