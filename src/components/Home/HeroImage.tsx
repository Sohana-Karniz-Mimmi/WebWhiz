import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="relative w-[358px] h-[433px] flex-shrink-0 mx-auto">
      {/* bg shape image */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[308px] h-[481px] flex-shrink-0 -z-10">
        <Image
          src="/images/hero-bg.png"
          alt="Background decoration"
          fill
          className="object-contain"
        />
      </div>

      {/* top right circle  */}
      <div className="absolute -top-12 -right-4 w-[64px] h-[64px] flex-shrink-0">
        <Image
          src="/images/hero-ellipse1.svg"
          alt="Top right decoration"
          width={64}
          height={64}
        />
      </div>

      {/* bottom left circle */}
      <div className="absolute -bottom-8 left-5 w-[25px] h-[25px] flex-shrink-0">
        <Image
          src="/images/hero-ellipse2.svg"
          alt="Bottom left decoration"
          width={25}
          height={25}
        />
      </div>

      {/* Main Image */}
      <div className="relative w-full h-full">
        <Image
          src="/images/hero.png"
          alt="Hero Image"
          fill
          className="object-contain"
          priority
        />

        {/* Project Done Badge */}
        <div className="absolute -bottom-12 -right-[72px] inline-flex p-4 justify-center items-center gap-2 rounded-xl bg-white shadow-[10px_10px_80px_0px_rgba(35,10,136,0.08)]">
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
            <p className="text-body text-sm font-medium leading-[160%] capitalize">
              project done
            </p>
            <p className="text-base font-medium leading-[150%]">4679</p>
          </div>
        </div>

        {/* Visitors Badge */}
        <div className="absolute -right-23 top-37 inline-flex p-4 items-center gap-2 rounded-xl bg-white shadow-[10px_10px_80px_0px_rgba(35,10,136,0.08)]">
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
            <span className="text-base font-semibold leading-[150%]">
              15,235
            </span>
            <span className="text-body text-xs font-normal leading-[160%]">
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
            <span className="text-xs font-medium leading-[160%] text-secondary">
              25%
            </span>
          </div>
        </div>

        {/* Product Badge  */}
        <div className="absolute -left-24 top-8 inline-flex p-4 items-center gap-2 rounded-xl bg-white shadow-[10px_10px_80px_0px_rgba(35,10,136,0.08)]">
          <Image
            src="/icons/manager.png"
            alt="Manager icon"
            width={47}
            height={47}
            className="flex-shrink-0"
          />
          <div className="flex flex-col">
            <span className="text-base font-bold leading-[150%]">
              Albert Flores
            </span>
            <span className="text-body text-sm font-medium leading-[160%]">
              Product Manager
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
