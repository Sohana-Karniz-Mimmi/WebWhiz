import { ReactNode } from "react";

type TextProps = {
  children: ReactNode;
  variant?: "body" | "caption" | "title" | "subtitle";
  className?: string;
  as?: "p" | "span" | "div";
};

const Text = ({
  children,
  variant = "body",
  className = "",
  as = "p",
}: TextProps) => {
  const baseClasses = "font-normal";

  const variantClasses = {
    body: "text-base text-body leading-[160%]",
    caption: "text-sm text-caption font-semibold leading-[160%] uppercase tracking-[1.68px]",
    title: "lg:text-[40px] md:text-[30px] text-[25px] !font-bold text-primary leading-[140%]",
    subtitle: "text-lg font-medium text-secondary",
  };

  const Component = as;

  return (
    <Component
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Component>
  );
};

export default Text;
