interface VerticalDividerProps {
    className?: string;
    height?: string;
    width?: string;
    marginTop?: string;
  }
  
  const VerticalDivider = ({
    className = "",
    height = "h-[65px]",
    width = "w-3",
    marginTop = "mt-[7px]"
  }: VerticalDividerProps) => {
    return (
      <div 
        className={`${width} ${height} rounded-lg bg-gradient-to-b from-primary-start to-primary-end ${marginTop} ${className}`}
      />
    );
  };
  
  export default VerticalDivider;