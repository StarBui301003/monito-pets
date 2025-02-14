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
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect } from "react";

export const CustomerSwiper = () => {
  const [loading, setLoading] = useState(true);
  const images = [
    CUSTOMERP1,
    CUSTOMERP2,
    CUSTOMERP3,
    CUSTOMERP4,
    CUSTOMERP5,
    CUSTOMERP6,
  ];

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div className="relative mb-[59px] pl-4">
      <div className="text-neutral-100 heading-bold-24 mb-3 mt-6">
        Our lovely customer
      </div>
      <div className="h-[399px]">
        {loading ? (
          <div className="flex gap-3">
            {Array(4)
              .fill(null)
              .map((_, index) => (
                <Skeleton
                  key={index}
                  className="w-[248px] h-[340px] rounded-[10px]"
                />
              ))}
            <Skeleton className="w-[124px] h-[340px] rounded-[10px]" />
          </div>
        ) : (
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
        )}

        <div className="swiper-pagination flex justify-center gap-2 w-full absolute bottom-0 h-auto"></div>
      </div>
    </div>
  );
};
