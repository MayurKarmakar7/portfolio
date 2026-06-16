import React from "react";

const HeaderText: React.ForwardRefRenderFunction<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
> = ({ children, ...props }, ref) => {
  return (
    <h2
      ref={ref}
      className="section-heading"
      {...props}
    >
      {children}
    </h2>
  );
};

export default React.forwardRef(HeaderText);
