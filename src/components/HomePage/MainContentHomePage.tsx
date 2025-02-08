import { Button } from "@/components/ui/button";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface IProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
}

export const MainContentHomePage = (props: IProps) => {
  const {
    title = "",
    subtitle = "",
    buttonText = "",
    buttonLink = "",
    className = "",
  } = props;
  return (
    <div className="flex justify-between items-center sm:mb-7 mb-3 max-sm:order-1">
      <div className={(cn("block"), className)}>
        <p className="body-medium-16">{title}</p>
        <p className="text-primary sm:heading-bold-24 body-bold-20">
          {subtitle}
        </p>
      </div>
      <Link to={buttonLink}>
        <Button
          className="hidden sm:flex rounded-[57px] xs:px-7 px-5 py-0 h-11 body-medium-14 [&_svg]:size-3 border-[1.5px] border-primary text-primary "
          variant={"ghost"}
        >
          {buttonText}
          <div className="p-1">
            <IoIosArrowForward />
          </div>
        </Button>
      </Link>
    </div>
  );
};
