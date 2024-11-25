import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <div className="p-5 m-5 flex justify-center" id="about">
        <div className="m-5 w-[600px]">
          <h1 className="text-4xl md:text-5xl font-mono font-bold italic text-center text-gray-900">
            Loving Pet Care in Your Neighborhood
          </h1>
          <p className="mt-4 text-gray-700">
            We empower our community of trusted pet walkers to run their own pet
            care businesses on Rover with the tools and security of a global
            company to back them.
          </p>
          <div className="mt-5 flex justify-end">
            <span className="text-orange-600 font-medium hover:underline cursor-pointer">
              Learn more{" "}
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </span>
          </div>
        </div>
        <div></div>
      </div>
      <div className="flex justify-center ">
        <div className="grid grid-rows-3 grid-flow-col gap-4">
          <div className="row-start-2 row-span-2 pr-4">
            <div className="reveal">
              <img
                src="https://img.freepik.com/free-photo/selective-focus-shot-adorable-kooikerhondje-dog-field_181624-29383.jpg?t=st=1732414591~exp=1732418191~hmac=99dd27cf0d0a42e84a58519ed89649dd12e37d78969d4cbd524eb69b213be19a&w=996"
                width={300}
                height={400}
                alt="image"
              />
            </div>
          </div>
          <div className="row-end-3 row-span-2 reveal">
            <img
              src="https://img.freepik.com/free-photo/adorable-little-dog-outdoors_23-2148740420.jpg?t=st=1732414718~exp=1732418318~hmac=84e793856f470c7813945f71e62e7189a60bb5215c881cc81c047429d9ff3786&w=996"
              width={600}
              height={600}
              alt="image"
            />
          </div>
          <div className="row-start-1 row-end-4 pl-4 reveal">
            <img
              src="https://img.freepik.com/free-photo/adorable-british-shorthair-kitty-with-monochrome-wall-her_23-2148955093.jpg?t=st=1732414408~exp=1732418008~hmac=7b9ae0225b7057f14af34e0881892faf9531af4259866dc80c02a0c058381478&w=996"
              width={300}
              height={400}
              alt="image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
