import React from "react";
import { useNavigate } from "react-router-dom";
import HeroImage from "../assets/user_group.png"
import Tools from "./Tools";
import Footer from "./Footer";
const brands = [
  "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/facebook.svg",
  "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/slack.svg",
  "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/framer.svg",
  "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/netflix.svg",
  "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/google.svg",
  "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/linkedin.svg",
  "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/instagram.svg",
  "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/facebook.svg",
  "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/slack.svg",
  "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/framer.svg",
  "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/netflix.svg",
  "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/google.svg",
  "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/linkedin.svg",
  "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/instagram.svg",
  "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/facebook.svg",
  "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/slack.svg",
  "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/framer.svg",
  "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/netflix.svg",
  "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/google.svg",
  "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/linkedin.svg",
  "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/instagram.svg",
];
const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="hero-bg">
    <div className="px-4 sm:px-10 xl:px-16  relative inline-flex flex-col w-full justify-center min-h-screen">
      <div className="text-center mb-6">
        <h1 className="text-white text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2]">
          Redefine Content Creation <br />
          with <span className="text-secondary">Nexora AI</span>
        </h1>
        <p className="text-white/50  max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs">
          Turn ideas into reality with Nexora AI. Write engaging content,
          generate visuals, and accelerate your productivity.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs">
        <button
          onClick={() => navigate("/app")}
          className="flex items-center gap-2 rounded-lg text-sm md:text-base cursor-pointer bg-secondary text-black hover:bg-accent hover:scale-110 px-6 py-2.5 transition-all duration-200"
        >
          Start Creating Now
        </button>
      </div>
      <div className="flex justify-center gap-4 mt-12 mx-auto text-white/50">
        <img src={HeroImage} className="h-8" alt="People"  /> <span className="mt-1">Trusted by 10k+ people</span>
      </div>
      <div className="mt-12">
        <p className="mb-8 text-center text-sm text-white/50">
          Trusted by creators and teams worldwide
        </p>

        <div className="relative overflow-hidden w-[75%] mx-auto">

          <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[hero-bg] to-transparent" />

          <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[hero-bg] to-transparent" />

          <div className="flex animate-scroll gap-16 whitespace-nowrap">

            {[...brands, ...brands].map((brand, index) => (
              <img
                key={index}
                src={brand}
                alt="brand"
                className="h-8 opacity-60  brightness-0 invert transition-all duration-300 hover:invert-0 hover:opacity-100 hover:brightness-100"
              />
            ))}

          </div>
        </div>
      </div>
    </div>
    <Tools/>
    <Footer/>
    </div>
    </>
  );
};

export default Hero;
