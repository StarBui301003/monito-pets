import { MainContentHomePage } from "@/components/HomePage/MainContentHomePage";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const PetDetailPageLoading = () => {
  return (
    <>
      <Card className="sm:py-[22px] sm:pl-5 pr-[49px] grid grid-cols-[50fr_48fr] gap-[34px] w-full">
        <div>
          {/* Image Section Skeleton */}
          <div className="mb-4">
            <Skeleton className="aspect-[1.17647] w-full rounded-[10px]" />
          </div>
          {/* Carousel for thumbnails */}
          <div className="mt-4 flex gap-2">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-20 w-20 rounded-md" />
            ))}
          </div>
          {/* Sale Button Skeleton */}
          <Skeleton className="my-[17px] h-12 rounded-lg" />

          {/* Share Social Media Skeleton */}
          <div className="flex py-[6px] px-[10px] gap-4 items-center">
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-6 w-6 rounded-full" />
          </div>
        </div>

        <div className="pr-[49px]">
          {/* Breadcrumb Skeleton */}
          <div className="mb-2 flex items-center gap-2">
            <Skeleton className="h-4 w-[60px]" />
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-[100px]" />
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-[80px]" />
          </div>

          {/* Header Skeleton */}
          <div className="py-[18px]">
            {/* SKU Skeleton */}
            <Skeleton className="h-4 w-[100px] text-neutral-40 body-medium-14" />

            {/* Title Skeleton */}
            <Skeleton className="h-8 w-[250px] text-neutral-100 heading-bold-24 mb-[6px] mt-2" />

            {/* Price Skeleton */}
            <Skeleton className="h-6 w-[150px] text-primary body-bold-20 mb-2" />
          </div>

          <div className="flex gap-[18px] h-[44px] mb-[18px]">
            {/* Primary Button Skeleton */}
            <Skeleton className="h-10 w-[138px] rounded-[57px]" />

            {/* Ghost Button Skeleton */}
            <Skeleton className="h-10 w-[206px] rounded-[57px]" />
          </div>

          {/* Pet Info Table Skeleton */}
          <div>
            <div>
              {[...Array(12)].map((_, index) => (
                <div
                  key={index}
                  className="hover:bg-transparent border-b border-neutral-10 flex items-center"
                >
                  <div className="pl-[11px] py-[11px] pr-14">
                    <Skeleton className="text-neutral-60 w-[120px] h-5" />
                  </div>

                  <Skeleton className="text-neutral-60 py-[11px] w-[180px]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/*Customer Swiper Skeleton*/}
      <div className="relative mb-[59px] pl-4">
        <div className="text-neutral-100 heading-bold-24 mb-3 mt-6">
          Our lovely customer
        </div>
        <div className="h-[399px]">
          <div className="flex gap-3">
            {Array(4)
              .fill(null)
              .map((_, index) => (
                <Skeleton
                  key={index}
                  className="w-[248px] h-[340px] rounded-[10px]"
                />
              ))}
            <Skeleton className="w-[124px] h-[340px] rounded-[10px]" />
          </div>
        </div>
      </div>

      <div>
        <MainContentHomePage
          title="Related Pets"
          subtitle="Take A Look At Some Of Our Pets"
          buttonText="View more"
          buttonLink="/#"
          className="mb-5 mx-4 sm:mx-0"
          buttonClassName="sm:hidden hidden"
        />
      </div>

      <div className="grid md:grid-cols-4 grid-cols-2 mb-4 my-[6px] gap-3 md:gap-[20px] mx-4 sm:mx-0">
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className="rounded-[12px] p-2 shadow-[0px_4px_28px_-2px_rgba(0,0,0,0.08)] cursor-pointer"
            >
              <Skeleton className="rounded-[10px] w-full sm:h-[264px] h-[169px] aspect-square" />
              <div className="p-2">
                <Skeleton className="h-4 w-[80%] mb-2" />
                <div className="flex items-center">
                  <Skeleton className="h-4 w-[30%] mr-2" />
                  <Skeleton className="hidden sm:block h-4 w-[10px] rounded-full" />
                  <Skeleton className="h-4 w-[40%] ml-2" />
                </div>
                <Skeleton className="h-4 w-[60%] mt-2" />
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
