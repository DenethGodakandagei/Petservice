import React from "react";

const PetSetting = () => {
  return (
    <>
      <div className=" p-5   flex flex-col justify-center items-center p-8" id="sitter">
        <div className="container p-5 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/*  content */}
          <div className="flex flex-col justify-center items-start text-left">
            <h1 className="text-5xl font-mono font-bold  text-darkBlue mb-4">
              Vacation Pet Sitting, With Love
            </h1>
            <p className="text-gray-700 mb-6">
              After a lifetime of being loved relentlessly by our dogs, we
              decided it was time to reciprocate this love back to our furry
              friends. The founders of the company have over 30 years of working
              in the pet industry and pet rescues. Our promise to our customers
              is to show the same level of love to our dogs as they show to us.
            </p>
            <ul className="text-lg text-gray-600 mb-6 p-4">
              <li className="flex items-center mb-2">
                <img
                  src="https://img.icons8.com/?size=100&id=sBpJX05vEIHe&format=png&color=000000"
                  width={30}
                  height={30}
                  alt=""
                  className="bg-green-400 rounded"
                />
                Verified reviews by pet parents
              </li>
              <li className="flex items-center mb-2">
                <img
                  src="https://img.icons8.com/?size=100&id=sBpJX05vEIHe&format=png&color=000000"
                  width={30}
                  height={30}
                  alt=""
                  className="bg-red-400 rounded"
                />
                Sitter background or identity checks
              </li>
              <li className="flex items-center">
                <img
                  src="https://img.icons8.com/?size=100&id=sBpJX05vEIHe&format=png&color=000000"
                  width={30}
                  height={30}
                  alt=""
                  className="bg-blue-400 rounded"
                />
                Meet & Greets to find the perfect fit
              </li>
            </ul>
            <a
              href="#"
              className="bg-orange-500 rounded-full p-3 text-white font-semibold text-lg flex items-center "
            >
              Book Now <span className="ml-2"></span>
            </a>
          </div>
          {/* images Section */}
          <div className="flex items-center justify-center h-screen">
            <div className="grid grid-cols-1">
              <div className="flex justify-center"></div>
              <img
                src="https://img.freepik.com/free-photo/portrait-man-caring-his-dog_23-2151029990.jpg?t=st=1732550495~exp=1732554095~hmac=a3534ebd10a1462f00dda81a6efdc3044c99e10f09b21c2f418a88afd2e073bb&w=996"
                alt=""
                width={400}
                height={400}
                className="rounded-lg revealx"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PetSetting;
