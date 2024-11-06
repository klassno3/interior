"use client";
import Link from "next/link";
import { Link as Route } from "react-scroll";
import { usePathname } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import { TbArrowNarrowRight } from "react-icons/tb";
import ThemeSwitch from "./ThemeSwitch";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };
  const pathname = usePathname();
  useEffect(() => {
    const handleNavigationClose = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    window.addEventListener("click", handleNavigationClose);
    return () => {
      window.removeEventListener("click", handleNavigationClose);
    };
  }, []);
  return (
    <div className="fixed z-50 top-0 w-full flex justify-between items-start">
      <Link
        href="/"
        className="font-montserrat font-bold my-5 ml-5 md:ml-10 lg:ml-14 "
      >
        enovo
        <span className="font-light">/interior</span>
      </Link>
      <div className="flex items-start gap-7 md:gap-10">
        {!isOpen && <ThemeSwitch />}
        <div
          ref={navRef}
          className={` ${
            isOpen
              ? pathname === "/"
                ? "w-[350px] h-[440px]"
                : "w-[350px] h-[320px]"
              : "mr-5 md:mr-10 lg:mr-14 my-5"
          } bg-foreground flex flex-col gap-10 `}
        >
          <button
            onClick={handleMenuClick}
            className={`${
              isOpen ? "pr-[40px] md:pr-[70px] py-7" : " px-5 md:px-6 py-2 "
            } overflow-hidden group text-background uppercase tracking-wider text-sm flex flex-col items-end justify-center`}
          >
            {isOpen ? "Close" : "menu"}
          </button>

          {isOpen && (
            <div className="text-background  font-montserrat pl-7">
              <div className="flex text-background text-xl md:text-2xl items-start flex-col gap-7 overflow-hidden">
                <Link
                  href="/"
                  onClick={handleMenuClick}
                  className="flex gap-2 -translate-x-8 hover:translate-x-0  items-center transition-all duration-500"
                >
                  <TbArrowNarrowRight className="text-3xl" />
                  <span className="">Home</span>
                </Link>
                {pathname === "/" && (
                  <Route
                    to="about"
                    smooth={true}
                    offset={20}
                    onClick={handleMenuClick}
                    className="flex gap-2 cursor-pointer -translate-x-8 hover:translate-x-0  items-center transition-all duration-500"
                  >
                    <TbArrowNarrowRight className="text-3xl" />
                    <span className="">About Us</span>
                  </Route>
                )}
                <Link
                  href="/project"
                  onClick={handleMenuClick}
                  className="flex gap-2 -translate-x-8 hover:translate-x-0  items-center transition-all duration-500"
                >
                  <TbArrowNarrowRight className="text-3xl" />
                  <span className="">Projects</span>
                </Link>
                {pathname === "/" && (
                  <Route
                    to="testimonial"
                    smooth={true}
                    offset={20}
                    onClick={handleMenuClick}
                    className="flex cursor-pointer gap-2 -translate-x-8 hover:translate-x-0  items-center transition-all duration-500"
                  >
                    <TbArrowNarrowRight className="text-3xl" />
                    <span className="">Testimonials</span>
                  </Route>
                )}
                <Link
                  href="/contact"
                  onClick={handleMenuClick}
                  className="flex gap-2 -translate-x-8 hover:translate-x-0  items-center transition-all duration-500"
                >
                  <TbArrowNarrowRight className="text-3xl" />
                  <span className="">Contact Us</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
