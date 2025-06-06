import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const SideBar = () => {
  return (
    <aside className="fixed right-1 top-1/2 -translate-y-1/2 bg-white p-3 shadow-md">
      <div className="flex flex-col gap-y-6 items-center">
        <Link
          target="_blank"
          href={"https://www.facebook.com/chevalmiddleeast"}
          className="cursor-pointer "
        >
          <FaFacebookF className="text-base md:text-xl text-[#101763]" />
        </Link>
        <Link
          target="_blank"
          href={"https://www.instagram.com/chevalmiddleeast/"}
          className="cursor-pointer"
        >
          <FaInstagram className="text-base md:text-xl text-[#101763]" />
        </Link>
        <Link
          target="_blank"
          href={"https://www.linkedin.com/company/chevalmiddleeast/"}
          className="cursor-pointer"
        >
          <FaLinkedinIn className="text-base md:text-xl text-[#101763]" />
        </Link>
      </div>
    </aside>
  );
};

export default SideBar;
