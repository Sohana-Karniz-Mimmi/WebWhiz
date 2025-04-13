"use client";

import React, { useState } from "react";
import Image from "next/image"; // Reuse the pagination component we created earlier
import PaginationControls from "@/ui/PaginationControls";
import Text from "@/ui/Text";
import VerticalDivider from "@/ui/VerticalDivider";

const ClientReviews: React.FC = () => {
  const [currentReview, setCurrentReview] = useState<number>(0);

  const reviews = [
    {
      id: 1,
      name: "Maria Sarapavoo",
      role: "Whistleblower and privacy advocate",
      rating: 4.5,
      comment:
        "The team at WebWhiz consistently delivered outstanding results surpassing our expectations in",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Marketing Director",
      rating: 4.5,
      comment:
        "The team at WebWhiz consistently delivered outstanding results surpassing our expectations in",
    },
    {
      id: 3,
      name: "Robert Johnson",
      role: "Product Manager",
      rating: 4.5,
      comment:
        "The team at WebWhiz consistently delivered outstanding results surpassing our expectations in",
    },
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="max-w-[1290px] py-[76px] flex items-end gap-[32px]">
        {/* Left Side - Content and Images */}
        <div className="flex-1 relative">
          <div className="max-w-[360px] absolute left-[150px]">
            <Text variant="title">Client Reviews</Text>
            {/* description */}
            <div className="flex gap-[12px] mt-[16px]">
              <VerticalDivider className="w-[4px] h-[52px]" />
              <Text className="md:max-w-[314px] w-full xl:pl-[2px]s">
                The team at consistently delivered outstanding surpassing
                expectations
              </Text>
            </div>
          </div>

          <div className="flex gap-[32px] items-end">
            {/* First Image */}
            <div className="w-[216px] h-[212px] rounded-l-none rounded-r-[16px] overflow-hidden">
              <Image
                src="/images/review1.png"
                alt="Client Review 1"
                width={216}
                height={212}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Second Image */}
            <div className="w-[216px] h-[212px] rounded-[16px] overflow-hidden">
              <Image
                src="/images/review2.png"
                alt="Client Review 2"
                width={216}
                height={212}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Third Image */}
            <div className="w-[306px] h-[401px] rounded-[16px] overflow-hidden">
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

        {/* Right Side - Reviews and Rating */}
        <div className="flex-1 flex flex-col">
          {/* Pagination at the top */}
          <div className="mb-[16px] flex justify-end">
            <PaginationControls
              currentIndex={currentReview}
              totalItems={reviews.length}
              onPrev={prevReview}
              onNext={nextReview}
            />
          </div>

          {/* Review Box */}
          <div className="flex flex-col p-6 gap-4 rounded-xl border border-[#5F90F0] bg-white">
            {/* Name, Role and Rating */}
            <div className="flex justify-between items-center w-full">
              <div>
                <h3 className="text-[20px] font-semibold leading-[150%]">
                  {reviews[currentReview].name}
                </h3>
                <p className="text-[#64656D] text-[14px] font-normal leading-[160%]">
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
            <p className=" text-body text-[16px] font-normal leading-[160%]">
              {reviews[currentReview].comment}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReviews;
