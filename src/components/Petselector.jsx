import React, { useState } from "react";

const Petselector = () => {
  const [selectedPet, setSelectedPet] = useState("Dog");
  return (
    <>
      <div className="md:absolute bottom-0 left-0 right-0  p-4  justify-between items-center rounded-b-lg">
        <div className="flex ">
          <button
            onClick={() => setSelectedPet("Dog")}
            className={`px-4 py-2 rounded-t-lg ${
              selectedPet === "Dog"
                ? "bg-teal-800 text-white"
                : "bg-white text-gray-800"
            }`}
          >
            Dog
          </button>
          <button
            onClick={() => setSelectedPet("Cat")}
            className={`px-4 py-2 rounded-t-lg ${
              selectedPet === "Cat"
                ? "bg-teal-800 text-white"
                : "bg-white text-gray-800"
            }`}
          >
            Cat
          </button>
        </div>
        <div className="bg-white rounded-b-lg rounded-tr-lg shadow-md p-6 flex flex-wrap items-center gap-4 lg:gap-6">
          <div className="flex flex-col w-[400px] sm:w-auto=">
            <label className="text-gray-600 text-sm font-medium">
              Location
            </label>
            <input
              type="text"
              placeholder="Enter location"
              className="border rounded-lg px-3 py-2 text-gray-800 w-full"
            />
          </div>

          <div className="flex flex-col w-full sm:w-auto">
            <label className="text-gray-600 text-sm font-medium">
              Pet Size
            </label>
            <select className="border rounded-lg px-3 py-2 text-gray-800 w-full">
              <option>Small (0-15 lbs)</option>
              <option>Medium (15-40 lbs)</option>
              <option>Large (40+ lbs)</option>
            </select>
          </div>

          <div className="flex flex-col w-full sm:w-auto">
            <label className="text-gray-600 text-sm font-medium">
              Drop Off
            </label>
            <input
              type="date"
              className="border rounded-lg px-3 py-2 text-gray-800 w-full"
            />
          </div>

          <div className="flex flex-col w-full sm:w-auto">
            <label className="text-gray-600 text-sm font-medium">Pick Up</label>
            <input
              type="date"
              className="border rounded-lg px-3 py-2 text-gray-800 w-full"
            />
          </div>

          <button className="bg-orange-400 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-500 transition w-full sm:w-auto">
            Search Walkers
          </button>
        </div>
      </div>
    </>
  );
};

export default Petselector;
