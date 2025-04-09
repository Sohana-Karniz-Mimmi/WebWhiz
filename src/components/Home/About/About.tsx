import GradientHeading from "@/ui/GradientHeading";
import Text from "@/ui/Text";
import VerticalDivider from "@/ui/VerticalDivider";
import React from "react";

const About = () => {
  return (
    <div className="md:py-[76px] py-[32px]">
      <div className="custom_container pb-8">
        <Text className="xl:pl-1" variant="caption">
          About us
        </Text>
        <div className="flex lg:flex-row flex-col justify-between lg:gap-[81px] gap-5">
          <div className="md:w-[554px] w-full xl:pt-[3px]">
            <Text variant="title">
              We are turning products into
              <GradientHeading
                className="xl:pl-0"
                imgClass="h-[16px] left-[13px]"
                width={343}
              >
                Timeless elegance
              </GradientHeading>
            </Text>
          </div>
          <div className="flex gap-3 mt-[8px]">
            <VerticalDivider width="w-[4px]" height="h-[64px]" />
            <Text className="md:w-[489px] w-full xl:pl-[2px]">
              In our portfolio section, you'll embark on a visual journey
              through a meticulously curated gallery that represents the epitome
              of digital excellence and creative ingenuity.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
