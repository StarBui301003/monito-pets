import { BLOGIMAGE } from "@/assets/img";
import { BlogTag } from "@/components/Buttons/BlogTag";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

export const Blogs = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 sm:mb-[50px] mb-4 my-[6px] gap-3 md:gap-[20px] w-full">
      {Array(4)
        .fill(null)
        .map((_, index) => (
          <Card
            key={index}
            className=" rounded-[12px] p-2 sm:my-[10px] shadow-[0px_4px_28px_-2px_rgba(0,0,0,0.08)] w-full"
          >
            <div>
              <img src={BLOGIMAGE} alt="" className=" rounded-[10px]" />
            </div>
            <CardContent className="p-2 w-full">
              <BlogTag />
              <CardTitle className="text-neutral-100 sm:body-bold-16 body-bold-14 py-1 sm:py-0 my-[6px]">
                What is a Pomeranian? How to Identify Pomeranian Dogs
              </CardTitle>
              <CardDescription className="sm:flex block items-center [&_svg]:size-2 gap-1 w-full">
                <div className="body-medium-12 py-1 sm:py-0 line-clamp-3 w-full ">
                  The Pomeranian, also known as the Pomeranian (Pom dog), is
                  always in the top of the cutest pets. Not only that, the
                  small, lovely, smart
                </div>
              </CardDescription>
            </CardContent>
          </Card>
        ))}
    </div>
  );
};
