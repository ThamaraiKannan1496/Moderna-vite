import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import imageTwo from "../assets/img/building.jpg";
import imageOne from "../assets/img/hero-bg.jpg";
function BannerSlide() {
  return (
    <>
      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
      >
        <SwiperSlide>
          <div className="absolute top-36 m-auto w-2/4 translate-x-2/4 transform text-center text-white">
            <h1 className="pb-2 font-raleway text-4xl font-bold">
              Welcome to Moderna
            </h1>
            <p className="mb-10 hidden pt-5 font-roboto text-lg font-[400] leading-6 md:block">
              At <span className="font-[700]">Moderna</span>, we empower
              businesses with cutting-edge technology solutions that drive
              success. From seamless cloud services to advanced cybersecurity,
              we offer customized IT support designed to meet your unique needs.
              Let us help you innovate, optimize, and thrive in today’s
              fast-evolving digital landscape.
            </p>
            <a
              href="#"
              className="inline-block hidden rounded-3xl border-[2px] border-[#68A4C4] px-5 py-2 text-base font-[500] tracking-wider hover:bg-[#68a4c4] md:inline"
            >
              Read more
            </a>
          </div>
          <img src={imageOne} className="h-[88.3vh] w-full"></img>
        </SwiperSlide>
        <SwiperSlide>
          <div className="absolute top-36 m-auto w-2/4 translate-x-2/4 transform text-center text-white">
            <h1 className="pb-2 font-raleway text-4xl font-bold">
              Pioneer to Technology
            </h1>
            <p className="mb-10 hidden pt-5 font-roboto text-lg font-[400] leading-6 md:block">
              At <span className="font-[700]">Moderna</span>, we empower
              businesses with cutting-edge technology solutions that drive
              success. From seamless cloud services to advanced cybersecurity,
              we offer customized IT support designed to meet your unique needs.
              Let us help you innovate, optimize, and thrive in today’s
              fast-evolving digital landscape.
            </p>
            <a
              href="#"
              className="inline-block hidden rounded-3xl border-[2px] border-[#68A4C4] px-5 py-2 text-base font-[500] tracking-wider hover:bg-[#68a4c4] md:inline"
            >
              Read more
            </a>
          </div>
          <img src={imageTwo} className="h-[88.3vh] w-full"></img>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default BannerSlide;
