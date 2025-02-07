import { Button } from "@/components/ui/button";
import { IoIosArrowForward } from "react-icons/io";

export const ViewMoreButtonOnMobile = () => {
  return (
    <Button
      className="sm:hidden rounded-[57px] xs:px-7 px-5 py-0 h-11 body-medium-14 [&_svg]:size-3 border-[1.5px] border-primary text-primary w-full mb-10"
      variant={"ghost"}
    >
      View more
      <div className="p-1">
        <IoIosArrowForward />
      </div>
    </Button>
  );
};
