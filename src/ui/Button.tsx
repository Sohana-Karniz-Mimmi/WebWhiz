import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

const Button = ({ 
  children, 
  variant = "primary", 
  className = "", 
  onClick 
}: ButtonProps) => {
  const baseClasses = "text-[14px] font-medium leading-[160%] flex py-[12px] px-[24px] justify-center items-center gap-2.5 rounded-[80px] transition-all duration-200";
  
  const variantClasses = {
    primary: "text-white bg-gradient-to-r from-primary-start to-primary-end hover:opacity-90",
    secondary: "text-secondary border border-primary-start hover:bg-gray-50"
  };

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;