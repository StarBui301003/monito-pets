import { MAINHERO, MAINHEROONM } from "@/assets/img";
import { GhostButton } from "@/components/Buttons/GhostButton";
import { PrimaryButton } from "@/components/Buttons/PrimaryButton";
import { FaRegCirclePlay } from "react-icons/fa6";

export const MainHero = () => {
  return (
    <>
      <div
        className="hidden sm:block bg-cover bg-center inset-0 h-screen rounded-b-[40px] z-10"
        style={{ backgroundImage: `url(${MAINHERO})` }}
      >
        <div className="wrapper pt-[180px]">
          {/* Content */}
          <div className="w-[480px] ">
            <p className="heading-extrabold-60 text-dark-blue-80">
              One More Friend
            </p>
            <p className="heading-bold-46 text-dark-blue-80 mt-1">
              Thousands More Fun!
            </p>
            <p className=" body-medium-16 text-neutral-80 mt-6 text-justify">
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </p>
            <div className="gap-5 flex mt-[34px]">
              <GhostButton>
                View Intro <FaRegCirclePlay />
              </GhostButton>
              <PrimaryButton children={"Explore Now"} />
            </div>
          </div>
        </div>
      </div>
      {/* on mobile */}
      <div
        className="sm:hidden block bg-cover bg-center inset-0 h-screen rounded-b-[20px] z-10"
        style={{ backgroundImage: `url(${MAINHEROONM})` }}
      >
        {/* Content */}
        <div className="xs:pt-[139px] pt-[92px] mr-4 mx-4">
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
            <GhostButton className="rounded-[57px] xs:px-7 xs:pt-[14px] xs:pb-[10px] px-5 py-3 body-medium-16 h-auto [&_svg]:size-5 border-[1.5px] border-primary text-primary">
              View Intro <FaRegCirclePlay />
            </GhostButton>
            <PrimaryButton
              children={"Explore Now"}
              className="rounded-[57px] xs:px-[36px] xs:pb-[10px] px-6 pb-2 body-medium-16 h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};
