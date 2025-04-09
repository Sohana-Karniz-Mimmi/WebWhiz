"use client";

import Image from "next/image";
import { useState } from "react";

const PortfolioSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const slides = [
    "/images/slider/portfolio-silder1.png",
    "/images/slider/portfolio-silder2.png",
    {
      main: "/images/slider/portfolio-silder3.png",
      overlay: "/images/slider/portfolio-silder3-top.png",
    },
    "/images/slider/portfolio-silder4.png",
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 2 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 2 : prev - 1));
  };

  return (
    <div className="max-w-[1440px] mx-auto">
      {/* Slider Container */}
      <div className="relative h-[390px] overflow-hidden">
        <div className="custom_container relative h-full xl:pl-[2px]">
          {/* Slides Track */}
          <div
            className="flex gap-6 transition-transform duration-300"
            style={{
              transform: `translateX(-${currentSlide * 570}px)`,
              width: `${slides.length * 570}px`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="w-[570px] h-[390px] rounded-[16px] relative"
              >
                {/* Main Image */}
                <Image
                  src={typeof slide === "object" ? slide.main : slide}
                  alt={`Portfolio ${index + 1}`}
                  fill
                  className="object-cover rounded-[16px]"
                  priority={
                    index === currentSlide || index === currentSlide + 1
                  }
                />

                {/* Special Overlay for slide 3 */}
                {typeof slide === "object" && index === 2 && (
                  <>
                    {/* Gradient Overlay Image */}
                    <div className="absolute inset-0 z-10">
                      <Image
                        src={slide.overlay}
                        alt=""
                        fill
                        className="object-cover rounded-[16px]"
                      />
                    </div>

                    {/* Content Box */}
                    <div className="absolute left-6 bottom-6 right-5 flex p-4 items-center gap-[87px] rounded-[16px] bg-white z-20">
                      <div className="flex-1">
                        <h3 className="text-[20px] font-bold leading-[150%] xl:pl-[2px]">
                          Finance Banking Landing page
                        </h3>
                        <p className="mt-1 w-[331px] text-body text-[14px] font-normal leading-[160%] line-clamp-1">
                          In our portfolio section, you'll embark on a visual
                          journey through a meticulously curated gallery that
                          represents.
                        </p>
                      </div>

                      {/* Icon with gradient background */}
                      <div className="flex p-4 justify-center items-center gap-2.5 rounded-[12px] bg-gradient-to-r from-[#5F90F0] to-[#185AD9]">
                        <Image
                          src="/icons/send-white-arrow.svg"
                          alt="View project"
                          width={24}
                          height={24}
                          className="flex-shrink-0"
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="custom_container flex justify-between items-center pt-6 px-4">
        <div className="w-[50px]"></div>

        {/* Dots */}
        <div className="flex gap-2 xl:ml-[77px]">
          {slides.slice(0, slides.length - 1).map((_, index) => (
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

        {/* Navigation Controls */}
        <div className="flex items-center gap-4">
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="flex w-[32px] h-[32px] justify-center items-center rounded-[80px] border border-[#5F90F0]"
            >
              <Image
                src="/icons/arrow-left.svg"
                alt="Previous"
                width={16}
                height={16}
              />
            </button>

            <div className="flex items-center">
              <span className="text-[18.903px] font-normal text-secondary">
                01
              </span>
              <span className="text-[11.027px] text-body">/06</span>
            </div>

            <button
              onClick={nextSlide}
              className="flex w-[32px] h-[32px] justify-center items-center rounded-[80px] bg-gradient-to-r from-[#5F90F0] to-[#185AD9]"
            >
              <Image
                src="/icons/arrow-right.svg"
                alt="Next"
                width={16}
                height={16}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSlider;
