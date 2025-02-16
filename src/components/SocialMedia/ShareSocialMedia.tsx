import { SocialMediaIcon } from "@/components/SocialMedia/SocialMediaIcon";
import { cn } from "@/lib/utils";
import { LuShare2 } from "react-icons/lu";

interface IProps {
  className?: string;
}
export const ShareSocialMedia = ({ className }: IProps) => {
  return (
    <>
      <div className={cn("flex py-[6px] px-[10px] gap-[21px]", className)}>
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
