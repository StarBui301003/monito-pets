import { SaleGift } from "@/assets/icons";
import { PRODUCT1 } from "@/assets/img";
import { SaleButton } from "@/components/Buttons/SaleButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { GoDotFill } from "react-icons/go";

export const Products = () => {
  return (
    <div className="hidden sm:grid md:grid-cols-4 grid-cols-2 sm:mb-[50px] mb-4 gap-3 md:gap-[20px] my-[6px]">
      {Array(8)
        .fill(null)
        .map((_, index) => (
          <Card
            key={index}
            className=" rounded-[12px] p-2 sm:my-[10px] shadow-[0px_4px_28px_-2px_rgba(0,0,0,0.08)]"
          >
            <div>
              <img src={PRODUCT1} alt="" className=" rounded-[10px]" />
            </div>
            <CardContent className="p-2">
              <CardTitle className="text-neutral-100 sm:body-bold-16 body-bold-14 pt-2 py-1 sm:py-0">
                Reflex Plus Adult Cat Food Salmon
              </CardTitle>
              <CardDescription className="block sm:flex items-center [&_svg]:size-2 gap-1 mt-1">
                <div className="body-medium-12 py-1 sm:py-0">
                  Product: <span className="body-bold-12">Dog Food</span>
                </div>
                <div className="p-[6px]  hidden sm:block">
                  <GoDotFill />
                </div>
                <div className="body-medium-12 py-1 sm:py-0">
                  Size: <span className="body-bold-12">385gm</span>
                </div>
              </CardDescription>
              <CardTitle className="text-neutral-100 body-bold-16 mt-1 py-1 sm:py-0">
                140.000 VND
              </CardTitle>
              <SaleButton className="mt-[10px]">
                <div className="p-[2px]">
                  <SaleGift />
                </div>
                <div className="py-1 px-[2px]">
                  <GoDotFill />
                </div>
                Free Toy & Free Shaker
              </SaleButton>
            </CardContent>
          </Card>
        ))}
    </div>
  );
};
