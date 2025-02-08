import { MAINSUBHERO2 } from "@/assets/img";
import { GhostButton } from "@/components/Buttons/GhostButton";
import { PrimaryButton } from "@/components/Buttons/PrimaryButton";
import { FaRegCirclePlay } from "react-icons/fa6";
import { DogFootPrint } from "@/assets/icons/index";

export const AdoptionBanner = () => {
  return (
    <>
      <div
        className="hidden sm:block bg-cover bg-center inset-0 aspect-[3.12] w-full
      rounded-[20px] z-10 mb-[60px]"
        style={{ backgroundImage: `url(${MAINSUBHERO2})` }}
      >
        <div className="text-left aspect-[3.12] pt-16 ml-[85px]">
          <div className="flex items-center">
            <p className="heading-extrabold-52 text-dark-blue-80">Adoption</p>
            <div className="p-4">
              <DogFootPrint />
            </div>
          </div>
          <p className="heading-bold-36 text-dark-blue-80">
            We Need Help. So Do They.
          </p>
          <p className=" body-medium-12 text-neutral-80 mt-4 ">
            Adopt a pet and give it a home,
          </p>
          <p className=" body-medium-12 text-neutral-80">
            it will be love you back unconditionally.
          </p>
          <div className="gap-5 flex mt-6">
            <PrimaryButton
              className="rounded-[57px] px-[36px] pt-[14px] pb-[10px] body-medium-16 h-auto"
              children={"Explore Now"}
            />
            <GhostButton className="rounded-[57px] px-7 pt-[14px] pb-[10px] body-medium-16 h-auto [&_svg]:size-5 border-[1.5px] border-primary">
              View Intro <FaRegCirclePlay />
            </GhostButton>
          </div>
        </div>
      </div>
    </>
  );
};
