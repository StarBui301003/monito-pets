import {
  TEST1,
  TEST2,
  TEST3,
  TEST4,
  TEST5,
  TEST6,
  TEST7,
  TEST8,
  TEST9,
} from "@/assets/img";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Skeleton } from "@/components/ui/skeleton";

const images = [TEST1, TEST2, TEST3, TEST4, TEST5, TEST6, TEST7, TEST8, TEST9];

export const ImagePetInfo = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loadingImage, setLoadingImage] = useState(true);
  const [loadedThumbnails, setLoadedThumbnails] = useState(0);
  const totalImages = images.length;
  const handleNext = () => {
    if (!loadingImage) {
      setSelectedIndex((prev) => (prev + 1) % images.length);
      setLoadingImage(true);
    }
  };

  const handlePrevious = () => {
    if (!loadingImage) {
      setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      setLoadingImage(true);
    }
  };

  const handleThumbnailLoad = () => {
    setLoadedThumbnails((prev) => prev + 1);
  };
  return (
    <div className="w-full flex flex-col items-center gap-3 mb-[10px]">
      <Carousel className="w-full relative">
        <CarouselContent>
          <CarouselItem>
            <Card>
              <CardContent className="flex aspect-[1.17647] bg-cover w-full items-center justify-center rounded-[10px] p-0 relative">
                {loadingImage && (
                  <Skeleton className="absolute inset-0 w-full h-full rounded-[10px]" />
                )}
                <img
                  loading="lazy"
                  src={images[selectedIndex]}
                  className={`w-full h-full object-cover rounded-[10px] transition-opacity ${
                    loadingImage ? "opacity-0" : "opacity-100"
                  }`}
                  onLoad={() => setLoadingImage(false)}
                />
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      <Carousel opts={{ align: "start" }} className="w-full !shadow-none">
        <CarouselContent className="!shadow-none gap-3 w-full pl-5">
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="basis-1/6 !shadow-none p-0"
              onClick={() => {
                if (!loadingImage) {
                  setSelectedIndex(index);
                  setLoadingImage(true);
                }
              }}
            >
              <Card className="!shadow-none border-none">
                <CardContent className="flex aspect-square items-center justify-center bg-cover w-full p-0 !shadow-none relative">
                  {loadedThumbnails < totalImages && (
                    <Skeleton className="absolute inset-0 w-full h-full rounded-[6px]" />
                  )}
                  <img
                    loading="lazy"
                    src={image}
                    className={`cursor-pointer transition-all ease-in-out ${
                      selectedIndex === index
                        ? "w-full h-full object-cover border-[3px] border-mon-yellow-60 rounded-[6px]"
                        : "w-full h-full object-cover rounded-[6px]"
                    }`}
                    onLoad={handleThumbnailLoad}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div
          className={`absolute left-4 top-[-260%] transform -translate-y-1/2 !shadow-none bg-white/40 border-none p-[9px] text-neutral-0 rounded-full cursor-pointer ${
            loadingImage ? "opacity-50 pointer-events-none" : ""
          }`}
          onClick={handlePrevious}
        >
          <span className="text-2xl">
            <IoIosArrowBack />
          </span>
        </div>

        <div
          className={`absolute right-4 top-[-260%] transform -translate-y-1/2 !shadow-none bg-white/40 border-none p-[9px] text-neutral-0 rounded-full cursor-pointer ${
            loadingImage ? "opacity-50 pointer-events-none" : ""
          }`}
          onClick={handleNext}
        >
          <span className="text-2xl">
            <IoIosArrowForward />
          </span>
        </div>
      </Carousel>
    </div>
  );
};
