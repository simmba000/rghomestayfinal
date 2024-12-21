import React from "react";
import GlobalSearchBox from "../../ux/global-search-box/GlobalSearchbox";

const HeroCover = () => {
  return (
    <header className="relative h-screen text-white flex flex-col justify-center items-center bg-no-repeat">
      <div className="absolute inset-0 bg-brand bg-opacity-0"></div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Discover your perfect stay at the historic Sivasagar
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Enter your dates to see the latest prices and begin your journey of
          relaxation and adventure today.
        </p>
        <GlobalSearchBox/>
      </div>
    </header>
  );
};

export default HeroCover;