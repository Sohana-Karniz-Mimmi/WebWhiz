import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="custom_container pt-[6px]">
      <div className="flex flex-col md:flex-row items-center gap-5 md:gap-[20px]">
        {/* Content */}
        <div className="w-full md:w-1/2">
          <div className="relative mb-4">
            <h1 className="flex flex-col gap-2 text-5xl md:text-[64px] font-bold leading-[120%]">
              Turning{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-[#5F90F0] to-[#185AD9] bg-clip-text text-transparent">
                  Imagination
                </span>
                <Image
                  src="/images/imagination-bg.svg"
                  alt=""
                  width={363}
                  height={20}
                  className="absolute bottom-3 left-1 object-cover z-0"
                  priority
                />
                <span className="pl-3">into</span>
              </span>{" "}
              <span>Innovation</span>
            </h1>
          </div>

          {/* Description with vertical border */}
          <div className="flex gap-3 pb-6">
            <div className="w-3 h-[65px] rounded-lg bg-gradient-to-b from-primary-start to-primary-end mt-[7px]"></div>
            <p className="text-body text-base font-normal leading-[160%]">
              Welcome to my digital playground, where creativity knows no
              bounds. I'm a passionate designer and developer on a mission to
              turn innovative ideas into stunning digital realities.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 ">
            <Link
              href="/hire"
              className="text-white text-sm font-medium leading-[160%] flex w-[160px] py-3 px-6 justify-center items-center gap-2.5 rounded-[80px] bg-gradient-to-r from-primary-start to-primary-end hover:opacity-90 transition-opacity duration-200"
            >
              Hire Me
            </Link>
            <Link
              href="/portfolio"
              className="text-secondary text-sm font-medium leading-[160%] flex py-3 px-6 justify-center items-center gap-2.5 rounded-[80px] border border-primary-start hover:bg-gray-50 transition-colors duration-200"
            >
              View Portfolio
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2">
          <div className="relative aspect-square w-full h-auto">
            <Image
              src="/images/hero.png"
              alt="Hero Image"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
