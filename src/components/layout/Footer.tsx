import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { LOGO } from "@/assets/img";

export const Footer = () => {
  return (
    <footer className="bg-[linear-gradient(to_bottom_right,hsla(39,86%,91%,1),hsla(39,86%,91%,1),hsla(39,100%,86%,0.75))] text-dark-blue-80 text-center rounded-t-[40px]">
      <div className="pt-20 pb-10 wrapper">
        <div className="bg-primary text-left text-neutral-0 rounded-2xl items-center justify-between h-[136px] flex w-full gap-x-4">
          <p className="heading-bold-24 flex-none w-[389px] py-8 pl-8">
            Register Now So You Don't Miss Our Programs
          </p>
          <div className="flex p-3 text-right w-full h-[72px] rounded-[14px] mx-8 bo bg-white">
            <Input
              type=""
              placeholder="Enter your Email"
              className="flex-1 body-medium-14 border rounded-lg h-auto x border-neutral-40 text-neutral-40"
            />
            <Button className="h-auto w-[163px] ml-3 rounded-lg select-none">
              Subcribe Now
            </Button>
          </div>
        </div>
        <div className=" my-10 flex items-center justify-between">
          <div className="flex gap-x-[60px]">
            <Link
              to="/"
              className="body-medium-16 text-neutral-100 border-b border-b-transparent hover:border-neutral-100 transition-colors select-none"
            >
              Home
            </Link>
            <Link
              to="/"
              className="body-medium-16 text-neutral-100 border-b border-b-transparent hover:border-neutral-100 transition-colors select-none"
            >
              Category
            </Link>
            <Link
              to="/"
              className="body-medium-16 text-neutral-100 border-b border-b-transparent hover:border-neutral-100 transition-colors select-none"
            >
              About
            </Link>
            <Link
              to="/"
              className="body-medium-16 text-neutral-100 border-b border-b-transparent hover:border-neutral-100 transition-colors select-none"
            >
              Contact
            </Link>
          </div>
          <div className="flex gap-x-[40px]">
            <Link
              to="/"
              className=" text-neutral-100 hover:scale-105 transition-all"
            >
              <FaFacebook className="size-6" />
            </Link>
            <Link
              to="/"
              className=" text-neutral-100 hover:scale-105 transition-all"
            >
              <FaTwitter className="size-6" />
            </Link>
            <Link
              to="/"
              className=" text-neutral-100 hover:scale-105 transition-all"
            >
              <FaInstagram className="size-6" />
            </Link>
            <Link
              to="/"
              className=" text-neutral-100 hover:scale-105 transition-all"
            >
              <FaYoutube className="size-6" />
            </Link>
          </div>
        </div>
        <Separator className="text-neutral-20" />
        <div className="flex justify-between mt-10">
          <p className="text-neutral-60 body-medium-14">
            © 2022 Monito. All rights reserved.
          </p>
          <img className="h-10 w-[115px]" src={LOGO} alt="" />
          <div className="flex gap-x-[40px]">
            <p className="text-neutral-60 body-medium-14 hover:underline">
              Terms Of Service
            </p>
            <p className="text-neutral-60 body-medium-14 hover:underline">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
