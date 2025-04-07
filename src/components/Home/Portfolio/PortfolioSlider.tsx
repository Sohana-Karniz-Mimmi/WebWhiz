"use client";

import Image from "next/image";
import { useState } from "react";

const PortfolioSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const slides = [
    "/images/slider/portfolio-silder1.png",
    "/images/slider/portfolio-silder2.png", 
    "/images/slider/portfolio-silder3.png",
    "/images/slider/portfolio-silder4.png",
  ];

  const nextSlide = () => {
    setCurrentSlide(prev => (prev === slides.length - 2 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? slides.length - 2 : prev - 1));
  };

  return (
    <div className="max-w-[1440px] mx-auto">
      {/* Slider Container */}
      <div className="relative h-[390px] overflow-hidden">
        <div className="custom_container relative h-full">
          {/* Slides Track */}
          <div 
            className="flex gap-6 transition-transform duration-300"
            style={{
              transform: `translateX(-${currentSlide * 570}px)`,
              width: `${slides.length * 570}px`
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="w-[570px] h-[390px] rounded-[16px] relative"
              >
                <Image
                  src={slide}
                  alt={`Portfolio ${index + 1}`}
                  fill
                  className="object-cover rounded-[16px]"
                  priority={index === currentSlide || index === currentSlide + 1}
                />
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
              <span className="text-[18.903px] font-normal text-secondary">01</span>
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







// "use client";

// import Image from "next/image";
// import { useState } from "react";

// const PortfolioSlider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slides = [
//     "/images/slider/portfolio-silder1.png",
//     "/images/slider/portfolio-silder2.png",
//     "/images/slider/portfolio-silder3.png",
//     "/images/slider/portfolio-silder4.png",
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   return (
//     <div className="">
//       {/* Slider Container */}
//       <div className="flex gap-6 overflow-x-auto pb-4 custom_scrollbar">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 w-[554px] h-[390px] rounded-[16px] relative"
//           >
//             <Image
//               src={slide}
//               alt={`Portfolio ${index + 1}`}
//               fill
//               className="object-cover rounded-[16px]"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Navigation */}
//       <div className="custom_container flex justify-between mt-6 px-4">
//         <div className="w-[50px]"></div>
//         {/* Dots */}
//         <div className="flex justify-center items-center gap-2 mb-4">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-[50px] h-[4px] rounded-[3px] ${
//                 currentSlide === index
//                   ? "bg-gradient-to-r from-[#5F90F0] to-[#185AD9]"
//                   : "bg-gradient-to-r from-[#5F90F0]/10 to-[#185AD9]/10"
//               }`}
//             />
//           ))}
//         </div>

//         {/* Navigation Controls */}
//         <div className="flex gap-3">
//           <button
//             onClick={prevSlide}
//             className="flex w-[32px] h-[32px] justify-center items-center rounded-[80px] border border-[#5F90F0] hover:bg-gray-50 transition-colors"
//           >
//             <Image
//               src="/icons/arrow-left.svg"
//               alt="Previous"
//               width={16}
//               height={16}
//               className="flex-shrink-0"
//             />
//           </button>
//           {/* Page indicator */}
//           <div className="flex items-center">
//             <span className="text-secondary text-[18.903px] font-normal">
//               01
//             </span>
//             <span className="text-[11.027px] text-[#5D6B82]">/06</span>
//           </div>
//           <button
//             onClick={nextSlide}
//             className="flex w-[32px] h-[32px] justify-center items-center rounded-[80px] bg-gradient-to-r from-[#5F90F0] to-[#185AD9] hover:opacity-90 transition-opacity"
//           >
//             <Image
//               src="/icons/arrow-right.svg"
//               alt="Next"
//               width={16}
//               height={16}
//               className="flex-shrink-0"
//             />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PortfolioSlider;
