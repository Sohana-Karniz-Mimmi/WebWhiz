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
    <section className="relative max-w-[1440px] w-full mx-auto overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Main Square Background */}
        <div className="relative max-w-[1440px] h-[786px] flex-shrink-0 mx-auto bg-[rgba(24,90,217,0.04)]">
          <Image
            src="/icons/square.svg"
            alt="Background pattern"
            fill
            className="object-cover"
          />

          {/* Left Triangle */}
          <div className="absolute bottom-0 left-0 w-[808px] h-[744px] flex-shrink-0">
            <Image
              src="/icons/left-triangle.svg"
              alt="Decorative triangle"
              fill
              className="object-cover object-left-bottom"
            />
          </div>

          {/* Right Triangle */}
          <div className="absolute bottom-0 right-0 w-[632px] h-[550px] flex-shrink-0">
            <Image
              src="/icons/right-triangle.svg"
              alt="Decorative triangle"
              fill
              className="object-cover object-right-bottom"
            />
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="lg:pt-[80px] md:pt-[32px] pt-[24px]">
        <div className="custom_container lg:pb-[40px] md:pb-[32px] pb-[24px]">
          <Text className="xl:pl-1 md:text-start text-center" variant="caption">
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
            <Text className="md:max-w-[339px] md:ml-0 md:mr-auto mx-auto w-[327px] md:text-start text-center" variant="title">
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
              <Text className="block md:hidden max-w-[327px] text-center">
                In our portfolio section, you'll embark on a visual journey
                through a meticulously
              </Text>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-6 md:mt-[16px] mt-[24px] xl:pl-[3px] overflow-x-auto pb-2">
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
