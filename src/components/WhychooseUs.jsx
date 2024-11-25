import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="bg-yellow-100 min-h-screen flex flex-col justify-center items-center p-8 ">
      <div className=" container grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* images Section */}
        <div className="grid grid-cols-2 ">
          <div className="col-start-1 revealr">
            <img
              src="https://img.freepik.com/free-photo/young-handsome-man-wearing-security-t-shirt-smiling-friendly-offering-handshake-as-greeting-welcoming-successful-business_839833-12778.jpg?t=st=1732417039~exp=1732420639~hmac=43fb3d2e1f9443ddfdc01fb1cf28a40a97855b2d2892b34542e9720f7165942a&w=1380"
              alt="image"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className=""></div>
          <div className="col-start-2 revealr">
            {" "}
            <img
              src="https://img.freepik.com/free-photo/happy-african-lady-dressed-warm-sweater-pointing-you_171337-13967.jpg?t=st=1732416837~exp=1732420437~hmac=3a1aa43c6f71729d215b0a6379209507aabd7f2d3cd0f5562d2cff59d2d64587&w=1380"
              alt="image"
              width={400}
              height={400}
               className="rounded-lg"
            />
          </div>

          <div className="col-start-1 revealr">
            {" "}
            <img
              src="https://img.freepik.com/free-photo/expressive-young-woman-posing_176474-26850.jpg?t=st=1732416960~exp=1732420560~hmac=0ac0d2d4648f57e7f20598c70edbb1ca3cabe658e2e069c436f03e746f15fd79&w=1380"
              alt="image"
              width={400}
              height={400}
               className="rounded-lg"
            />
          </div>
        </div>

        {/*  content */}
        <div className="flex flex-col justify-center items-start text-left">
          <h2 className="text-5xl font-mono font-bold  text-darkBlue mb-4">
            Why You Should Book <br /> With Pet Walkers
          </h2>
          <p className="text-gray-700 mb-6">
            Experience the easiest, safest, and most reliable schedule of
            one-on-one walks with insured dog walkers.
          </p>
          <a
            href="#"
            className="text-orange-500 font-semibold text-lg flex items-center "
          >
            Book Now <span className="ml-2">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
