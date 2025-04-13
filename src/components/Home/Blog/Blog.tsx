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
    <div className="custom_container py-12">
      <div className="flex items-center gap-[70px]">
        {/* Image */}
        <div className="relative flex-shrink-0">
          {/* Background */}
          <div className="w-[554px] h-[450px] rounded-[16px] bg-[#EDEEFB]"></div>

          {/* Image on top of background */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[72px] w-[369px] h-[510px]">
            <Image
              src="/images/blog.png"
              alt="Blog"
              width={369}
              height={510}
              className="rounded-[12px] border-[7px] border-white w-full h-full object-cover"
              style={{
                width: "369px",
                height: "510px",
              }}
            />
          </div>

          {/* Navigation buttons */}
          <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 flex gap-2">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-[50px] h-[4px] rounded-[3px] ${
                  currentSlide === index
                    ? "bg-gradient-to-r from-[#5F90F0] to-[#185AD9]"
                    : "bg-gradient-to-r from-[#5F90F0]/10 to-[#185AD9]/10"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <Text className="xl:pl-1" variant="caption">
            Blog
          </Text>
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
          <div className="flex gap-[12px] xl:mt-[16px] xl:mb-[40px]">
            <VerticalDivider className="w-[4px] md:h-[54px] lg:h-[78px]" />
            <Text className="hidden md:block lg:max-w-[500px] md:max-w-[318px] w-full xl:pl-[2px] line-clamp-2">
              The team consistently delivered outstanding results surpassing our
              expectations in terms of creativity strategy Graphic design is a
              dynamic and creative field that blends artistry with technology
            </Text>
            <Text className="block md:hidden max-w-[327px] mx-auto text-center">
              In our portfolio section, you'll embark on a visual journey
              through a meticulously curated gallery
            </Text>
          </div>

          {/* Pagination */}
          <PaginationControls
            currentIndex={0}
            totalItems={6}
            onPrev={prevSlide}
            onNext={nextSlide}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
