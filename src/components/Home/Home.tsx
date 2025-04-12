import Image from "next/image";
import Link from "next/link";
import HeroImage from "./HeroImage";
import Button from "@/ui/Button";
import Text from "@/ui/Text";
import VerticalDivider from "@/ui/VerticalDivider";

const HeroSection = () => {
  return (
    <section className="custom_container lg:pt-[53px] md:pt-[53px] pt-[27px] lg:pb-[76px] md:pb-[42px] pb-[78px]">
      <div className="flex flex-col md:flex-row lg:items-center gap-[50px] lg:gap-[20] md:gap-[19px]">
        {/* Content */}
        <div className="w-full mx-auto lg:w-[570px] md:w-[340px] lg:my-[48px]">
          <div className="relative mb-[16px] max-w-[306px] sm:max-w-[340px] lg:max-w-[509px] md:ml-0 md:mr-auto mx-auto">
            <h1 className="flex md:items-start items-center flex-col gap-2 text-[32px] md:text-[40px] xl:text-[64px] font-bold lg:leading-[120%] leading-[140%]">
              Turning{" "}
              <div className="relative z-10 bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
                Imagination
                <div className="xl:w-[363px] md:w-[230px] md:h-[20px] h-[10px] w-[182px] absolute xl:bottom-3 md:bottom-1 bottom-2 left-1 z-0">
                  <Image
                    src="/images/imagination-bg.svg"
                    alt=""
                    width={363}
                    height={20}
                    className="object-cover"
                  />
                </div>
                <span className="pl-3 text-primary">into</span>
              </div>
              <span>Innovation</span>
            </h1>
          </div>

          {/* Description for desktop */}
          <div className="hidden lg:flex xl:justify-between xl:gap-0 gap-[12px] pb-[24px]">
            <VerticalDivider className="w-[4px]" />
            <Text className="max-w-[554px] w-full">
              Welcome to my digital playground, where creativity knows no
              bounds. I'm a passionate designer and developer on a mission to
              turn innovative ideas into stunning digital realities.
            </Text>
          </div>
          {/* Tablet Description */}
          <div className="hidden md:flex lg:hidden gap-[12px] pb-[24px]">
            <VerticalDivider className="!mt-0 w-[4px] h-[53px]" />
            <Text className="h-[53px] w-[323px] max-w-full line-clamp-2">
              Welcome to my digital playground, where creativity knows no bounds
              passionate designer and developer on a mission to turn innovative
              ideas into stunning digital realities.
            </Text>
          </div>
          {/* Mobile Description */}
          <div className="flex md:hidden pb-[26]">
            <Text className="h-[78px] w-[327px] mx-auto text-center">
              Welcome to my digital playground, where creativity knows no
              bounds. I'm a passionate designer and developer
            </Text>
          </div>

          {/* Buttons */}
          <div className="flex md:justify-start justify-center gap-[12px] ">
            <Link href="/hire">
              <Button className="w-[160px]" variant="primary">
                Hire Me
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="secondary">View Portfolio</Button>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-[543.5px] md:w-[340px]">
          <HeroImage />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
