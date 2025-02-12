import { DogHealthIcon, DogHealthIcon2 } from "@/assets/icons";
import { BreadcrumbComponent } from "@/components/Breadcrumb/Breadcrumb";
import { SaleButton } from "@/components/Buttons/SaleButton";
import { HeaderPetInfo } from "@/components/PetDetailPage/PetDetail/HeaderPetInfo";
import { ImagePetInfo } from "@/components/PetDetailPage/PetDetail/ImagePetInfo";
import { ShareSocialMedia } from "@/components/SocialMedia/ShareSocialMedia";
import { PetInfoTable } from "@/components/Table/PetInfoTable";

import { Card } from "@/components/ui/card";
import { PetProps } from "@/types/PetType";

export const PetInfo = ({ pet }: { pet: PetProps }) => {
  return (
    <div className="wrapper">
      <Card className="py-[22px] pl-5 pr-[49px] grid grid-cols-[50fr_48fr] gap-[34px] w-full">
        <div>
          <ImagePetInfo pet={pet} />
          <SaleButton className="my-[17px] flex gap-[15px] h-auto items-center bg-gradient-to-br from-[#FCEED5] via-[#FCEED5] to-[#FFE7BA] hover:from-[#FCEED5] hover:via-[#FCEED5] hover:to-[#FFE7BA]">
            <div className="flex items-center">
              <div className="px-[7px] py-[9px]">
                <DogHealthIcon />
              </div>
              100% health guarantee for pets
            </div>
            <div className="flex items-center ">
              <div className="px-[7px] py-[11px]">
                <DogHealthIcon2 />
              </div>
              100% guarantee of pet identification
            </div>
          </SaleButton>
          <ShareSocialMedia />
        </div>

        <div className="pr-[49px]">
          <BreadcrumbComponent />
          <HeaderPetInfo pet={pet} />
          <PetInfoTable pet={pet} />
        </div>
      </Card>
    </div>
  );
};
