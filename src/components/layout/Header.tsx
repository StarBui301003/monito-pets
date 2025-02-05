import { LOGO } from "@/assets/img";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React, { useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { cn } from "@/lib/utils";
import { FaBars } from "react-icons/fa6";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Header = () => {
  const [position, setPosition] = React.useState("bottom");
  const [blur, setBlur] = React.useState(false);
  const changeBlur = () => {
    if (window.scrollY > 0) {
      setBlur(true);
    } else {
      setBlur(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBlur);
    return () => {
      window.removeEventListener("scroll", changeBlur);
    };
  }, []);

  return (
    <>
      <div
        className={cn(
          "fixed top-0 w-full pl-[10px] sm:pl-0 pr-[14px] sm:pr-0 items-center",
          {
            "backdrop-blur": blur,
          }
        )}
      >
        <div className="sm:wrapper flex sm:h-[100px] h-[57px] items-center justify-between">
          {/* sidebar mobile */}
          <div className="sm:hidden">
            <Sheet key={"left"}>
              <SheetTrigger asChild>
                <Button
                  variant={"ghost"}
                  className="sm:hidden size-8 p-2 hover:bg-transparent"
                >
                  <FaBars className="text-neutral-100" />
                </Button>
              </SheetTrigger>
              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle>Edit profile</SheetTitle>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <Link
                    to="/"
                    className="body-bold-16 text-dark-blue-primary border-b border-b-transparent hover:border-neutral-100 transition-colors select-none"
                  >
                    Home
                  </Link>
                  <Link
                    to="/"
                    className="body-bold-16 text-dark-blue-primary border-b border-b-transparent hover:border-neutral-100 transition-colors select-none"
                  >
                    Category
                  </Link>
                  <Link
                    to="/"
                    className="body-bold-16 text-dark-blue-primary border-b border-b-transparent hover:border-neutral-100 transition-colors select-none"
                  >
                    About
                  </Link>
                  <Link
                    to="/"
                    className="body-bold-16 text-dark-blue-primary border-b border-b-transparent hover:border-neutral-100 transition-colors select-none"
                  >
                    Contact
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo */}
          <img
            className="sm:h-10 sm:w-[115px] w-[92px] h-[32px] sm:mr-12 mr-0"
            src={LOGO}
            alt=""
          />
          {/* Navigation */}
          <div className="sm:flex sm:gap-x-12 hidden">
            <Link
              to="/"
              className="body-bold-16 text-dark-blue-primary border-b border-b-transparent hover:border-neutral-100 transition-colors select-none"
            >
              Home
            </Link>
            <Link
              to="/"
              className="body-bold-16 text-dark-blue-primary border-b border-b-transparent hover:border-neutral-100 transition-colors select-none"
            >
              Category
            </Link>
            <Link
              to="/"
              className="body-bold-16 text-dark-blue-primary border-b border-b-transparent hover:border-neutral-100 transition-colors select-none"
            >
              About
            </Link>
            <Link
              to="/"
              className="body-bold-16 text-dark-blue-primary border-b border-b-transparent hover:border-neutral-100 transition-colors select-none"
            >
              Contact
            </Link>
          </div>
          {/* desktop search bar */}
          <div className="sm:flex hidden w-full max-w-sm items-center ml-9 mr-[14px] min-w-70 border bg-white rounded-[46px] ">
            <CiSearch
              className="size-5 text-neutral-60 ml-[17px] "
              strokeWidth={1.2}
            />
            <Input
              type="email"
              placeholder="Search something here!"
              className="body-medium-14 border-none truncate-placeholder ml-0 my-[2px] text-neutral-40"
            />
          </div>
          {/* mobile search bar */}
          <div className="block sm:hidden">
            <CiSearch className="size-6 text-neutral-100" strokeWidth={1.2} />
            {/* <Input
              type="email"
              placeholder="Search something here!"
              className="body-medium-14 border-none truncate-placeholder ml-0 my-[2px] text-neutral-40 "
            /> */}
          </div>
          {/* join button  */}
          <Button className="body-bold-16 rounded-[57px] px-7 py-5 hidden sm:flex">
            Join the community
          </Button>
          {/* amount image */}
          <Avatar className="size-[21px] ml-[22px] hidden sm:flex">
            <AvatarImage
              className=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST1tE4gIZ4oKXqRpbyT6ytP8SD6NqEHlv8Mw&s"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          {/* amount option */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="body-medium-16 px-[6px] hidden sm:flex"
              >
                VND
                <IoIosArrowDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              {/* <DropdownMenuLabel>Panel Position</DropdownMenuLabel> */}
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={position}
                onValueChange={setPosition}
              >
                <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="bottom">
                  Bottom
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
};
