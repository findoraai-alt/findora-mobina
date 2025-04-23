"use client";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle/ThemeToggle";
import Link from "next/link";
import LogoBlack from "@/../public/images/findora_logo_black.png";
import LogoWhite from "@/../public/images/findora_logo_white.png";
import Image from "next/image";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { RiHome2Line } from "react-icons/ri";
import { GoGear, GoPeople } from "react-icons/go";
import { BsSearch } from "react-icons/bs";
import { TbHeartbeat, TbMenu2 } from "react-icons/tb";
import { SiGooglelens } from "react-icons/si";
import { FaRegLightbulb } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";

const Links = [
  { id: 1, title: "Home", icon: RiHome2Line, url: "/" },
  {
    id: 2,
    title: "Solutions",
    icon: FaRegLightbulb,
    children: [
      {
        id: "dana",
        title: "DANA - AI Companion",
        icon: TbHeartbeat,
        url: "/dana",
      },
      {
        id: "arta",
        title: "ARTA - Deepfake Detection",
        icon: SiGooglelens,
        url: "/arta",
      },
    ],
  },
  { id: 3, title: "Enterprise", icon: GoGear, url: "/enterprise" },
  { id: 4, title: "Discover", icon: BsSearch, url: "/discover" },
  { id: 5, title: "About", icon: GoPeople, url: "/about" },
  { id: 6, title: "Newsroom", icon: IoNewspaperOutline, url: "/newsroom" },
  { id: 7, title: "Contact", icon: FiPhone, url: "/contact" },
];

const Navbar = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [openSolutionsDesktop, setOpenSolutionsDesktop] = useState(false);
  const [openSolutionsMobile, setOpenSolutionsMobile] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);

  const currentPage = (() => {
    if (pathname === "/dana" || pathname === "/arta") {
      const solutionsLink = Links.find((link) => link.title === "Solutions");
      return {
        title: "Solutions",
        icon: solutionsLink?.icon || TbMenu2,
      };
    }
    return (
      Links.find((link) => link.url === pathname) || {
        title: "Menu",
        icon: TbMenu2,
      }
    );
  })();

  const toggleDropDown = () => setShowDropDown((prev) => !prev);
  const toggleDropDownDesktop = () => setOpenSolutionsDesktop((prev) => !prev);

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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleClickOutsideSolutions = (event: MouseEvent) => {
      if (
        solutionsRef.current &&
        !solutionsRef.current.contains(event.target as Node)
      ) {
        setOpenSolutionsDesktop(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideSolutions);
    return () =>
      document.removeEventListener("mousedown", handleClickOutsideSolutions);
  }, []);

  useEffect(() => {
    // Close mobile Solutions dropdown when main dropdown closes
    if (!showDropDown) {
      setOpenSolutionsMobile(false);
    }
  }, [showDropDown]);

  return (
    <div className="border-b-2 border-[#e8e9f3] dark:border-black">
      <div className="px-4 md:px-8 py-3">
        <div className="flex justify-between items-center gap-4">
          <div>
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

          {/* Desktop Menu */}
          <div className=" hidden xl:flex items-center bg-[#f0f0fc] dark:bg-[#111828] dark:text-white p-2 border-2 border-[#e7e7f2] shadow-inner rounded-full">
            {Links.map((link) =>
              link.children ? (
                <div className="relative" key={link.id} ref={solutionsRef}>
                  <button
                    className={`flex items-center gap-1 py-3 px-5 rounded-full hover:bg-[#f9fafc] dark:hover:bg-[#202938] ${
                      pathname === "/dana" || pathname === "/arta"
                        ? "bg-[#f9fafc] dark:bg-[#202938] shadow-md"
                        : ""
                    }`}
                    onClick={toggleDropDownDesktop}
                  >
                    <link.icon />
                    {link.title}
                    {openSolutionsDesktop ? (
                      <MdOutlineKeyboardArrowUp />
                    ) : (
                      <MdOutlineKeyboardArrowDown />
                    )}
                  </button>

                  {openSolutionsDesktop && (
                    <div className="absolute top-full left-0 right-0 flex flex-col bg-white dark:bg-gray-800 shadow-md rounded-md z-50 mt-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.id}
                          href={child.url}
                          className={` ${
                            pathname === child.url &&
                            "bg-gray-100 dark:bg-gray-900"
                          } px-2 py-2 text-sm hover:bg-gray-200 dark:hover:bg-black first:rounded-t-md last:rounded-b-md flex items-center gap-2`}
                          onClick={() => setOpenSolutionsDesktop(false)}
                        >
                          <child.icon size={20} />
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.id}
                  className={`${
                    pathname === link.url &&
                    " bg-[#f9fafc] dark:bg-[#202938] shadow-md"
                  } flex items-center gap-2 hover:bg-[#f9fafc] dark:hover:bg-[#202938] py-3 px-5 rounded-full`}
                  href={link.url}
                >
                  <link.icon size={20} />
                  {link.title}
                </Link>
              )
            )}
          </div>

          {/* Mobile Dropdown */}
          <div className="flex flex-col-reverse xl:flex-row items-center justify-center gap-4">
            <div
              className="relative block xl:hidden bg-[#f9fafc] dark:bg-[#111828] py-3 px-3 rounded-full shadow-md"
              ref={dropdownRef}
            >
              <button
                onClick={toggleDropDown}
                className="flex items-center gap-2"
              >
                {currentPage.icon && <currentPage.icon className="w-5 h-5" />}
                <span>{currentPage.title}</span>
                {showDropDown ? (
                  <MdOutlineKeyboardArrowUp />
                ) : (
                  <MdOutlineKeyboardArrowDown />
                )}
              </button>

              {showDropDown && (
                <div className="flex flex-col gap-2 absolute top-14 left-0 bg-[#f9fafc] dark:bg-[#111828] rounded-2xl shadow-md z-[100]">
                  {Links.map((link) => {
                    if (link.children) {
                      return (
                        <div key={link.id}>
                          <button
                            className="flex w-full justify-between items-center px-4 py-2"
                            onClick={() =>
                              setOpenSolutionsMobile(!openSolutionsMobile)
                            }
                          >
                            <span className="flex items-center gap-2">
                              <link.icon />
                              {link.title}
                            </span>
                            {openSolutionsMobile ? (
                              <MdOutlineKeyboardArrowUp />
                            ) : (
                              <MdOutlineKeyboardArrowDown />
                            )}
                          </button>

                          {openSolutionsMobile && (
                            <div className="pl-8 flex flex-col">
                              {link.children.map((child) => (
                                <Link
                                  key={child.id}
                                  href={child.url}
                                  className="py-2 flex items-center gap-2 text-xs"
                                  onClick={() => setShowDropDown(false)}
                                >
                                  <child.icon size={20} />
                                  {child.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    } else {
                      return (
                        <Link
                          key={link.id}
                          href={link.url}
                          className="flex items-center gap-2 px-4 py-2"
                          onClick={() => setShowDropDown(false)}
                        >
                          <link.icon />
                          {link.title}
                        </Link>
                      );
                    }
                  })}
                </div>
              )}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
