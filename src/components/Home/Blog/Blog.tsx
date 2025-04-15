"use client";

import React, { useState } from "react";
import Image from "next/image";
import Text from "@/ui/Text";
import GradientHeading from "@/ui/GradientHeading";
import VerticalDivider from "@/ui/VerticalDivider";
import PaginationControls from "@/ui/PaginationControls";

const Blog = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 1 - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 1 - 1 : prev - 1));
  };

  return (
    <div className="custom_container xl:pt-[212px] md:pt-[42px] pt-[60px] pb-[42px] relative">
      {/* Mobile: Title First */}
      <div className="md:hidden flex flex-col">
        <div className="text-center mb-[8px]">
          <Text variant="caption">Blog</Text>
          <Text variant="title" className="max-w-[327px] pt-2">
            Our
            <GradientHeading
              className="pl-2"
              imgClass="md:h-[12px] h-[10px] w-[229px] md:w-[269px] lg:w-[382px] xl:left-[13px] left-[9px]"
            >
              satisfied customers
            </GradientHeading>
            share their stories
          </Text>
        </div>
        <Text className=" max-w-[327px] mx-auto text-center">
          The team consistently delivered outstanding results surpassing our
          expectations in terms
        </Text>
      </div>

      <div className="flex flex-col md:flex-row items-center md:gap-[24px] lg:gap-[70px] md:mt-0 mt-[121px]">
        {/* Image */}
        <div className="relative w-full md:w-auto order-2 md:order-1">
          <div className="w-full md:w-[340px] lg:w-[554px] h-[300px] md:h-[284px] lg:h-[450px] lg:rounded-[16px] rounded-[8px] bg-[#EDEEFB] mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[52px] lg:bottom-[72px] w-[250px] md:w-[247px] lg:w-[369px] h-[350px] md:h-[348px] lg:h-[510px]">
              <Image
                src="/images/blog.png"
                alt="Blog"
                fill
                className="rounded-[12px] border-[4px] lg:border-[7px] border-white object-cover"
              />
            </div>
            <div className="absolute bottom-[32px] lg:bottom-[40px] left-1/2 -translate-x-1/2 flex gap-2">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-8 md:w-10 lg:w-[50px] h-1 md:h-[3px] rounded-[3px] ${
                    currentSlide === index
                      ? "bg-gradient-to-r from-primary-start to-[#185AD9]"
                      : "bg-gradient-to-r from-primary-start/10 to-[#185AD9]/10"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex md:hidden mt-[32px] justify-center w-full order-3">
          <PaginationControls
            currentIndex={0}
            totalItems={6}
            onPrev={prevSlide}
            onNext={nextSlide}
          />
        </div>
        {/* Content Section */}
        <div className="w-full md:flex-1 order-1 md:order-2 mt-[20px]">
          {/* Desktop and Tablet: Title */}
          <div className="hidden md:block">
            <Text className="md:pl-1" variant="caption">
              Blog
            </Text>
            <div className="flex flex-col justify-between md:gap-[16px] gap-[8px]">
              <Text
                className="lg:max-w-[516px] md:max-w-[330px] max-w-[327px] xl:pt-[3px]"
                variant="title"
              >
                Our
                <GradientHeading
                  className="pl-2"
                  imgClass="md:h-[12px] h-[10px] w-[229px] md:w-[269px] lg:w-[382px] xl:left-[13px] left-[9px]"
                >
                  satisfied customers
                </GradientHeading>
                share their stories
              </Text>
              <div className="flex gap-[12px] mb-[40px]">
                <VerticalDivider className="w-[4px] md:h-[54px] lg:h-[78px]" />
                <Text className="hidden md:block lg:max-w-[500px] md:max-w-[318px] w-full xl:pl-[2px] line-clamp-2">
                  The team consistently delivered outstanding results surpassing
                  our expectations in terms of creativity strategy Graphic
                  design is a dynamic and creative field that blends artistry
                  with technology
                </Text>
                <Text className="block md:hidden max-w-[327px] mx-auto text-center">
                  The team consistently delivered outstanding results surpassing
                  our expectations in terms
                </Text>
              </div>
            </div>
          </div>

          {/* Pagination - Desktop/Tablet */}
          <div className="hidden md:flex">
            <PaginationControls
              currentIndex={0}
              totalItems={6}
              onPrev={prevSlide}
              onNext={nextSlide}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
