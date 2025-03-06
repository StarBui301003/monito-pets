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
import { cn } from "@/lib/utils";

interface IProps {
  className?: string;
}

export const CustomerSwiper = ({ className }: IProps) => {
  const images = [
    CUSTOMERP1,
    CUSTOMERP2,
    CUSTOMERP3,
    CUSTOMERP4,
    CUSTOMERP5,
    CUSTOMERP6,
  ];

  return (
    <div className={cn("relative sm:mb-[59px] mb-10 pl-4", className)}>
      <div className="text-neutral-100 heading-bold-24 mb-3 mt-6">
        Our lovely customer
      </div>
      <div className="h-[385px] desktop-swiper">
        <Swiper
          key={"desktop-swiper"}
          id="desktop-swiper"
          slidesPerView={1.5}
          spaceBetween={12}
          loop
          breakpoints={{
            640: {
              slidesPerView: 4.5,
              spaceBetween: 12,
            },
            // 1024: {
            //   slidesPerView: 4.5,
            //   spaceBetween: 16,
            // },
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-desktop-swiper",
          }}
          modules={[Pagination]}
          className="desktop-swiper"
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              <div className="h-[340px] rounded-[10px] overflow-hidden">
                <img
                  src={image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination-desktop-swiper flex justify-center w-full absolute h-auto"></div>
      </div>
    </div>
  );
};
