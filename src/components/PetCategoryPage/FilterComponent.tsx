import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

export const FilterComponent = () => {
  return (
    <>
      <div className="w-[280px] mt-[35px]">
        <div className="heading-bold-24 text-primary mb-[14px]">Filter</div>
        {/* Gender Filter */}

        <div className="pb-4 space-y-[10px] border-b border-neutral-10">
          <div className="body-bold-16 text-neutral-100">Gender</div>
          <div className="space-y-2">
            <div className="flex items-center space-x-[10px]">
              <Checkbox id="male" />
              <label
                htmlFor="male"
                className="body-medium-14 text-neutral-100 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Male
              </label>
            </div>
            <div className="flex items-center space-x-[10px]">
              <Checkbox id="female" />
              <label
                htmlFor="female"
                className=" body-medium-14 text-neutral-100 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Female
              </label>
            </div>
          </div>
        </div>

        {/* Color Filter */}
        <div className="space-y-[10px] py-4 border-b border-neutral-10">
          <div className="body-bold-16 text-neutral-100">Color</div>
          <div className="space-y-2">
            {[
              { name: "Red", color1: "bg-pink-red" },
              { name: "Apricot", color1: "bg-[#FFB672]" },
              { name: "Black", color1: "bg-black" },
              {
                name: "Black & White",
                color1: "bg-black",
                color2: "bg-[#CECECE]",
              },
              { name: "Silver", color1: "bg-[#CECECE]" },
              { name: "Tan", color1: "bg-[#FFF7CE]" },
            ].map((item) => (
              <div key={item.name} className="flex items-center space-x-[10px]">
                <Checkbox id={item.name.toLowerCase()} />
                <div className="flex items-center space-x-[10px]">
                  {item.color2 ? (
                    <div className="size-[15px] rounded-full overflow-hidden relative">
                      <div
                        className={`absolute top-0 left-0 w-1/2 h-full ${item.color1}`}
                      ></div>
                      <div
                        className={`absolute top-0 right-0 w-1/2 h-full ${item.color2}`}
                      ></div>
                    </div>
                  ) : (
                    <div
                      className={`size-[15px] rounded-full ${item.color1}`}
                    />
                  )}
                  <label
                    htmlFor={item.name.toLowerCase()}
                    className="body-medium-14 text-neutral-100"
                  >
                    {item.name}
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Price Filter */}
        <div className="space-y-[10px] py-4 border-b border-neutral-10">
          <div className="body-bold-16 text-neutral-100">Price</div>
          <div className="space-y-5">
            <Slider
              defaultValue={[0, 1000]}
              max={1000}
              step={1}
              className="w-full"
              onValueChange={(value) => {
                console.log(`Min: $${value[0]}, Max: $${value[1]}`);
              }}
            />
            <div className="flex justify-between">
              <div className="text-sm">Min: $0</div>
              <div className="text-sm">Max: $1000</div>
            </div>
          </div>
        </div>

        {/* Breed Filter */}
        <div className="space-y-[10px] py-4 border-b border-neutral-10">
          <div className="body-bold-16 text-neutral-100">Breed</div>
          <div className="space-y-2">
            {["Small", "Medium", "Large"].map((size) => (
              <div key={size} className="flex items-center space-x-[10px]">
                <Checkbox id={size.toLowerCase()} />
                <label
                  htmlFor={size.toLowerCase()}
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {size}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
