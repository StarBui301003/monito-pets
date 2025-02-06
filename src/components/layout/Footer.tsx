import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { LOGO } from "@/assets/img";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-[linear-gradient(to_bottom_right,hsla(39,86%,91%,1),hsla(39,86%,91%,0.8),hsla(39,100%,86%,0.9))] text-dark-blue-80 text-center sm:rounded-t-[40px] rounded-t-[20px] sm:pb-[200px]">
      <div className="sm:pt-20 pt-10 pb-10 wrapper px-4 sm:px-0">
        <div className="bg-primary text-neutral-0 rounded-2xl items-center justify-between sm:h-[136px] sm:flex w-full gap-x-4 mx-0 p-4 sm:p-0">
          <p className="body-bold-20 sm:heading-bold-24 sm:flex-none sm:w-[389px] sm:py-8 sm:pl-8 text-left">
            Register Now So You Don't Miss Our Programs
          </p>
          <div className="sm:flex p-3 text-right w-full sm:h-[72px] rounded-[14px] sm:mx-8 bg-white mt-4 sm:mt-0">
            <Input
              type=""
              placeholder="Enter your Email"
              className="flex-1 body-medium-14 border rounded-lg h-auto border-neutral-40 text-neutral-40 px-7 py-[14px]"
            />
            <Button className="sm:h-auto sm:w-[163px] sm:ml-3 sm:rounded-lg select-none w-full mt-3 sm:mt-0 body-medium-16 h-12">
              Subcribe Now
            </Button>
          </div>
        </div>
        <div className=" my-10 sm:flex items-center sm:justify-between">
          <div className="flex sm:gap-x-[60px] gap-x-10 justify-center">
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
          <div className="flex gap-x-10 pt-5 sm:pt-0 justify-center">
            <Link
              to="/"
              className=" text-neutral-100 hover:scale-105 transition-all"
            >
              <FaFacebook className="sm:size-6 size-5" />
            </Link>
            <Link
              to="/"
              className=" text-neutral-100 hover:scale-105 transition-all"
            >
              <FaTwitter className="sm:size-6 size-5" />
            </Link>
            <Link
              to="/"
              className=" text-neutral-100 hover:scale-105 transition-all"
            >
              <FaInstagram className="sm:size-6 size-5" />
            </Link>
            <Link
              to="/"
              className=" text-neutral-100 hover:scale-105 transition-all"
            >
              <FaYoutube className="sm:size-6 size-5" />
            </Link>
          </div>
        </div>
        <Separator className="text-neutral-20" />
        <div className="flex sm:flex-row flex-col sm:justify-between mt-10 items-center">
          <p className="text-neutral-60 sm:body-medium-14 body-regular-10 order-3 sm:order-1">
            © 2022 Monito. All rights reserved.
          </p>
          <img
            className="h-10 w-[115px] order-1 sm:order-2 mb-8 sm:mb-0"
            src={LOGO}
            alt=""
          />
          <div className="flex sm:gap-x-10 gap-x-3  order-2 sm:order-3 mb-2 sm:mb-0">
            <p className="text-neutral-60 sm:body-medium-14 body-medium-12 hover:underline">
              Terms Of Service
            </p>
            <p className="text-neutral-60 sm:body-medium-14 body-medium-12 hover:underline">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
