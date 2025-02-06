import { MAINHERO, MAINHEROONM } from "@/assets/img";
import { Button } from "@/components/ui/button";
import { FaRegCirclePlay } from "react-icons/fa6";

export const MainHero = () => {
  return (
    <>
      <div
        className="hidden sm:block relative bg-cover bg-center inset-0 h-screen rounded-b-[40px] z-10"
        style={{ backgroundImage: `url(${MAINHERO})` }}
      >
        {/* Content */}
        <div className="absolute z-20 lg:left-[9.2%] lg:top-[25.4%]">
          <p className="heading-extrabold-60 text-dark-blue-80">
            One More Friend
          </p>
          <p className="heading-bold-46 text-dark-blue-80 mt-1">
            Thousands More Fun!
          </p>
          <p className="w-[480px] body-medium-16 text-neutral-80 mt-6 text-justify">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>
          <div className="gap-5 flex mt-[34px]">
            <Button
              variant={"ghost"}
              className="rounded-[57px] px-7 pt-[14px] pb-[10px] body-medium-16 h-auto [&_svg]:size-5 border-[1.5px] border-primary"
            >
              View Intro <FaRegCirclePlay />
            </Button>
            <Button className="rounded-[57px] px-[36px] pt-[14px] pb-[10px] body-medium-16 h-auto">
              Explore Now
            </Button>
          </div>
        </div>
      </div>
      {/* on mobile */}
      <div
        className="sm:hidden block relative bg-cover bg-center inset-0 h-screen rounded-b-[20px] z-10"
        style={{ backgroundImage: `url(${MAINHEROONM})` }}
      >
        {/* Content */}
        <div className="absolute z-20 left-[4%] top-[15%] xs:top-[25%] mr-4">
          <p className="xs:heading-extrabold-46 heading-extrabold-36 text-dark-blue-80">
            One More Friend
          </p>
          <p className="xs:heading-bold-28 heading-bold-28 text-dark-blue-80">
            Thousands More Fun!
          </p>
          <p className="xs:body-medium-16 body-medium-12 text-neutral-80 mt-3 text-justify">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>
          <div className="gap-3 xs:gap-4 flex mt-8">
            <Button
              variant={"ghost"}
              className="rounded-[57px] xs:px-7 xs:pt-[14px] xs:pb-[10px] px-5 py-3 body-medium-16 h-auto [&_svg]:size-5 border-[1.5px] border-primary text-primary"
            >
              View Intro <FaRegCirclePlay />
            </Button>
            <Button className="rounded-[57px] xs:px-[36px] xs:pt-[14px] xs:pb-[10px] px-6 pt-3 pb-2 body-medium-16 h-auto">
              Explore Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
