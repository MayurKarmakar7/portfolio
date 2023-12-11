import React, { HTMLAttributes } from "react";

const Text: React.ForwardRefRenderFunction<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
> = ({ children, ...props }): JSX.Element => {
  return (
    <p
      className="break-before-all text-xl shadow-indigo-500/50"
      {...props}
    >
      {children}
    </p>
  );
};

export default React.forwardRef(Text);
