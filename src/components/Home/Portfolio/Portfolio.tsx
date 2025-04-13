"use client";

import Text from "@/ui/Text";
import VerticalDivider from "@/ui/VerticalDivider";
import Image from "next/image";
import { useState } from "react";
import PortfolioSlider from "./PortfolioSlider";
import GradientHeading from "@/ui/GradientHeading";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("All Project");

  const tabs = [
    "All Project",
    "UI/UX Design",
    "Graphic Design",
    "Developments",
  ];

  return (
    <section className="relative max-w-[1440px] lg:h-[786px] md:h-[617px] h-[592px] w-full mx-auto overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Main Square Background */}
        <div className="relative max-w-[1440px] lg:h-[786px] md:h-[617px] h-[592px] flex-shrink-0 mx-auto bg-[rgba(24,90,217,0.04)]">
          <Image
            src="/icons/square.svg"
            alt="Background pattern"
            fill
            className="object-cover"
          />

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
      <div className="lg:pt-[80px] md:pt-[32px] pt-[24px]">
        <div className="custom_container lg:pb-[40px] md:pb-[32px] pb-[24px]">
          <Text className="xl:pl-1" variant="caption">
            portfolio
          </Text>

          {/* Desktop and mobile */}
          <div className="hidden lg:flex md:flex-row flex-col justify-between lg:gap-0 gap-5">
            {/* title */}
            <Text
              className="md:max-w-[554px] w-full xl:pt-[3px]"
              variant="title"
            >
              Discovering digital mastery and
              <GradientHeading imgClass="h-[12px]">
                Creative innovation
              </GradientHeading>
            </Text>
            {/* description */}
            <div className="flex gap-[12px] mt-1">
              <VerticalDivider className="w-[4px] h-[64px]" />
              <Text className="md:max-w-[498px] w-full xl:pl-[2px]s">
                In our portfolio section, you'll embark on a visual journey
                through a meticulously curated gallery that represents the
                epitome of digital excellence and creative ingenuity.
              </Text>
            </div>
          </div>

          {/* Tablet  */}
          <div className="flex lg:hidden md:flex-row flex-col justify-between lg:gap-0">
            {/* title */}
            <Text className="md:max-w-[339px] w-[327px]" variant="title">
              Discovering digital mastery and
              <GradientHeading
                width={114}
                className="px-[4px]"
                imgClass="md:h-[12px] h-[9px]"
              >
                Creative
              </GradientHeading>
              <GradientHeading imgClass="md:h-[12px] h-[9px]">
                innovation
              </GradientHeading>
            </Text>
            {/* description */}
            <div className="flex gap-[12px] md:mt-[4px] mt-[8px]">
              <VerticalDivider className="hidden md:block w-[4px] h-[54px]" />
              <Text className="hidden md:block max-w-[348px] w-full line-clamp-2">
                In our portfolio section, you'll embark on a visual journey
                through a meticulously curated gallery that represents the
                epitome of digital excellence and creative ingenuity.
              </Text>
              <Text className="block md:hidden max-w-[327px] mx-auto text-center">
                In our portfolio section, you'll embark on a visual journey
                through a meticulously
              </Text>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-6 md:mt-[16px] mt-[24px] xl:pl-[3px] overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex md:px-[12px] md:py-[8px] px-[8px] py-[4px] justify-center items-center gap-2.5 whitespace-nowrap md:text-[16px] text-[14px] ${
                  activeTab === tab
                    ? "h-[42px] border-b-2 border-secondary text-secondary font-medium leading-[150%]"
                    : "text-body font-normal leading-[160%] "
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Slider */}
        <PortfolioSlider />
      </div>
    </section>
  );
};

export default Portfolio;
