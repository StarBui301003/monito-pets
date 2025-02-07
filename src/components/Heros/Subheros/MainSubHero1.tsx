import { MAINSUBHERO1, MAINSUBHERO1ONMOBILE } from "@/assets/img";
import { GhostButton } from "@/components/Buttons/GhostButton";
import { PrimaryButton } from "@/components/Buttons/PrimaryButton";
import { FaRegCirclePlay } from "react-icons/fa6";

const MainSubHero1 = () => {
  return (
    <>
      <div
        className="hidden sm:block bg-cover bg-center inset-0 aspect-[3.12] w-full
      rounded-[20px] z-10 mb-[60px]"
        style={{ backgroundImage: `url(${MAINSUBHERO1})` }}
      >
        <div className="text-right aspect-[3.12] w-[403px] ml-auto pt-16 mr-[85px]">
          <p className="heading-extrabold-52 text-dark-blue-80">
            One More Friend
          </p>
          <p className="heading-bold-36 text-dark-blue-80 mt-[2px]">
            Thousands More Fun!
          </p>
          <p className=" body-medium-12 text-neutral-80 mt-4 ">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>
          <div className="gap-5 flex mt-6 justify-end">
            <GhostButton className="rounded-[57px] px-7 pt-[14px] pb-[10px] body-medium-16 h-auto [&_svg]:size-5 border-[1.5px] border-primary">
              View Intro <FaRegCirclePlay />
            </GhostButton>
            <PrimaryButton
              className="rounded-[57px] px-[36px] pt-[14px] pb-[10px] body-medium-16 h-auto"
              children={"Explore Now"}
            />
          </div>
        </div>
      </div>

      <div
        className="sm:hidden block bg-cover bg-center inset-0 aspect-[0.596875] w-full
      rounded-[20px] z-10 mb-[60px] "
        style={{ backgroundImage: `url(${MAINSUBHERO1ONMOBILE})` }}
      >
        <div className="text-center aspect-[3.12] px-5 pt-8 w-full">
          <p className="xs:heading-bold-36 heading-bold-28 text-dark-blue-80">
            One More Friend
          </p>
          <p className="xs:heading-bold-24 body-bold-20 text-dark-blue-80">
            Thousands More Fun!
          </p>
          <p className=" body-medium-12 text-neutral-80 xs:mt-4 mt-3">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>
          <div className="gap-3 flex xs:mt-8 mt-4 md:justify-end justify-center">
            <GhostButton>
              View Intro <FaRegCirclePlay />
            </GhostButton>
            <PrimaryButton className="" children={"Explore Now"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSubHero1;
