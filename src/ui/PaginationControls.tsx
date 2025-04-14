import React from 'react';
import Image from 'next/image';

interface PaginationControlsProps {
  currentIndex: number;
  totalItems: number;
  onPrev: () => void;
  onNext: () => void;
  prevButtonClass?: string;
  nextButtonClass?: string;
  indexTextClass?: string;
  separatorTextClass?: string;
  prevButtonIcon?: string;
  nextButtonIcon?: string;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentIndex,
  totalItems,
  onPrev,
  onNext,
  prevButtonClass = "flex w-[32px] h-[32px] justify-center items-center rounded-[80px] border border-primary-start",
  nextButtonClass = "flex w-[32px] h-[32px] justify-center items-center rounded-[80px] bg-gradient-to-r from-primary-start to-[#185AD9]",
  indexTextClass = "text-[18.903px] font-normal text-secondary",
  separatorTextClass = "text-[11.027px] text-body",
  prevButtonIcon = "/icons/arrow-left.svg",
  nextButtonIcon = "/icons/arrow-right.svg"
}) => {
  return (
    <div className="flex items-center gap-[16px]">
      <div className="flex gap-[12px]">
        <button
          onClick={onPrev}
          className={prevButtonClass}
          aria-label="Previous item"
        >
          <Image
            src={prevButtonIcon}
            alt="Previous"
            width={16}
            height={16}
          />
        </button>

        <div className="flex items-center">
          <span className={indexTextClass}>
            {String(currentIndex + 1).padStart(2, "0")}
          </span>
          <span className={separatorTextClass}>
            /{String(totalItems).padStart(2, "0")}
          </span>
        </div>

        <button
          onClick={onNext}
          className={nextButtonClass}
          aria-label="Next item"
        >
          <Image
            src={nextButtonIcon}
            alt="Next"
            width={16}
            height={16}
          />
        </button>
      </div>
    </div>
  );
};

export default PaginationControls;