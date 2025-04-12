import Image from "next/image";

const HeroImageMobile = () => {
  return (
    <div className="block lg:hidden relative w-[327px] h-[286px] flex-shrink-0 mx-auto mb-[35] mt-[40px]">
      {/* bg shape image */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[295px] h-[334px] flex-shrink-0 -z-10">
        <Image
          src="/images/hero-bg-mobile.png"
          alt="Background decoration"
          fill
          className="object-contain"
        />
      </div>

      {/* top right circle  */}
      <div className="absolute -top-[40px] -right-[22px] w-[50px] h-[50px] flex-shrink-0 -z-50">
        <Image
          src="/images/hero-ellipse1.svg"
          alt="Top right decoration"
          width={50}
          height={50}
        />
      </div>

      {/* bottom left circle */}
      <div className="absolute -bottom-[30px] left-[13px] w-[19px] h-[19px] flex-shrink-0">
        <Image
          src="/images/hero-ellipse2.svg"
          alt="Bottom left decoration"
          width={19}
          height={19}
        />
      </div>

      {/* image for mobile */}
      <div className="relative w-full h-full">
        <Image
          src="/images/hero-mobile.png"
          alt="Hero Image"
          fill
          className="object-cover rounded-[16px]"
          priority
        />

        {/* Project Badge */}
        <div className="absolute -bottom-[35px] -right-[24px] inline-flex p-[16px] justify-center items-center gap-2 rounded-xl bg-white shadow-[10px_10px_80px_0px_rgba(35,10,136,0.08)]">
          <div className="w-[47px] h-[47px] flex-shrink-0 rounded-full bg-[rgba(153,101,207,0.10)] flex items-center justify-center">
            <Image
              src="/icons/king.png"
              alt="Projects icon"
              width={39}
              height={39}
              className="flex-shrink-0"
            />
          </div>
          <div>
            <p className="text-body text-[14px] font-medium leading-[160%] capitalize">
              project done
            </p>
            <p className="text-[14px] font-medium leading-[160%]">4679</p>
          </div>
        </div>

        {/* Visitors Badge */}
        <div className="absolute -left-[24px] -top-[48px] inline-flex p-[16px] items-center gap-2 rounded-xl bg-white shadow-[10px_10px_80px_0px_rgba(35,10,136,0.08)]">
          <div className="flex p-2 justify-center items-center gap-2.5 rounded-full bg-[rgba(24,90,217,0.10)]">
            <Image
              src="/icons/user.svg"
              alt="Visitors icon"
              width={16}
              height={16}
              className="flex justify-center items-center"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[14px] font-semibold leading-[160%]">
              15,235
            </span>
            <span className="text-body text-[12px] font-normal leading-[160%]">
              Visitors
            </span>
          </div>
          <div className="flex items-center gap-1 text-primary">
            <Image
              src="/icons/send.svg"
              alt="Growth indicator"
              width={12}
              height={12}
            />
            <span className="text-[12px] font-medium leading-[160%] text-secondary">
              25%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImageMobile;
