import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export const HeaderCategory = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-[14px] mt-[35px]">
        <div className="flex space-x-[14px] items-center ">
          <div className="heading-bold-24 text-primary ">Small Dog</div>
          <div className="text-neutral-60 body-medium-14">52 puppies</div>
        </div>
        <div>
          <Select defaultValue="Popular">
            <SelectTrigger className="rounded-[20px] border border-neutral-20 pl-5 pr-4 space-x-2 focus:ring-0 flex items-center">
              <SelectValue>{"Sort by: Popular"}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Popular">Popular</SelectItem>
              <SelectItem value="Newest">Newest</SelectItem>
              <SelectItem value="Price">Price</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
};
