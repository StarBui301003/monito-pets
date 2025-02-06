import { MainHero } from "@/components/Heros/MainHero";
import { Button } from "@/components/ui/button";
import { IoIosArrowForward } from "react-icons/io";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { PRODUCT1 } from "@/assets/img";
import { GoDotFill } from "react-icons/go";

export const HomePage = () => {
  return (
    <>
      <MainHero />
      {/* Content */}
      <div className="wrapper sm:mt-[60px] mt-[30px] px-4 lg:px-0">
        <div className="flex justify-between items-center sm:mb-4 mb-3 max-sm:order-1">
          <div>
            <p className="body-medium-16">What's news?</p>
            <p className="text-primary sm:heading-bold-24 body-bold-20">
              Take A Look At Some Of Our Pets
            </p>
          </div>
          <Button
            className="hidden sm:flex rounded-[57px] xs:px-7 px-5 py-0 h-11 body-medium-14 [&_svg]:size-3 border-[1.5px] border-primary text-primary "
            variant={"ghost"}
          >
            View more
            <div className="p-1">
              <IoIosArrowForward />
            </div>
          </Button>
        </div>

        {/* Product Card */}
        <div className="grid md:grid-cols-4 grid-cols-2 sm:mb-[50px] mb-4 gap-3 md:gap-5">
          {Array(8)
            .fill(null)
            .map((_, index) => (
              <Card
                key={index}
                className=" rounded-[12px] p-2 sm:my-[10px] my-[6px]"
              >
                <div>
                  <img src={PRODUCT1} alt="" className=" rounded-[10px]" />
                </div>
                <CardContent className="p-2">
                  <CardTitle className="text-neutral-100 sm:body-bold-16 body-bold-14">
                    MO231 - Pomeranian White
                  </CardTitle>
                  <CardDescription className="hidden sm:flex items-center [&_svg]:size-2 gap-1">
                    <div className="body-medium-12">
                      Gene: <span className="body-bold-12">Male</span>
                    </div>
                    <div className="p-[6px]">
                      <GoDotFill />
                    </div>
                    <div className="body-medium-12">
                      Age: <span className="body-bold-12">02 months</span>
                    </div>
                    <CardTitle className="text-neutral-100 body-bold-16">
                      6.900.000 VND
                    </CardTitle>
                  </CardDescription>
                  <CardDescription className="sm:hidden block items-center [&_svg]:size-2 gap-1">
                    <div className="body-medium-12">
                      Gene: <span className="body-bold-12">Male</span>
                    </div>
                    <div className="body-medium-12">
                      Age: <span className="body-bold-12">02 months</span>
                    </div>
                    <CardTitle className="text-neutral-100 body-bold-16">
                      6.900.000 VND
                    </CardTitle>
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
        </div>
        <Button
          className="sm:hidden rounded-[57px] xs:px-7 px-5 py-0 h-11 body-medium-14 [&_svg]:size-3 border-[1.5px] border-primary text-primary w-full mb-10"
          variant={"ghost"}
        >
          View more
          <div className="p-1">
            <IoIosArrowForward />
          </div>
        </Button>
      </div>
    </>
  );
};
