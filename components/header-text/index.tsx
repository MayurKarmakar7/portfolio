import React from "react";

const HeaderText: React.ForwardRefRenderFunction<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
> = ({ children, ...props }) => {
  return (
    <h1
      className="break-after-all text-3xl font-bold tracking-wider text-zinc-800 dark:text-zinc-100"
      {...props}
    >
      {children}
    </h1>
  );
};

export default React.forwardRef(HeaderText);
