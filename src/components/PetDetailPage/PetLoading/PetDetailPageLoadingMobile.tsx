import { Skeleton } from "@/components/ui/skeleton";

export const PetDetailPageLoadingMobile = () => {
  return (
    <>
      <div className="w-full ">
        <div className="mb-4">
          <Skeleton className="w-full h-[50vh] rounded-none" />
        </div>

        {/* Danh sách thumbnail */}
        <div className="flex gap-2 pl-5">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="h-12 w-12 " />
          ))}
        </div>
      </div>
      {/* Thông tin sản phẩm */}
      <div className="p-4">
        <div className="mb-2 flex items-center gap-2 mt-6">
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
    </>
  );
};
