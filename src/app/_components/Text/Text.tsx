import React, { HTMLAttributes } from "react";

const Text: React.ForwardRefRenderFunction<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
> = ({ children, ...props }): JSX.Element => {
  return (
    <p
      className="break-before-all text-xl shadow-indigo-500/50 text-shadow-[0_4px_8px_var(--tw-shadow-color)]"
      {...props}
    >
      {children}
    </p>
  );
};

export default React.forwardRef(Text);
