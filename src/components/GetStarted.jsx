import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const GetStarted = () => {
  return (
    <div className="p-6 m-5 min-h-screen">
      <div className=" p-6 flex justify-center">
        <h1 className="p-6 text-3xl md:text-4xl lg:text-5xl font-mono font-bold italic text-center text-orange-900">
          Earn cash by Walking pets
        </h1>
      </div>
      
      <div className="flex justify-center">
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/*card one */}
          <div className="flex flex-col items-center text-center reveal">
            <img
              src="https://cdn-icons-png.flaticon.com/512/9984/9984522.png"
              className="w-32 md:w-36 lg:w-40 mb-4"
              alt="Create your profile"
            />
            <div className="text-green-500 text-xl md:text-2xl font-mono font-bold mb-2">
              Create your profile
            </div>
            <p className="text-sm md:text-base max-w-xs">
              We help to create a profile with the information pet owners want.
              Specify the types of pets you'd like to care for and your
              available dates.
            </p>
           <div className="pt-6">
           <span className="text-orange-600 font-medium hover:underline cursor-pointer">
              Learn more{" "}
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </span>
           </div>
          </div>
           {/*card two*/}
          <div className="flex flex-col items-center text-center reveal">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5261/5261257.png"
              className="w-32 md:w-36 lg:w-40 mb-4"
              alt="Accept requests"
            />
            <div className="text-red-500 text-xl md:text-2xl font-mono font-bold mb-2">
              Accept requests
            </div>
            <p className="text-sm md:text-base max-w-xs">
              Tell us the pets you'd like to care for and your available dates.
              You set your schedule, giving you the flexibility to work when it
              suits you best.
            </p>
            <div className="pt-6">
           <span className="text-orange-600 font-medium hover:underline cursor-pointer">
              Learn more{" "}
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </span>
           </div>
          </div>
            {/*card three */}
          <div className="flex flex-col items-center text-center reveal">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4271/4271076.png"
              className="w-32 md:w-36 lg:w-40 mb-4"
              alt="Get Paid"
            />
            <div className="text-blue-500 text-xl md:text-2xl font-mono font-bold mb-2">
              Get Paid
            </div>
            <p className="text-sm md:text-base max-w-xs">
              Payments become available for withdrawal two days after
              completing a service, allowing time for processing and ensuring a
              smooth transaction.
            </p>
            <div className="pt-6">
           <span className="text-orange-600 font-medium hover:underline cursor-pointer">
              Learn more{" "}
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </span>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;