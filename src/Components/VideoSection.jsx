import videoImg from "../assets/img/about.jpg";
import { LiaCheckDoubleSolid } from "react-icons/lia";
function VideoSection({ bgColor }) {
  return (
    <>
      <div
        style={{ backgroundColor: bgColor }}
        className="mx-auto flex flex-col justify-center gap-10 py-20 font-roboto font-light tracking-wide md:flex-row lg:px-32"
      >
        <img src={videoImg} className="h-auto object-cover md:w-2/4" />
        <div className="content-side">
          <h2 className="pb-2 !font-poppins text-2xl !font-bold text-[#1E4356]">
            Voluptatem dignissimos provident quasi corporis voluptates sit
            assumenda.
          </h2>
          <p className="pb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className="list-none pb-2">
            <li className="">
              <LiaCheckDoubleSolid className="inline-block pe-2 text-[28px] text-blue-600" />
              Ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </li>
            <li className="mb-2">
              <LiaCheckDoubleSolid className="inline-block pe-2 text-[28px] text-blue-600" />
              Duis aute irure dolor in reprehenderit in voluptate velit.
            </li>
            <li className="mb-3">
              <LiaCheckDoubleSolid className="inline-block pe-2 text-[28px] text-blue-600" />
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate trideta storacalaperda
              mastiro dolore eu fugiat nulla pariatur.
            </li>
            <li>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default VideoSection;
