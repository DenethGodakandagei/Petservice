import React from "react";
import Petselector from "./Petselector";

const Header = () => {
  return (
    <>
      <div className="parallax-1" id="home">
        <div className="caption flex justify-center ">
          <h1 className="text-[85px] md:text-[150px] lg:text-[150px] font-mono font-bold italic text-center text-red-100 ">
            Pet Walkers
          </h1>
        </div>
      </div>

      <Petselector />
    </>
  );
};

export default Header;
