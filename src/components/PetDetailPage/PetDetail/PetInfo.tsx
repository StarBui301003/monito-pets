import { DogHealthIcon, DogHealthIcon2 } from "@/assets/icons";
import { BreadcrumbComponent } from "@/components/Breadcrumb/Breadcrumb";
import { SaleButton } from "@/components/Buttons/SaleButton";
import { HeaderPetInfo } from "@/components/PetDetailPage/PetDetail/HeaderPetInfo";
import { ImagePetInfo } from "@/components/PetDetailPage/PetDetail/ImagePetInfo";
import { ShareSocialMedia } from "@/components/SocialMedia/ShareSocialMedia";
import { PetInfoTable } from "@/components/Table/PetInfoTable";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { PetProps } from "@/types/PetType";

interface IProps {
  pet: PetProps;
  className?: string;
  socialMediaClassName?: string;
}
export const PetInfo = ({ pet, className, socialMediaClassName }: IProps) => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Dog", href: "/pets" },
    { label: "Small Dog", href: "/pets" },
  ];
  return (
    <>
      <div className="sm:block hidden">
        <Card className="sm:py-[22px] sm:pl-5 pr-[49px] grid grid-cols-[50fr_48fr] gap-[34px] w-full">
          <div className="">
            <ImagePetInfo pet={pet} />
            <SaleButton
              className={cn(
                "my-[17px] flex gap-[15px] h-auto items-center bg-gradient-to-br from-[#FCEED5] via-[#FCEED5] to-[#FFE7BA] hover:from-[#FCEED5] hover:via-[#FCEED5] hover:to-[#FFE7BA] cursor-none",
                socialMediaClassName
              )}
            >
              <div className="flex items-center">
                <div className="px-[7px] py-[9px]">
                  <DogHealthIcon />
                </div>
                100% health guarantee for pets
              </div>
              <div className="flex items-center">
                <div className="px-[7px] py-[11px]">
                  <DogHealthIcon2 />
                </div>
                100% guarantee of pet identification
              </div>
            </SaleButton>
            <ShareSocialMedia className={socialMediaClassName} />
          </div>

          <div className="pr-[49px]">
            <BreadcrumbComponent items={breadcrumbs} />
            <HeaderPetInfo pet={pet} className={className} />
            <PetInfoTable pet={pet} className={className} />
          </div>
        </Card>
      </div>
    </>
  );
};
