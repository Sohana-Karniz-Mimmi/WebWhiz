interface VerticalDividerProps {
    className?: string;
  }
  
  const VerticalDivider = ({
    className = "mt-[7px] h-[65px] w-3",
  }: VerticalDividerProps) => {
    return (
      <div 
        className={`rounded-lg bg-gradient-to-b from-primary-start to-primary-end  ${className}`}
      />
    );
  };
  
  export default VerticalDivider;