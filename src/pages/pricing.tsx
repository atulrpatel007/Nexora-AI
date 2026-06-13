import React from "react";
import Navbar from "../components/Navbar";
import { PricingTable } from "@clerk/react";
import { dark } from "@clerk/themes";
import Footer from "../components/Footer";

const pricing = () => {
  return (
    <>
      <Navbar />
      <div className="hero-bg">
        <div className="px-4 sm:px-10 xl:px-16 pt-36 relative flex-col w-full justify-center min-h-screen mx-auto">
          <div className="text-center">
            <h2 className="text-white text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2]">
              Choose Your Plan
            </h2>
            <p className="text-white/50  max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs">
              Start for free and scale up as you grow. Find the perfect plan for
              your content creation needs.
            </p>
          </div>
          <div className="max-w-2xl mx-auto mt-14">
            <PricingTable
              appearance={{
                theme: dark,
              }}
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default pricing;
