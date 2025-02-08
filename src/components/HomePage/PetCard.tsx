import { PRODUCT1 } from "@/assets/img";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { GoDotFill } from "react-icons/go";

export const PetCard = () => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 sm:mb-[50px] mb-4 my-[6px] gap-3 md:gap-[20px]">
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
              <CardTitle className="text-neutral-100 sm:body-bold-16 body-bold-14 py-1 sm:py-0">
                MO231 - Pomeranian White
              </CardTitle>
              <CardDescription className="sm:flex block items-center [&_svg]:size-2 gap-1">
                <div className="body-medium-12 py-1 sm:py-0">
                  Gene: <span className="body-bold-12">Male</span>
                </div>
                <div className="p-[6px] hidden sm:block">
                  <GoDotFill />
                </div>
                <div className="body-medium-12 py-1 sm:py-0">
                  Age: <span className="body-bold-12">02 months</span>
                </div>
              </CardDescription>
              <CardTitle className="text-neutral-100 body-bold-16 py-1 sm:py-0">
                6.900.000 VND
              </CardTitle>
            </CardContent>
          </Card>
        ))}
    </div>
  );
};
