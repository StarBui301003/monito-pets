import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { cn } from "@/lib/utils";

interface IProps {
  className?: string;
}

export const SocialMediaIcon = ({ className }: IProps) => {
  return (
    <>
      <Link
        to="/"
        className={cn(
          " text-neutral-100 hover:scale-105 transition-all",
          className
        )}
      >
        <FaFacebook className="sm:size-6 size-5" />
      </Link>
      <Link
        to="/"
        className={cn(
          " text-neutral-100 hover:scale-105 transition-all",
          className
        )}
      >
        <FaTwitter className="sm:size-6 size-5" />
      </Link>
      <Link
        to="/"
        className={cn(
          " text-neutral-100 hover:scale-105 transition-all",
          className
        )}
      >
        <FaInstagram className="sm:size-6 size-5" />
      </Link>
      <Link
        to="/"
        className={cn(
          " text-neutral-100 hover:scale-105 transition-all",
          className
        )}
      >
        <FaYoutube className="sm:size-6 size-5" />
      </Link>
    </>
  );
};
