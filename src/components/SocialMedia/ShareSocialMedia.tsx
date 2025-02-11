import { SocialMediaIcon } from "@/components/SocialMedia/SocialMediaIcon";
import { LuShare2 } from "react-icons/lu";

export const ShareSocialMedia = () => {
  return (
    <>
      <div className="flex py-[6px] px-[10px] gap-[21px]">
        <div className="flex gap-2">
          <LuShare2 size={20} />
          <div className="body-bold-14 text-primary">Share: </div>
        </div>
        <div className="flex gap-[18px]">
          <SocialMediaIcon className="text-neutral-40 size-[19px]" />
        </div>
      </div>
    </>
  );
};
