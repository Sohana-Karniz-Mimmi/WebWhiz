import { ReactNode } from "react";
import Image from "next/image";
import Text from "@/ui/Text";

interface GradientHeadingProps {
  children: ReactNode;
  src?: string;
  width?: number;
  height?: number;
  imgClass?: string;
  className?: string;
  textClass?: string;
}

const GradientHeading = ({
  children,
  src = "/images/imagination-bg.svg",
  width = 377,
  height = 12,
  imgClass = "",
  className = "xl:pl-3",
  textClass = "",
}: GradientHeadingProps) => {
  return (
    <h2 className={`relative inline-block ${className}`}>
      <Text variant="title" className={`relative z-10 bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent ${textClass}`}>
        {children}
      </Text>
      {src && (
        <Image
          src={src}
          alt=""
          width={width}
          height={height}
          className={`absolute bottom-3 object-cover z-0 ${imgClass}`}
          priority
        />
      )}
    </h2>
  );
};

export default GradientHeading;
