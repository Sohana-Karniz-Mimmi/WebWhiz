// app/components/Services.tsx
import GradientHeading from "@/ui/GradientHeading";
import Text from "@/ui/Text";
import VerticalDivider from "@/ui/VerticalDivider";
import Image from "next/image";
import React from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <section className="relative max-w-[1440px] lg:h-[992px] md:h-[684px] h-[1174px] w-full mx-auto overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Main Square Background */}
        <div className="relative max-w-[1440px] lg:h-[992px] md:h-[684px] h-[1174px] flex-shrink-0 mx-auto bg-[rgba(24,90,217,0.04)]">
          {/* <Image
            src="/icons/square.svg"
            alt="Background pattern"
            fill
            className="object-cover"
          /> */}

          {/* Left Triangle */}
          <div className="md:block hidden absolute bottom-0 lg:left-0 -left-[100px] lg:w-[808px] lg:h-[744px] md:w-[569px] h-[529px] flex-shrink-0">
            <Image
              src="/icons/left-triangle.svg"
              alt="Decorative triangle"
              fill
              className="object-cover object-left-bottom"
            />
          </div>

          {/* Right Triangle */}
          <div className="md:block hidden absolute bottom-0 lg:right-0 -right-[115px] lg:w-[632px] lg:h-[550px] md:w-[463px] md:h-[414px] flex-shrink-0">
            <Image
              src="/icons/right-triangle.svg"
              alt="Decorative triangle"
              fill
              className="object-cover object-right-bottom"
            />
          </div>
          {/* Left Triangle Mobile */}
          <div className="block md:hidden absolute bottom-0 left-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="204"
              height="278"
              viewBox="0 0 204 278"
              fill="none"
            >
              <path
                d="M204 278L-74 0V278H204Z"
                fill="url(#paint0_linear_13_1163)"
                fill-opacity="0.02"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_13_1163"
                  x1="-60.5049"
                  y1="30.2174"
                  x2="229.61"
                  y2="75.8298"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#5F90F0" />
                  <stop offset="1" stop-color="#185AD9" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Right Triangle Mobile*/}
          <div className="block md:hidden absolute bottom-0 right-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="178"
              height="217"
              viewBox="0 0 178 217"
              fill="none"
            >
              <path
                d="M1.52588e-05 217L226 0V217H1.52588e-05Z"
                fill="url(#paint0_linear_13_1162)"
                fill-opacity="0.02"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_13_1162"
                  x1="215.029"
                  y1="23.587"
                  x2="-20.3385"
                  y2="62.1267"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#5F90F0" />
                  <stop offset="1" stop-color="#185AD9" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="lg:py-[80px] md:py-[32px] py-[24px]">
        <div className="custom_container">
          <Text className="xl:pl-1" variant="caption">
            Services
          </Text>
          <div className="flex md:flex-row flex-col justify-between lg:gap-[110px] md:gap-[39px] gap-[8px]">
            <Text
              className="lg:max-w-[516px] md:max-w-[330px] max-w-[327px] xl:pt-[3px]"
              variant="title"
            >
              Our
              <GradientHeading
              className="pl-2"
              imgClass="md:h-[12px] h-[10px] w-[229px] md:w-[269px] lg:w-[382px] xl:left-[13px] left-[9px]">
                satisfied customers
              </GradientHeading>
              share their stories
            </Text>
            <div className="flex gap-[12px] xl:mt-[8px]">
              <VerticalDivider className="w-[4px] md:h-[54px] lg:h-[64px]" />
              <Text className="hidden md:block lg:max-w-[489px] md:max-w-[318px] w-full xl:pl-[2px] line-clamp-2">
              In our portfolio section, you'll embark on a visual journey through a meticulously curated gallery that represents the epitome of digital excellence and creative ingenuity.
              </Text>
              <Text className="block md:hidden max-w-[327px] mx-auto text-center">
                In our portfolio section, you'll embark on a visual journey
                through a meticulously curated gallery
              </Text>
            </div>
          </div>

          <ServicesCard />
        </div>
      </div>
    </section>
  );
};

export default Services;
