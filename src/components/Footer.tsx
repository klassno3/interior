"use client";
import Link from "next/link";
import { Link as Route } from "react-scroll";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { usePathname } from "next/navigation";
const Footer = () => {
  const pathname = usePathname();
  return (
    <div className="bg-[#252525]  py-5 md:py-10  px-5 md:px-10 lg:px-14 text-white">
      <div className="flex gap-5 md:gap-14 lg:gap-20 font-montserrat uppercase text-sm md:text-base lg:text-lg">
        <Link href="/" className="">
          home
        </Link>
        <Link href="/project" className="">
          Project
        </Link>
        {pathname === "/" && (
          <Route to="about" smooth={true} className="cursor-pointer">
            About us
          </Route>
        )}
        <Link href="/contact" className="">
          contact
        </Link>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between md:items-end gap-14 pt-14 md:pt-20">
        <Link
          href="/"
          className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl leading-[.7] font-bebasNeue"
        >
          Enovo—interior
        </Link>
        <div className="flex flex-col gap-16 md:gap-20">
          <div className="font-montserrat font-light flex flex-col gap-2">
            <div className="uppercase underline tracking-wide  text-base lg:text-lg ">
              Interest Form
            </div>
            <p className="tracking-wide text-sm lg:text-base">
              Looking for something specific
            </p>
            <Link
              href="/contact"
              className="uppercase flex gap-2  text-sm lg:text-base hover:gap-4 transition-all duration-500 cursor-pointer items-center tracking-wider"
            >
              Contact us
              <FiArrowRight className="text-lg md:text-xl" />
            </Link>
          </div>
          <div className="flex gap-20 justify-between">
            <div className="font-montserrat font-light flex flex-col gap-2">
              <div className="uppercase underline tracking-wide  text-base lg:text-lg ">
                Social
              </div>
              <p className="tracking-wide cursor-pointer text-sm lg:text-base">
                Instagram
              </p>
              <p className="tracking-wide cursor-pointer text-sm lg:text-base">
                Linkedin
              </p>
              <p className="tracking-wide cursor-pointer text-sm lg:text-base">
                Facebook
              </p>
            </div>
            <div className="font-montserrat font-light flex flex-col gap-2">
              <div className="uppercase underline tracking-wide text-base lg:text-lg ">
                Contact info
              </div>
              <a
                href="mailto:info@enovo.com"
                className="tracking-wide cursor-pointer text-sm lg:text-base"
              >
                info@enovo.com
              </a>
              <a
                href="tel:+3012104505"
                className="tracking-wide cursor-pointer text-sm lg:text-base"
              >
                +301 210 4505
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-5 font-thin text-xs lg:text-sm justify-between pt-20  font-montserrat">
        <div className="flex gap-28 uppercase tracking-wide">
          <div className="cursor-pointer">Privacy Policy</div>
          <div className="cursor-pointer">Terms of Service</div>
        </div>
        <div className="uppercase">enovo interior design © copyright 2024</div>
      </div>
    </div>
  );
};

export default Footer;
