import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface IProps {
  className?: string;
  children: React.ReactNode;
  buttonLink?: string;
}

export const GhostButton = ({
  className = "",
  children,
  buttonLink,
}: IProps) => {
  const isLinkValid = Boolean(buttonLink && buttonLink.trim());

  return isLinkValid ? (
    <Link to={buttonLink!} className="inline-block">
      <Button
        variant="ghost"
        className={cn(
          "rounded-[57px] xs:px-7 px-4 xs:pt-3 xs:pb-[10px] xs:body-medium-16 h-auto xs:[&_svg]:size-[18px] [&_svg]:size-4 border-[1.5px] border-primary text-primary",
          className
        )}
      >
        {children}
      </Button>
    </Link>
  ) : (
    <Button
      variant="ghost"
      className={cn(
        "rounded-[57px] xs:px-7 px-4 xs:pt-3 xs:pb-[10px] xs:body-medium-16 h-auto xs:[&_svg]:size-[18px] [&_svg]:size-4 border-[1.5px] border-primary text-primary",
        className
      )}
    >
      {children}
    </Button>
  );
};
