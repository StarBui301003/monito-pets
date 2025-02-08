import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import { Link } from "react-router-dom";

interface IProps {
  className?: string;
  children: React.ReactNode;
  buttonLink?: string;
}

export const SaleButton = ({ className, children, buttonLink }: IProps) => {
  const isLinkValid = Boolean(buttonLink && buttonLink.trim());

  return isLinkValid ? (
    <Link to={buttonLink!} className="inline-block">
      <Button
        className={cn(
          "rounded-[8px] bg-mon-yellow-40 text-dark-blue-80 body-bold-14 w-full pt-[6px] pb-1 gap-0 pl-[10px] justify-start",
          className
        )}
      >
        {children}
      </Button>
    </Link>
  ) : (
    <Button
      className={cn(
        "rounded-[8px] bg-mon-yellow-40 text-dark-blue-80 body-bold-14 w-full pt-[6px] pb-1 gap-0 pl-[10px] justify-start",
        className
      )}
    >
      {children}
    </Button>
  );
};
