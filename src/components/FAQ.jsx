import React from "react";

const FAQ = () => {
  return (
    <>
      <div className="p-[60px]"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-8 md:px-16 lg:px-32">
        {/* Left Section */}
        <div className="flex justify-center items-center py-16 lg:py-32">
          <div className="text-center">
            <h1 className="text-gray-800 text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-4">
              General FAQ's
            </h1>
            <p className="text-gray-700 text-sm sm:text-base mb-6">
              Get answers to common questions about our services, from booking
              and pricing to pet care.
            </p>
            <img
              src="https://img.freepik.com/free-vector/faq-concept_23-2148162265.jpg?t=st=1732471176~exp=1732474776~hmac=a628cf00b2baa29fa76bc62afdae5ef5f6194630f8b1cbe91f598fad4e44504b&w=740"
              alt="faq"
              className="mx-auto w-full max-w-md"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center">
          <div className="text-gray-800 py-16 lg:py-32 w-full">
            <div className="flex flex-col mx-auto w-full">
              <div className="flex flex-col divide-y divide-gray-300 sm:px-4 lg:px-8">
                <details>
                  <summary className="pt-4 pb-4 outline-none cursor-pointer text-lg sm:text-xl lg:text-2xl font-mono font-bold">
                    What Can The Walker Do Besides Walk With My Dog?
                  </summary>
                  <div className="px-4 pb-4 font-mono">
                    <p>
                      The walker can perform other activities like feeding,
                      playing, or cleaning up after your dog during the
                      scheduled time.
                    </p>
                  </div>
                </details>
                <details>
                  <summary className="pt-4 pb-4 outline-none cursor-pointer text-lg sm:text-xl lg:text-2xl font-mono font-bold">
                    Can The Walker Feed My Dog?
                  </summary>
                  <div className="px-4 pb-4 font-mono">
                    <p>Yes, the walker can feed your dog if instructed.</p>
                  </div>
                </details>
                <details>
                  <summary className="pt-4 pb-4 outline-none cursor-pointer text-lg sm:text-xl lg:text-2xl font-mono font-bold">
                    Does Spot Supply The Walking Supplies?
                  </summary>
                  <div className="px-4 pb-4 font-mono">
                    <p>
                      Yes, Spot provides basic walking supplies like leashes and
                      poop bags, or you can provide your own.
                    </p>
                  </div>
                </details>
                <details>
                  <summary className="pt-4 pb-4 outline-none cursor-pointer text-lg sm:text-xl lg:text-2xl font-mono font-bold">
                    What If My Walker Arrives Late?
                  </summary>
                  <div className="px-4 pb-4 font-mono">
                    <p>
                      If your walker arrives late, the walking time will be
                      adjusted to ensure your dog still gets enough attention.
                    </p>
                  </div>
                </details>
                <details>
                  <summary className="pt-4 pb-4 outline-none cursor-pointer text-lg sm:text-xl lg:text-2xl font-mono font-bold">
                    What If My Walker Doesn’t Show Up?
                  </summary>
                  <div className="px-4 pb-4 font-mono">
                    <p>
                      If your walker doesn’t show up, Spot will notify you and
                      arrange for a replacement as soon as possible.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
