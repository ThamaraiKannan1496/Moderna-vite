import React from "react";

const PricingService = () => {
  return (
    <>
      <div className="flex w-[90%] flex-col md:flex-row mx-auto my-24 justify-center gap-8 md:gap-0">
        <div className="pricecard-1 p-16 md:w-2/6 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg">
          <div className="font-raleway">
            <h3 className="text-xl pb-4 font-bold">Free Plan</h3>
            <h3 className="text-4xl font-semibold font-raleway">
              <sup className="mr-2">$</sup>0 <sub>/ month</sub>
            </h3>
            <ul className="pt-10 space-y-7 font-roboto">
              <li>
                <span className="text-green-500 mr-2">✔</span>Quam adipiscing
                vitae proin
              </li>
              <li>
                <span className="text-green-500 mr-2">✔</span>Nec feugiat nisl
                pretium
              </li>
              <li>
                <span className="text-green-500 mr-2">✔</span>Nulla at volutpat
                diam uteera
              </li>
              <li className=" text-gray-500">
                <span className="mr-2">X</span>
                <del className="text-gray-500">
                  Pharetra massa massa ultricies
                </del>
              </li>
              <li>
                <span className="text-gray-500 mr-2">X</span>
                <del className="text-gray-500">
                  Massa ultricies mi quis hendrerit
                </del>
              </li>
            </ul>
            <div className="flex justify-center">
              <button className="border-2 border-black py-3 px-8 rounded-md mt-10 hover:bg-black hover:text-white transition ease-out duration-1000 font-semibold tracking-wider">
                Buy now
              </button>
            </div>
          </div>
        </div>
        <div className="pricecard-2 p-16 md:w-2/6 bg-[#68A4C4] transform scale-y-110 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className="font-raleway text-white">
            <h3 className="text-xl pb-4 font-bold">Business Plan</h3>
            <h3 className="text-4xl font-semibold font-raleway">
              <sup className="mr-2">$</sup>29 <sub>/ month</sub>
            </h3>
            <ul className="pt-10 space-y-7 font-roboto">
              <li>
                <span className=" mr-2">✔</span>Quam adipiscing vitae proin
              </li>
              <li>
                <span className=" mr-2">✔</span>Nec feugiat nisl pretium
              </li>
              <li>
                <span className=" mr-2">✔</span>Nulla at volutpat diam uteera
              </li>
              <li>
                <span className=" mr-2">✔</span>
                Pharetra massa massa ultricies
              </li>
              <li>
                <span className=" mr-2">✔</span>
                Massa ultricies mi quis hendrerit
              </li>
            </ul>
            <div className="flex justify-center">
              <button className="border-2 border-white py-3 px-8 rounded-md mt-10 hover:bg-white hover:text-black font-semibold tracking-wider transition ease-out duration-1000">
                Buy now
              </button>
            </div>
          </div>
        </div>
        <div className="pricecard-3 p-16 md:w-2/6 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg">
          <div className="font-raleway text-black">
            <h3 className="text-xl pb-4 font-bold">Developer Plan</h3>
            <h3 className="text-4xl font-semibold font-raleway">
              <sup className="mr-2">$</sup>59 <sub>/ month</sub>
            </h3>
            <ul className="pt-10 space-y-7 font-roboto">
              <li>
                <span className=" mr-2">✔</span>Quam adipiscing vitae proin
              </li>
              <li>
                <span className=" mr-2">✔</span>Nec feugiat nisl pretium
              </li>
              <li>
                <span className=" mr-2">✔</span>Nulla at volutpat diam uteera
              </li>
              <li>
                <span className=" mr-2">✔</span>
                Pharetra massa massa ultricies
              </li>
              <li>
                <span className=" mr-2">✔</span>
                Massa ultricies mi quis hendrerit
              </li>
            </ul>
            <div className="flex justify-center">
              <button className="border-2 border-black py-3 px-8 rounded-md mt-10 hover:bg-black hover:text-white font-semibold tracking-wider transition ease-out duration-1000">
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingService;
