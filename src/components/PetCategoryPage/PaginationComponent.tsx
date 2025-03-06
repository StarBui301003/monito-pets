import {
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
  Pagination,
} from "@/components/ui/pagination";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export const PaginationComponent = () => {
  return (
    <div className="flex justify-center mt-10">
      <Pagination>
        <PaginationContent className=" gap-3">
          <PaginationItem>
            <button className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-slate-100">
              <FaArrowLeftLong className="h-4 w-4" />
              <span className="sr-only">Previous page</span>
            </button>
          </PaginationItem>
          <PaginationItem className="body-bold-18">
            <PaginationLink
              href="#"
              isActive
              className="bg-primary text-neutral-0 hover:bg-primary/90 hover:text-neutral-0 rounded-[8px]"
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className="hover:bg-slate-100">
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className="hover:bg-slate-100">
              3
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className="hover:bg-slate-100">
              28
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <button className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-slate-100">
              <FaArrowRightLong className="h-4 w-4" />
              <span className="sr-only">Next page</span>
            </button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
