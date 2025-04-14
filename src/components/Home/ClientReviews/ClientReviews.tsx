"use client";

import React, { useState } from "react";
import Image from "next/image";
import PaginationControls from "@/ui/PaginationControls";
import Text from "@/ui/Text";
import VerticalDivider from "@/ui/VerticalDivider";
import { reviews } from "@/mock/reviews";

const ClientReviews: React.FC = () => {
  const [currentReview, setCurrentReview] = useState<number>(0);
  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="max-w-[1290px] xl:py-[76px] py-[42px] flex xl:flex-row flex-col xl:items-end md:gap-[32px] gap-[24px]">
        {/* Content and Images */}
        <div className="flex-1 relative">
          <div className="md:max-w-[360px] sm:max-w-full max-w-[327px] md:absolute lg:left-[150px] md:left-[40px] md:px-0 px-[24px] md:pb-0 pb-[15px]">
            <Text variant="title" className="mx-0 text-left">
              Client Reviews
            </Text>

            {/* description */}
            <div className="flex gap-[12px] xl:mt-[16px] mt-[8px]">
              <VerticalDivider className="w-[4px] h-[52px]" />
              <Text className="md:max-w-[314px] max-w-[327px] w-full xl:pl-[2px] md:!h-[52px] h-[52px] text-[16px]">
                The team at consistently delivered outstanding surpassing
                expectations
              </Text>
            </div>
          </div>

          <div className="flex xl:gap-[32px] md:gap-[24px] gap-[16px] items-end xl:pr-0 md:pr-[30px] pr-[24px]">
            {/* First Image */}
            <div className="w-[126px] h-[141px] md:w-[216px] md:h-[249px] xl:h-[212px] rounded-l-none md:rounded-r-[16px] rounded-r-[8px] overflow-hidden">
              <Image
                src="/images/review1.png"
                alt="Client Review 1"
                width={216}
                height={212}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Second Image */}
            <div className="w-[126px] h-[141px] md:w-[216px] md:h-[249px] xl:h-[212px] md:rounded-[16px] rounded-[8px] overflow-hidden">
              <Image
                src="/images/review2.png"
                alt="Client Review 2"
                width={216}
                height={212}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Third Image */}
            <div className="w-[135px] h-[176.912px] md:w-[306px] md:h-[401px] md:rounded-[16px] rounded-[8px] overflow-hidden">
              <Image
                src="/images/review3.png"
                alt="Client Review 3"
                width={306}
                height={401}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/*  Reviews and Rating */}
        <div className="flex-1 flex lg:flex-col flex-col-reverse xl:px-0 md:px-[32px] px-[24px] lg:gap-[16px] md:gap-[24px] gap-[16px]">
          {/* Pagination */}
          <div className="flex justify-end">
            <PaginationControls
              currentIndex={currentReview}
              separatorTextClass={
                "lg:text-body md:text-caption text-body text-[11.027px]"
              }
              indexTextClass={
                "lg:text-secondary md:text-caption text-secondary text-[18.903px] font-normal"
              }
              totalItems={reviews.length}
              onPrev={prevReview}
              onNext={nextReview}
            />
          </div>

          {/* Review Box */}
          <div className="flex flex-col md:p-[24px] p-[16px] gap-[16px] rounded-[12px] border border-primary-start bg-white">
            <div className="flex justify-between items-center w-full">
              <div>
                <h3 className="text-[20px] font-semibold leading-[150%]">
                  {reviews[currentReview].name}
                </h3>
                <p className="text-body text-[14px] font-normal leading-[160%]">
                  {reviews[currentReview].role}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[16px] font-semibold leading-[150%]">
                  {reviews[currentReview].rating}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M4.78332 13.3334C4.87498 12.9251 4.70832 12.3417 4.41665 12.0501L2.39165 10.0251C1.75832 9.39175 1.50832 8.71675 1.69165 8.13341C1.88332 7.55008 2.47498 7.15008 3.35832 7.00008L5.95832 6.56675C6.33332 6.50008 6.79165 6.16675 6.96665 5.82508L8.39998 2.95008C8.81665 2.12508 9.38332 1.66675 9.99998 1.66675C10.6167 1.66675 11.1833 2.12508 11.6 2.95008L13.0333 5.82508C13.1417 6.04175 13.3667 6.25008 13.6083 6.39175L4.63332 15.3667C4.51665 15.4834 4.31665 15.3751 4.34998 15.2084L4.78332 13.3334Z"
                    fill="#FBA017"
                  />
                  <path
                    d="M15.5833 12.0501C15.2833 12.3501 15.1166 12.9251 15.2166 13.3334L15.7916 15.8417C16.0333 16.8834 15.8833 17.6667 15.3666 18.0417C15.1583 18.1917 14.9083 18.2667 14.6166 18.2667C14.1916 18.2667 13.6916 18.1084 13.1416 17.7834L10.7 16.3334C10.3166 16.1084 9.68331 16.1084 9.29998 16.3334L6.85831 17.7834C5.93331 18.3251 5.14165 18.4167 4.63331 18.0417C4.44165 17.9001 4.29998 17.7084 4.20831 17.4584L14.3416 7.32508C14.725 6.94174 15.2666 6.76674 15.7916 6.85841L16.6333 7.00008C17.5166 7.15008 18.1083 7.55008 18.3 8.13341C18.4833 8.71674 18.2333 9.39174 17.6 10.0251L15.5833 12.0501Z"
                    fill="#FBA017"
                  />
                </svg>
              </div>
            </div>

            {/* Review Text */}
            <p className="hidden lg:block text-body text-[16px] font-normal leading-[160%]">
              {reviews[currentReview].comment}
            </p>
            <p className="hidden md:block lg:hidden max-w-[656px] h-[56px] text-body text-[16px] font-normal leading-[160%] line-clamp-2">
              The team consistently delivered outstanding results surpassing our
              expectations in terms of creativity strategy Graphic design is a
              dynamic and creative field that blends artistry with technology to
              visually communicate ideas messages and concepts.
            </p>
            <p className="block md:hidden max-w-[295px] h-[54px] text-body text-[16px] font-normal leading-[160%] line-clamp-2">
              The team at WebWhiz consistently delivered outstanding results
              surpassing our expectations in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReviews;
