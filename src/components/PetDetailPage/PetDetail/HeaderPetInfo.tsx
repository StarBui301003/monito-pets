import { GhostButton } from "@/components/Buttons/GhostButton";
import { PrimaryButton } from "@/components/Buttons/PrimaryButton";
import { PetProps } from "@/types/PetType";
import { BsChatLeftDots } from "react-icons/bs";

export const HeaderPetInfo = ({ pet }: { pet: PetProps }) => {
  return (
    <>
      <div className="py-[18px]">
        <div className="text-neutral-40 body-medium-14">
          SKU #{pet.sku_code}
        </div>
        <div className="text-neutral-100 heading-bold-24 mt-[2px] mb-[6px]">
          {pet.name}
        </div>
        <div className="text-primary body-bold-20">
          {new Intl.NumberFormat("vi-VN").format(pet.price) + " VND"}
        </div>
      </div>
      <div className="flex gap-[18px] h-[44px] mb-[18px]">
        <PrimaryButton
          children={"Contact Us"}
          className="xs:pt-[10px] xs:pb-[10px] body-bold-16 xs:px-7 flex items-center"
        />
        <GhostButton className=" xs:py-0 border-2 xs:px-6 text-primary body-bold-16 gap-1">
          <div className="pt-1 size-6 flex items-center">
            <BsChatLeftDots size={24} />
          </div>
          Chat with Monito
        </GhostButton>
      </div>
    </>
  );
};
