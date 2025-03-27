"use client";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle/ThemeToggle";
import Link from "next/link";
import NavLink from "./NavLink";
import LogoBlack from "@/../public/images/findora_logo_black.png";
import LogoWhite from "@/../public/images/findora_logo_white.png";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import Image from "next/image";
import { FiPhone } from "react-icons/fi";
import { RiHome2Line } from "react-icons/ri";
import { GlowingBtn } from "./GlowingBtn";
import { GoGear, GoPeople } from "react-icons/go";
import { BsSearch } from "react-icons/bs";

const Links = [
  { id: 1, title: "Home", icon: RiHome2Line, url: "/" },
  { id: 2, title: "Discover", icon: BsSearch, url: "/discover" },
  { id: 3, title: "Enterprise", icon: GoGear, url: "/enterprise" },
  { id: 4, title: "About", icon: GoPeople, url: "/about" },
  { id: 5, title: "Contact", icon: FiPhone, url: "/contact" },
];

const Navbar = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Find the current page title
  const currentPage = Links.find((link) => link.url === pathname) || {
    title: "Menu",
    icon: null,
  };

  // Toggle dropdown
  const toggleDropDown = () => {
    setShowDropDown((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropDown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="border-b-2 border-[#e8e9f3] dark:border-black">
      <div className="px-4 md:px-8 py-3">
        <div className="flex justify-between items-center gap-4">
          <div
            className="relative block xl:hidden bg-[#f9fafc] dark:bg-[#111828] py-3 px-3 rounded-full shadow-md"
            ref={dropdownRef}
          >
            <button
              onClick={toggleDropDown}
              className="flex items-center gap-2"
            >
              {currentPage.icon && <currentPage.icon className="w-5 h-5" />}{" "}
              {/* Icon */}
              <span>{currentPage.title}</span> {/* Title */}
              {showDropDown ? (
                <MdOutlineKeyboardArrowUp />
              ) : (
                <MdOutlineKeyboardArrowDown />
              )}
            </button>
            {showDropDown && (
              <div className="flex flex-col gap-2 absolute top-14 left-0 bg-[#f9fafc] dark:bg-[#111828] rounded-2xl shadow-md z-[100]">
                {Links.map((link) => (
                  <Link
                    key={link.id}
                    href={link.url}
                    className="flex items-center gap-2 px-4 py-2"
                    onClick={() => setShowDropDown(false)} // Close dropdown on link click
                  >
                    <link.icon />
                    {link.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className=" flex flex-col md:flex-row items-center gap-4">
            <Link href="/">
              <Image
                src={LogoBlack}
                alt="logo"
                width={80}
                height={80}
                className="block dark:hidden"
              />
              <Image
                src={LogoWhite}
                alt="logo"
                width={80}
                height={80}
                className="hidden dark:block"
              />
            </Link>
          </div>
          <div className="hidden xl:flex items-center bg-[#f0f0fc] dark:bg-[#111828] dark:text-white p-2 border-2 border-[#e7e7f2] shadow-inner rounded-full">
            {Links.map((link) => (
              <NavLink link={link} key={link.id} />
            ))}
          </div>
          <div className=" flex flex-col-reverse lg:flex-row items-center justify-center gap-4">
            <GlowingBtn />
            <div className=" flex flex-col-reverse lg:flex-col items-center gap-4">
              <ThemeToggle />
              <Link href="/demo">
                <button className=" bg-black dark:bg-white text-white dark:text-black font-medium rounded-full px-2 py-2 lg:px-4 lg:py-3 text-xs lg:hover:scale-105 transition-all duration-300 ease-in-out">
                  Request a demo
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
