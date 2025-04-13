"use client";

import PaginationControls from "@/ui/PaginationControls";
import Image from "next/image";
import { useState } from "react";

const PortfolioSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/images/slider/portfolio-silder1.webp",
    "/images/slider/portfolio-silder2.png",
    {
      main: "/images/slider/portfolio-silder3.png",
      overlay: "/images/slider/portfolio-silder3-top.png",
    },
    "/images/slider/portfolio-silder4.webp",
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full overflow-hidden z-10">
      <div className="relative flex items-center justify-center w-full">
        <div
          className="flex items-center lg:gap-[24px] md:gap-[35px] gap-[24px] transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 570}px)`,
            width: `${slides.length * 570}px`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative h-[256px] lg:h-[390px] w-[327px] lg:w-[554px] rounded-[16px] overflow-hidden shrink-0"
            >
              {/* Main Image */}
              <Image
                src={typeof slide === "object" ? slide.main : slide}
                alt={`Portfolio ${index + 1}`}
                fill
                className="object-cover lg:rounded-[16px] rounded-[8px]"
                priority={index === currentSlide || index === currentSlide + 1}
              />

              {/* Overlay for slide 3 */}
              {typeof slide === "object" && index === 2 && (
                <>
                  <div className="absolute inset-0 z-10">
                    <Image
                      src={slide.overlay}
                      alt=""
                      fill
                      className="object-cover lg:rounded-[16px] rounded-[8px]"
                    />
                  </div>

                  {/* Content Box */}
                  <div className="absolute lg:left-6 lg:bottom-6 lg:right-5 bottom-0 left-0 right-0 flex px-[16px] lg:py-[16px] py-[8px] items-center lg:gap-[87px] lg:rounded-[16px] rounded-[8px] bg-white z-20 lg:max-w-[506px] md:max-w-[327px]">
                    <div className="flex-1">
                      <h3 className="lg:text-[20px] text-[14px] font-bold lg:leading-[150%] leading-[160%] xl:pl-[2px]">
                        Finance Banking Landing page
                      </h3>
                      <p className=" mt-1 lg:max-w-[331px] max-w-[160px]  text-body text-[14px] font-normal leading-[160%] line-clamp-1">
                        In our portfolio section, you'll embark on a visual
                        journey through a meticulously curated gallery that
                        represents.
                      </p>
                    </div>

                    {/* Icon with gradient  */}
                    <div className="flex lg:p-[16px] p-[8px] justify-center items-center gap-2.5 lg:rounded-[12px] rounded-[8px] bg-gradient-to-r from-[#5F90F0] to-[#185AD9]">
                      <Image
                        src="/icons/send-white-arrow.svg"
                        alt="View project"
                        width={24}
                        height={24}
                        className="flex-shrink-0 lg:w-[24px] lg:h-[24px] w-[20px] h-[20px]"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="hidden lg:flex custom_container justify-between items-center py-[24px]">
        <div className="w-[50px]"></div>

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
        <div className="flex items-center gap-[16px]">
          <div className="flex gap-[12px]">
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
                {String(currentSlide + 1).padStart(2, "0")}
              </span>
              <span className="text-[11.027px] text-body">
                /{String(slides.length).padStart(2, "0")}
              </span>
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

      {/* Navigation */}
      <div className="flex lg:hidden custom_container md:justify-end justify-center items-center py-[24px]">
        <div className="md:w-[435px] flex gap-[144px]">
          <div className="hidden md:flex items-center gap-2 xl:ml-[77px]">
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
          {/* <div className="flex items-center gap-[16px]">
            <div className="flex gap-[12px]">
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
                  {String(currentSlide + 1).padStart(2, "0")}
                </span>
                <span className="text-[11.027px] text-body">
                  /{String(slides.length).padStart(2, "0")}
                </span>
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
          </div> */}
          {/* Basic usage */}
      <PaginationControls 
        currentIndex={currentSlide}
        totalItems={slides.length}
        onPrev={prevSlide}
        onNext={nextSlide}
      />
        </div>
      </div>
    </div>
  );
};

export default PortfolioSlider;
