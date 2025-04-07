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
  imgClass = "absolute bottom-3 object-cover z-0",
  className = "relative inline-block xl:pl-3",
  textClass = "relative z-10 bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent",
}: GradientHeadingProps) => {
  return (
    <h2 className={className}>
      <Text variant="title" className={textClass}>
        {children}
      </Text>
      {src && (
        <Image
          src={src}
          alt=""
          width={width}
          height={height}
          className={imgClass}
          priority
        />
      )}
    </h2>
  );
};

export default GradientHeading;
