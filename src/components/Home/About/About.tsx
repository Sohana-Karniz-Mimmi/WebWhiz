import GradientHeading from "@/ui/GradientHeading";
import Text from "@/ui/Text";
import VerticalDivider from "@/ui/VerticalDivider";
import React from "react";
import Skills from "./Skills";

const About = () => {
  return (
    <div className="lg:py-[76px] py-[42px]">
      <div className="custom_container pb-8">
        <Text className="xl:pl-1" variant="caption">
          About us
        </Text>
        <div className="flex md:flex-row flex-col justify-between lg:gap-[81px] md:gap-[39px] gap-[8px]">
          <Text
            className="lg:max-w-[554px] md:max-w-[330px] max-w-[327px] xl:pt-[3px]"
            variant="title"
          >
            We are turning products into
            <GradientHeading
              className="xl:pl-0"
              imgClass="lg:h-[16px] md:h-[12px] h-[9px] w-[210px] md:w-[245px] lg:w-[343px] xl:left-[13px] left-[6px]"
            >
              Timeless elegance
            </GradientHeading>
          </Text>
          <div className="flex gap-[12px] xl:mt-[8px]">
            <VerticalDivider className="hidden md:block w-[4px] md:h-[54px] lg:h-[64px]" />
            <Text className="hidden md:block lg:max-w-[489px] md:max-w-[489px] w-full xl:pl-[2px] line-clamp-2">
              In our portfolio section, you'll embark on a visual journey
              through a meticulously curated gallery that represents the epitome
              of digital excellence and creative ingenuity.
            </Text>
            <Text className="block md:hidden max-w-[327px] mx-auto text-center">
              In our portfolio section, you'll embark on a visual journey
              through a meticulously curated gallery
            </Text>
          </div>
        </div>

        {/* Skill and image */}
        <Skills />
      </div>
    </div>
  );
};

export default About;
