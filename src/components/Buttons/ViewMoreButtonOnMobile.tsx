import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

interface IProps {
  className?: string;
  buttonLink?: string;
}
export const ViewMoreButtonOnMobile = ({ className, buttonLink }: IProps) => {
  const isLinkValid = Boolean(buttonLink && buttonLink.trim());

  return isLinkValid ? (
    <Link to={buttonLink!} className="block w-full">
      <Button
        className={cn(
          "sm:hidden flex rounded-[57px] xs:px-7 px-5 py-0 h-11 body-medium-14 [&_svg]:size-3 border-[1.5px] border-primary text-primary w-full mb-10",
          className
        )}
        variant={"ghost"}
      >
        View more
        <div className="p-1">
          <IoIosArrowForward />
        </div>
      </Button>
    </Link>
  ) : (
    <Button
      className={
        (cn(
          "sm:hidden flex rounded-[57px] xs:px-7 px-5 py-0 h-11 body-medium-14 [&_svg]:size-3 border-[1.5px] border-primary text-primary w-full mb-10"
        ),
        className)
      }
      variant={"ghost"}
    >
      View more
      <div className="p-1">
        <IoIosArrowForward />
      </div>
    </Button>
  );
};
