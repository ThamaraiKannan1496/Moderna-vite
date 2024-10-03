import featureone from "../assets/img/features-1.svg";
import featuretwo from "../assets/img/features-2.svg";
import featurethree from "../assets/img/features-3.svg";
import featurefour from "../assets/img/features-4.svg";
import { BsCheckLg } from "react-icons/bs";
function FeaturesOne() {
  return (
    <>
      <div className="mx-auto flex w-[88.5%] flex-col py-20 md:flex-row">
        <img
          data-aos="fade-up"
          src={featureone}
          className="mx-auto block w-3/4 object-cover md:w-2/6"
        />
        <div className="content-side px-8">
          <h2 className="pb-2 !font-raleway text-2xl !font-bold text-[#1E4356]">
            Voluptatem dignissimos provident quasi corporis voluptates sit
            assumenda.
          </h2>
          <p className="pb-4 font-roboto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className="list-none pb-2 font-roboto">
            <li className="">
              <BsCheckLg className="inline-block pe-2 text-[28px] text-blue-600" />
              Ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </li>
            <li className="mb-2">
              <BsCheckLg className="inline-block pe-2 text-[28px] text-blue-600" />
              Duis aute irure dolor in reprehenderit in voluptate velit.
            </li>
            <li className="mb-3">
              <BsCheckLg className="inline-block pe-2 text-[28px] text-blue-600" />
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate trideta storacalaperda
              mastiro dolore eu fugiat nulla pariatur.
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto flex w-[88.5%] flex-col py-20 md:flex-row">
        <div className="content-side px-8 pt-5">
          <h2 className="pb-8 !font-raleway text-2xl !font-bold text-[#1E4356]">
            Corporis temporibus maiores provident
          </h2>
          <p className="pb-4 font-roboto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br />
            <br />
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum
          </p>
        </div>
        <img
          data-aos="fade-up"
          src={featuretwo}
          className="mx-auto block w-3/4 object-cover md:w-2/6"
        />
      </div>
      <div className="mx-auto flex w-[88.5%] flex-col py-20 md:flex-row">
        <img
          data-aos="fade-up"
          src={featurethree}
          className="mx-auto block w-3/4 object-cover md:w-2/6"
        />
        <div className="content-side px-8">
          <h2 className="pb-2 !font-raleway text-2xl !font-bold text-[#1E4356]">
            Voluptatem dignissimos provident quasi corporis voluptates sit
            assumenda.
          </h2>
          <p className="pb-4 font-roboto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className="list-none pb-2 font-roboto">
            <li className="">
              <BsCheckLg className="inline-block pe-2 text-[28px] text-blue-600" />
              Ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </li>
            <li className="mb-2">
              <BsCheckLg className="inline-block pe-2 text-[28px] text-blue-600" />
              Duis aute irure dolor in reprehenderit in voluptate velit.
            </li>
            <li className="mb-3">
              <BsCheckLg className="inline-block pe-2 text-[28px] text-blue-600" />
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate trideta storacalaperda
              mastiro dolore eu fugiat nulla pariatur.
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto flex w-[88.5%] flex-col py-20 md:flex-row">
        <div className="content-side px-8">
          <h2 className="pb-2 !font-raleway text-2xl !font-bold text-[#1E4356]">
            Voluptatem dignissimos provident quasi corporis voluptates sit
            assumenda.
          </h2>
          <p className="pb-4 font-roboto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className="list-none pb-2 font-roboto">
            <li className="">
              <BsCheckLg className="inline-block pe-2 text-[28px] text-blue-600" />
              Ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </li>
            <li className="mb-2">
              <BsCheckLg className="inline-block pe-2 text-[28px] text-blue-600" />
              Duis aute irure dolor in reprehenderit in voluptate velit.
            </li>
            <li className="mb-3">
              <BsCheckLg className="inline-block pe-2 text-[28px] text-blue-600" />
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate trideta storacalaperda
              mastiro dolore eu fugiat nulla pariatur.
            </li>
          </ul>
        </div>
        <img
          data-aos="fade-up"
          src={featurefour}
          className="mx-auto block w-3/4 object-cover md:w-2/6"
        />
      </div>
    </>
  );
}

export default FeaturesOne;
