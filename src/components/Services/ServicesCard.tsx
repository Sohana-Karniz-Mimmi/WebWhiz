import Text from "@/ui/Text";
import React from "react";
import { services } from "../../mock/services";

const ServicesCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] md:gap-x-[24px] md:gap-y-[32px] xl:gap-[32px] pt-[24px] md:pt-[32px] xl:pt-[40px] place-items-center md:place-items-start">
      {services.map((service, index) => (
        <div
          key={index}
          className={`flex w-full  md:max-w-[340px] h-[226px] lg:max-w-[450px] xl:max-w-[554px] xl:h-[311px] p-[24px] xl:p-[32px] flex-col items-start rounded-[12px] xl:rounded-[32px] bg-white 
      ${
        index === 1
          ? "border border-primary-start shadow-[ -12px_24px_56px_0px_rgba(4,_45,_21,_0.08)]"
          : ""
      }`}
        >
          <div className="flex justify-between items-start w-full pb-[12px] xl:pb-[16px]">
            <div className="w-[54px] h-[54px] xl:w-[80px] xl:h-[80px] p-[12px] rounded-[8px] xl:rounded-[16px] bg-[rgba(24,90,217,0.10)] flex justify-center items-center">
              {service.icon}
            </div>

            {/* send Icon */}
            <div className="flex p-[12px] justify-center items-center rounded-[42px] bg-gradient-to-r from-primary-start to-[#185AD9]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="w-[18px] h-[18px] xl:w-[24px] xl:h-[24px]"
              >
                <path
                  d="M19 5L5 19"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 15.27V5H8.73"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <h3 className="text-[20px] xl:text-[28px] font-bold leading-[150%] xl:leading-[140%] pb-[4px] xl:pb-[8px]">
            {service.title}
          </h3>

          <Text className="w-full max-w-[280px] sm:max-w-full md:max-w-[292px] xl:max-w-[490px] xl:pl-[2px] xl:line-clamp-4 line-clamp-3 xl:h-[104px] md:h-[78px] h-[78px] text-[16px]">
            {service.description}
          </Text>
        </div>
      ))}
    </div>
  );
};

export default ServicesCard;
