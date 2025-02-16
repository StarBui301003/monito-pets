import { DogHealthIcon, DogHealthIcon2 } from "@/assets/icons";
import { BreadcrumbComponent } from "@/components/Breadcrumb/Breadcrumb";
import { CustomerSwiperMobile } from "@/components/PetDetailPage/CustomerSwiperMobile";
import { HeaderPetInfo } from "@/components/PetDetailPage/PetDetail/HeaderPetInfo";
import { PetListPetDetailPage } from "@/components/PetDetailPage/PetDetail/PetListPetDetailPage";
import { PetInfoTable } from "@/components/Table/PetInfoTable";
import { PetProps } from "@/types/PetType";
import { LuShare2 } from "react-icons/lu";

export const MobileDrawer = ({ pet }: { pet: PetProps }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg rounded-t-2xl overflow-hidden z-50 sm:hidden max-h-screen">
      <div className=" overflow-y-auto max-h-[calc(100vh-50px)]">
        <div className="mx-auto ">
          <div className="p-4">
            <BreadcrumbComponent />
            <HeaderPetInfo pet={pet} />
            <div className="w-full flex justify-between items-center mb-2 pl-1">
              <div className="body-bold-18 text-neutral-100">Information</div>
              <div className="flex py-[6px] px-2 gap-[21px]">
                <div className="flex gap-2 items-center text-primary">
                  <LuShare2 size={15} />
                  <div className="body-bold-14 text-primary">Share</div>
                </div>
              </div>
            </div>
            <PetInfoTable pet={pet} />
          </div>
          <div className=" pl-3 py-[14px] m-4 block bg-gradient-to-br from-[#FCEED5] via-[#FCEED5] to-[#FFE7BA] rounded-[10px]">
            <div className="flex items-center body-bold-14 mb-2">
              <div className="py-1 px-[3px] mr-[9px]">
                <DogHealthIcon />
              </div>
              100% health guarantee for pets
            </div>
            <div className="flex items-center body-bold-14">
              <div className="p-[1.5px] mr-[9px]">
                <DogHealthIcon2 />
              </div>
              100% guarantee of pet identification
            </div>
          </div>

          <CustomerSwiperMobile />
          <div className="text-primary heading-bold-24 mb-3 px-4">
            See more puppies
          </div>
          <PetListPetDetailPage excludeUuid={pet.uuid} size={pet.size} />
        </div>
      </div>
    </div>
  );
};
