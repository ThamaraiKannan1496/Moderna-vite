import img1 from "../../assets/img/services-1.jpg";
import img2 from "../../assets/img/services-2.jpg";
import img3 from "../../assets/img/services-3.jpg";
import img4 from "../../assets/img/services-4.jpg";

export const PortfolioCards = () => {
  return (
    <div className="w-[90%] mx-auto my-16">
      <div className="flex gap-10 flex-col flex-wrap md:flex-row  ">
        <div className="relative overflow-hidden w-full  md:w-6/12">
          <img
            src={img1}
            alt="images"
            className="rounded-xl block w-full bg-cover  h-[450px] transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 flex items-center justify-between p-10">
            <div className="text-center text-[#68A4C4] bg-white bg-opacity-85 rounded-lg  p-8 font-roboto hover:bg-opacity-100 transition duration-150 ease-in">
              <a
                className="list-none inline-block cursor-pointer text-2xl font-semibold"
                href="#"
              >
                Eosle Commodi
              </a>
              <p className="mt-2 text-gray-600">
                Ut autem aut autem non a. Sint sint sit facilis nam iusto sint.
                Libero corrupti neque eum hic non ut nesciunt dolorem.
              </p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden w-full   md:w-6/12">
          <img
            src={img2}
            alt="images"
            className="rounded-xl block w-full bg-cover  h-[450px] transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 flex items-center justify-between p-10">
            <div className="text-center text-[#68A4C4] bg-white bg-opacity-85 rounded-lg  p-8 font-roboto hover:bg-opacity-100 transition duration-150 ease-in">
              <a
                className="list-none inline-block cursor-pointer text-2xl font-semibold"
                href="#"
              >
                Eosle Commodi
              </a>
              <p className="mt-2 text-gray-600">
                Ut autem aut autem non a. Sint sint sit facilis nam iusto sint.
                Libero corrupti neque eum hic non ut nesciunt dolorem.
              </p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden w-full md:w-6/12">
          <img
            src={img3}
            alt="images"
            className="rounded-xl block w-full bg-cover  h-[450px] transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 flex items-center justify-between p-10">
            <div className="text-center text-[#68A4C4] bg-white bg-opacity-85 rounded-lg  p-8 font-roboto hover:bg-opacity-100 transition duration-150 ease-in">
              <a
                className="list-none inline-block cursor-pointer text-2xl font-semibold"
                href="#"
              >
                Eosle Commodi
              </a>
              <p className="mt-2 text-gray-600">
                Ut autem aut autem non a. Sint sint sit facilis nam iusto sint.
                Libero corrupti neque eum hic non ut nesciunt dolorem.
              </p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden w-full md:w-6/12">
          <img
            src={img4}
            alt="images"
            className="rounded-xl block w-full bg-cover  h-[450px] transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 flex items-center justify-between p-10">
            <div className="text-center text-[#68A4C4] bg-white bg-opacity-85 rounded-lg  p-8 font-roboto hover:bg-opacity-100 transition duration-150 ease-in">
              <a
                className="list-none inline-block cursor-pointer text-2xl font-semibold"
                href="#"
              >
                Eosle Commodi
              </a>
              <p className="mt-2 text-gray-600">
                Ut autem aut autem non a. Sint sint sit facilis nam iusto sint.
                Libero corrupti neque eum hic non ut nesciunt dolorem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
