import Image from "next/image";
import Link from "next/link";
import HeroImage from "./HeroImage";
import Button from "@/ui/Button";
import Text from "@/ui/Text";
import VerticalDivider from "@/ui/VerticalDivider";

const HeroSection = () => {
  return (
    <section className="custom_container pt-[68px]">
      <div className="flex flex-col md:flex-row items-center gap-5 md:gap-[30px]">
        {/* Content */}
        <div className="w-full md:w-[568px]">
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
            <VerticalDivider />
            <Text>
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
