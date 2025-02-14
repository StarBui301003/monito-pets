import {
  CUSTOMERP1,
  CUSTOMERP2,
  CUSTOMERP3,
  CUSTOMERP4,
  CUSTOMERP5,
  CUSTOMERP6,
} from "@/assets/img";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";

export const CustomerSwiper = () => {
  const images = [
    CUSTOMERP1,
    CUSTOMERP2,
    CUSTOMERP3,
    CUSTOMERP4,
    CUSTOMERP5,
    CUSTOMERP6,
  ];

  return (
    <div className="relative mb-[59px] pl-4">
      <div className="text-neutral-100 heading-bold-24 mb-3 mt-6">
        Our lovely customer
      </div>
      <div className="h-[399px]">
        <Swiper
          slidesPerView={4.5}
          pagination={{ clickable: true, el: ".swiper-pagination" }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              <div className="w-[248px] h-[340px] rounded-[10px] overflow-hidden">
                <img
                  src={image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination flex justify-center gap-2 w-full absolute bottom-0 h-auto"></div>
      </div>
    </div>
  );
};
