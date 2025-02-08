import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import { Link } from "react-router-dom";

interface IProps {
  className?: string;
  children: React.ReactNode;
  buttonLink?: string;
}

export const PrimaryButton = ({ className, children, buttonLink }: IProps) => {
  const isLinkValid = Boolean(buttonLink && buttonLink.trim());

  return isLinkValid ? (
    <Link to={buttonLink!} className="inline-block">
      <Button
        className={cn(
          "rounded-[57px] xs:px-[36px] xs:pb-[10px] px-5 pt-[15px] pb-[11px] xs:body-medium-16 h-auto",
          className
        )}
      >
        {children}
      </Button>
    </Link>
  ) : (
    <Button
      className={cn(
        "rounded-[57px] xs:px-[36px] xs:pb-[10px] px-5 pt-[15px] pb-[11px] xs:body-medium-16 h-auto",
        className
      )}
    >
      {children}
    </Button>
  );
};
