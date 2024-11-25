import React from "react";

const StatsSection = () => {
  return (
    <>
      <div className="State flex">
        <div className="p-5 grid ">
          <div className="hidden md:block P-5 col-start-1 bg-orange-500 content-center w-[250px] h-[250px]">
            <div className=" p-3 text-[100px] text-white  font-mono ">10+</div>
            <span className="p-3 text-white text-2xl font-mono font-bold">
              Countries
            </span>
          </div>

          <div className=" hidden md:block col-start-3  bg-orange-500 content-center   w-[250px] h-[250px]">
            <div className=" p-3 text-[100px] text-white  font-mono ">2M+</div>
            <span className="p-3 text-white  text-2xl font-mono font-bold">
              Pet parents have booked via FocoPet
            </span>
          </div>

          <div className=" hidden md:block col-start-2  bg-orange-500 content-center   w-[250px] h-[250px]">
            <div className=" p-3 text-[100px] text-white  font-mono ">21K+</div>
            <span className="p-3 text-white  text-2xl font-mono font-bold">
              Neighboroods Around the word
            </span>
          </div>
          <div className="hidden md:block reletive col-start-4  bg-orange-500 content-center   w-[250px] h-[250px]">
            <div className=" p-3 text-[100px] text-white  font-mono ">3M++</div>
            <span className="p-3 text-white  text-2xl font-mono font-bold">
              of 5-star reviews from pet parents
            </span>
          </div>
        </div>
        {/* Mibile view */}
        <div className="p-5 grid gap-4 sm:grid-cols-1  block md:hidden ">
          <div className="flex gap-3">
            <div className="bg-orange-500 flex flex-col items-center justify-center w-full h-[150px] sm:h-[180px] rounded-lg">
              <div className="text-[30px] text-white font-mono font-bold">
                10+
              </div>
              <span className="text-white text-base sm:text-lg font-mono font-bold">
                Countries
              </span>
            </div>

            <div className="bg-orange-500 flex flex-col items-center justify-center w-full h-[150px] sm:h-[180px] rounded-lg">
              <div className="text-[30px] text-white font-mono font-bold">
                2M+
              </div>
              <span className="text-white text-base sm:text-lg font-mono font-bold text-center">
                Pet parents have booked via FocoPet
              </span>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="bg-orange-500 flex flex-col items-center justify-center w-full h-[150px] sm:h-[180px] rounded-lg">
              <div className="text-[30px] text-white font-mono font-bold">
                21K+
              </div>
              <span className="text-white text-base sm:text-lg font-mono font-bold text-center">
                Neighborhoods Around the World
              </span>
            </div>

            <div className="bg-orange-500 flex flex-col items-center justify-center w-full h-[150px] sm:h-[180px] rounded-lg">
              <div className="text-[30px] text-white font-mono font-bold">
                3M++
              </div>
              <span className="text-white text-base sm:text-lg font-mono font-bold text-center">
                5-star reviews from pet parents
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-[30px]"></div>
    </>
  );
};

export default StatsSection;
