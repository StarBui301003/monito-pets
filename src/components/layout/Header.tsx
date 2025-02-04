import { LOGO } from "@/assets/img";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React, { useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { cn } from "@/lib/utils";

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
      <div className={cn("fixed top-0 w-full", { "backdrop-blur": blur })}>
        <div className="wrapper flex h-[100px] items-center ">
          {/* Logo */}
          <img className="h-10 w-[115px] mr-12" src={LOGO} alt="" />
          {/* Navigation */}
          <div className="flex sm:gap-x-12 gap-x-10 ">
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
          {/* seach bar */}
          <div className="flex  w-full max-w-sm items-center ml-9 mr-[14px] min-w-70 border bg-white rounded-[46px]">
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
          {/* join button  */}
          <Button className="body-bold-16 rounded-[57px] px-7 py-5">
            Join the community
          </Button>
          {/* amount image */}
          <Avatar className="size-[21px] ml-[22px]">
            <AvatarImage
              className=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST1tE4gIZ4oKXqRpbyT6ytP8SD6NqEHlv8Mw&s"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          {/* amount option */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="body-medium-16 px-[6px]">
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
