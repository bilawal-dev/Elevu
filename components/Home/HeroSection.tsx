import Image from "next/image";
import BlurArrow from "@/public/assets/blue-button.svg";
import Gradient from "@/public/assets/Gradient.svg";
import HeroImage from "@/public/assets/Image.svg";
import { Mail, Users } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="pt-32">
      {/* Text Content */}
      <div className="sm:px-[20px] sm:max-w-5xl mx-auto">
        <h1 className="text-center text-[35px] leading-[43px] sm:text-[50px] sm:leading-[58px] lg:text-[64px] lg:leading-[72px] font-medium text-[#172026]">
          Empower your team with smarter 360° review cycles
        </h1>
        <p className="text-center pt-6 text-[#36485C] lg:text-[18px] lg:leading-7">
          PeerPulse automates end-to-end 360° reviews—from peer selection and feedback to compiled insights—so HR teams focus on growth, not daily paperwork.
        </p>

        <div className="flex w-full py-8 justify-center gap-x-6">
          <Link
            href={"/login"}
            className="bg-[#0c0c0f] w-fit py-3 px-8 text-white whitespace-nowrap rounded-[4px]"
          >
            Get Started Now
          </Link>
          <Link
            href={"/pricing"}
            className="group w-fit text-blue-600 whitespace-nowrap flex items-center justify-center gap-x-2"
          >
            View Pricing Model
            <span>
              <Image
                src={BlurArrow}
                alt="Learn more"
                className="group-hover:-rotate-[30deg] duration-200"
              />
            </span>
          </Link>
        </div>
      </div>

      {/* Hero Visual Content */}
      <div className="relative mt-10 w-full overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={Gradient}
            alt="Gradient"
            className="w-full h-full  object-cover"
          />
        </div>

        {/* Main Image + Partner Logos */}
        <div className="flex flex-col items-center lg:px-4">
          <Image
            src={HeroImage}
            alt="hero image"
            className="w-full max-w-6xl lg:w-[70%]"
          />

          <div className="mb-2 flex flex-col items-center lg:flex-row lg:justify-between lg:gap-x-10 lg:px-20 w-full max-w-6xl">
            <p className="text-[#FFFFFF] md:whitespace-nowrap text-center text-base lg:text-[18px]">
              Automated email workflows for invitations, reminders, and reports
            </p>
            <div className="flex gap-5 lg:gap-10 justify-center items-center">
              <Mail className="w-8 h-8 text-white" />
              <Users className="w-8 h-8 mb-1 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
