import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
// import { Autoplay } from "swiper";
import client1 from "../assets/img/clients/client-1.png";
import client2 from "../assets/img/clients/client-2.png";
import client3 from "../assets/img/clients/client-3.png";
import client4 from "../assets/img/clients/client-4.png";
import client5 from "../assets/img/clients/client-5.png";
import client6 from "../assets/img/clients/client-6.png";
import client7 from "../assets/img/clients/client-7.png";
import client8 from "../assets/img/clients/client-8.png";
const AboutClientsSlide = () => {
  return (
    <div className="w-[88.5%] mx-auto">
      <Swiper
        modules={[Autoplay]} // Enables autoplay
        autoplay={{
          delay: 0, // Slide change every 2.5 seconds
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        speed={5000}
        spaceBetween={0} // Space between slides
        loop={true} // Loop through slides continuously
        breakpoints={{
          // When window width is >= 1024px (laptop size)
          1024: {
            slidesPerView: 6, // Show 6 slides
          },
          // When window width is >= 768px (tablet size)
          768: {
            slidesPerView: 4, // Show 4 slides
          },
          // When window width is >= 640px (mobile size)
          640: {
            slidesPerView: 2, // Show 2 slides
          },
        }}
      >
        <SwiperSlide>
          <img
            src={client1}
            alt="images"
            className="block bg-cover h-auto p-14 hover:scale-125 hover:duration-75"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={client2}
            alt="images"
            className="block bg-cover h-auto p-14 hover:scale-125 hover:duration-75"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={client3}
            alt="images"
            className="block bg-cover h-auto p-14 hover:scale-125 hover:duration-75"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={client4}
            alt="images"
            className="block bg-cover h-auto p-14 hover:scale-125 hover:duration-75"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={client5}
            alt="images"
            className="block bg-cover h-auto p-14 hover:scale-125 hover:duration-75"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={client6}
            alt="images"
            className="block bg-cover h-auto p-14 hover:scale-125 hover:duration-75"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={client7}
            alt="images"
            className="block bg-cover h-auto p-14 hover:scale-125 hover:duration-75"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={client8}
            alt="images"
            className="block bg-cover h-auto p-14 hover:scale-125 hover:duration-75"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AboutClientsSlide;
