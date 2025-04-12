import Image from "next/image";
import Link from "next/link";
import HeroImage from "./HeroImage";
import Button from "@/ui/Button";
import Text from "@/ui/Text";
import VerticalDivider from "@/ui/VerticalDivider";

const HeroSection = () => {
  return (
    <section className="custom_container lg:pt-[68px] md:pt-10 mt-8">
      <div className="flex flex-col md:flex-row lg:items-center gap-12 lg:gap-[30] md:gap-[19px]">
        {/* Content */}
        <div className="w-full md:w-[570px]">
          <div className="relative mb-4 max-w-[509px]">
            <h1 className="flex flex-col gap-2 text-[32px] md:text-[40px] xl:text-[64px] font-bold leading-[120%]">
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

          {/* Description with border */}
          <div className="flex justify-between pb-6">
            <VerticalDivider width="w-[4px]" />
            <Text className="max-w-[554px] w-full">
              Welcome to my digital playground, where creativity knows no
              bounds. I'm a passionate designer and developer on a mission to
              turn innovative ideas into stunning digital realities.
            </Text>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 ">
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
        <div className="w-full md:w-[543.5px]">
          <HeroImage />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
