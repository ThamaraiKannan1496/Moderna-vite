import { IoStar } from "react-icons/io5";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Img1 from "../assets/img/testimonials/testimonials-1.jpg";
import Img2 from "../assets/img/testimonials/testimonials-2.jpg";
import Img3 from "../assets/img/testimonials/testimonials-3.jpg";
import Img4 from "../assets/img/testimonials/testimonials-4.jpg";
import Img5 from "../assets/img/testimonials/testimonials-5.jpg";

export const AboutTestimonials = () => {
  return (
    <div className="pb-10">
      <Swiper
        slidesPerView={1}
        effect={"fade"}
        pagination={
          (true,
          {
            clickable: true,
          })
        }
        modules={[EffectFade, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center h-full pt-24 pb-14">
            <img
              src={Img1}
              alt="image"
              className="block bg-cover h-auto w-28 rounded-full"
            />
            <h1 className="text-lg font-medium mt-4 font-raleway">
              Saul Goodman
            </h1>
            <p className="text-sm text-gray-500 p-1 font-roboto">CEO</p>
            <div className="flex justify-center text-yellow-500 p-5">
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
            </div>
            <p className="  text-md text-gray-600 p-1 font-roboto text-center md:w-2/4 mx-auto">
              Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos
              export minim fugiat minim velit minim dolor enim duis veniam ipsum
              anim magna sunt elit fore quem dolore labore illum veniam.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center h-full pt-24 pb-14">
            <img
              src={Img2}
              alt="image"
              className="block bg-cover h-auto w-28 rounded-full"
            />
            <h1 className="text-lg font-medium mt-4 font-raleway">
              Saul Goodman
            </h1>
            <p className="text-sm text-gray-500 p-1 font-roboto">CEO</p>
            <div className="flex justify-center text-yellow-500 p-5">
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
            </div>
            <p className="  text-md text-gray-600 p-1 font-roboto text-center md:w-2/4 mx-auto">
              Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos
              export minim fugiat minim velit minim dolor enim duis veniam ipsum
              anim magna sunt elit fore quem dolore labore illum veniam.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center h-full pt-24 pb-14">
            <img
              src={Img3}
              alt="image"
              className="block bg-cover h-auto w-28 rounded-full"
            />
            <h1 className="text-lg font-medium mt-4 font-raleway">
              Saul Goodman
            </h1>
            <p className="text-sm text-gray-500 p-1 font-roboto">CEO</p>
            <div className="flex justify-center text-yellow-500 p-5">
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
            </div>
            <p className="  text-md text-gray-600 p-1 font-roboto text-center md:w-2/4 mx-auto">
              Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos
              export minim fugiat minim velit minim dolor enim duis veniam ipsum
              anim magna sunt elit fore quem dolore labore illum veniam.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center h-full pt-24 pb-14">
            <img
              src={Img4}
              alt="image"
              className="block bg-cover h-auto w-28 rounded-full"
            />
            <h1 className="text-lg font-medium mt-4 font-raleway">
              Saul Goodman
            </h1>
            <p className="text-sm text-gray-500 p-1 font-roboto">CEO</p>
            <div className="flex justify-center text-yellow-500 p-5">
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
            </div>
            <p className="  text-md text-gray-600 p-1 font-roboto text-center md:w-2/4 mx-auto">
              Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos
              export minim fugiat minim velit minim dolor enim duis veniam ipsum
              anim magna sunt elit fore quem dolore labore illum veniam.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center h-full pt-24 pb-14">
            <img
              src={Img5}
              alt="image"
              className="block bg-cover h-auto w-28 rounded-full"
            />
            <h1 className="text-lg font-medium mt-4 font-raleway">
              Saul Goodman
            </h1>
            <p className="text-sm text-gray-500 p-1 font-roboto">CEO</p>
            <div className="flex justify-center text-yellow-500 p-5">
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
            </div>
            <p className="  text-md text-gray-600 p-1 font-roboto text-center md:w-2/4 mx-auto">
              Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos
              export minim fugiat minim velit minim dolor enim duis veniam ipsum
              anim magna sunt elit fore quem dolore labore illum veniam.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
