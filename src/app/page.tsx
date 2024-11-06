"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Service from "../../public/services.webp";
import HeroImage from "@/components/HeroImage";
import Image from "next/image";
import FAQ from "@/components/FAQ";
import Testimonial from "@/components/Testimonial";
import ProductParallex from "@/components/ProductParallex";
import Link from "next/link";
const Page = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".title",
        { y: 130 },
        { duration: 0.3, y: 0, ease: "slow", stagger: 0.05 }
      );
      tl.fromTo(
        ".subTitle",
        { y: 130 },
        { duration: 0.5, y: 0, ease: "slow", stagger: 0.05 },
        "-=0.7"
      );
      tl.fromTo(
        ".paragraph",
        {
          opacity: 0,
        },
        { duration: 0.5, opacity: 1, ease: "slow", stagger: 0.05 },
        "-=0.4"
      );
      tl.fromTo(
        ".button",
        {
          opacity: 0,
        },
        { duration: 0.5, opacity: 1, ease: "slow", stagger: 0.05 },
        "-=0.4"
      );
    },
    { scope: titleRef }
  );
  return (
    <div
      ref={titleRef}
      className="flex flex-col gap-3 justify-center items-center pt-44 "
    >
      <h3 className="flex justify-center font-montserrat uppercase  text-sm md:text-base overflow-hidden tracking-[2px]">
        <span className="subTitle">d</span>
        <span className="subTitle">e</span>
        <span className="subTitle">s</span>
        <span className="subTitle">i</span>
        <span className="subTitle">g</span>
        <span className="subTitle">n</span>
        <span className="subTitle">e</span>
        <span className="subTitle">r</span>
      </h3>
      <h1 className="flex justify-center font-bebasNeue uppercase text-4xl md:text-5xl lg:text-6xl xl:text-8xl overflow-hidden  tracking-[2px] md:tracking-[4px]">
        <span className="title">E</span>
        <span className="title">n</span>
        <span className="title">o</span>
        <span className="title">v</span>
        <span className="title">o</span>
        <span className="title">—</span>
        <span className="title">i</span>
        <span className="title">n</span>
        <span className="title">t</span>
        <span className="title">e</span>
        <span className="title">r</span>
        <span className="title">i</span>
        <span className="title">o</span>
        <span className="title">r</span>
      </h1>
      <div className="flex flex-col gap-5 items-center">
        <p className="paragraph font-montserrat text-sm w-4/5 md:w-1/2 text-center">
          {" "}
          Bright appearance of your home for a bright life Natural furniture and
          original paintings unique style of urban luxury
        </p>
        <Link
          href="/contact"
          className="button uppercase border-[1.3px] border-foreground px-10 md:px-16 py-2.5 font-montserrat text-sm md:text-lg"
        >
          Get in touch
        </Link>
      </div>
      <HeroImage />
      <div id="about" className="py-10 md:py-20">
        <div className="flex flex-col md:flex-row gap-5 md:gap-10 px-5 md:px-10 lg:px-14">
          <div className="md:w-1/2 flex flex-col gap-1 md:gap-2 md:py-10">
            <h2 className="font-bebasNeue text-3xl md:text-4xl tracking-wide">
              About us
            </h2>
            <p className="font-montserrat text-sm md:text-base ">
              We are a family-owned real estate development company based in
              Athens. Since 1955, we have been committed to delivering timeless,
              quality developments that epitomize comfort and functionality.
            </p>
          </div>
          <div className="border-l-[0.5px] border-border"></div>
          <div className="md:w-1/2 flex flex-col gap-3">
            <h4 className="font-montserrat uppercase text-base md:text-lg">
              Project Completed
            </h4>
            <div className="flex justify-between">
              <div className="flex flex-col items-center gap-1">
                <h3 className="font-bebasNeue text-4xl md:text-5xl">10+</h3>
                <p className="font-montserrat text-xs md:text-sm uppercase">
                  years
                </p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <h3 className="font-bebasNeue text-4xl md:text-5xl">56</h3>
                <p className="font-montserrat text-xs md:text-sm uppercase">
                  Project
                </p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <h3 className="font-bebasNeue text-4xl md:text-5xl">25+</h3>
                <p className="font-montserrat text-xs md:text-sm uppercase">
                  clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductParallex />
      <div className="flex flex-col gap-5 items-start px-5 md:px-10 lg:px-14 py-5 lg:py-20">
        <div className="uppercase font-bebasNeue text-3xl md:text-4xl tracking-wide">
          our services
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-20">
          <Image
            src={Service}
            alt="service"
            width={2000}
            height={2000}
            className="w-2/3 md:w-1/4"
          />
          <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 grids-row-2 md:gap-x-14 gap-x-7 md:gap-y-10 gap-y-5  font-montserrat">
            <div className="flex flex-col items-start gap-4">
              <span className="text-sm md:text-base flex justify-center items-center border border-foreground rounded-full w-5 h-5 md:w-7 md:h-7">
                1
              </span>
              <div className="flex flex-col items-start gap-2">
                <p className="text-base md:text-lg tracking-wide uppercase">
                  Interior Design
                </p>
                <p className="text-sm md:text-base ">
                  With our years of experience in designing interiors of various
                  brands and establishments in Addis Ababa, our
                  multidisciplinary team knows how to design around spaces of
                  just about every shape and size.{" "}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4">
              <span className="text-sm md:text-base flex justify-center items-center border border-foreground w-5 h-5 md:w-7 md:h-7 rounded-full ">
                2
              </span>
              <div className="flex flex-col items-start gap-2">
                <p className="text-base md:text-lg tracking-wide uppercase">
                  Interior Design
                </p>
                <p className="text-sm md:text-base ">
                  With our years of experience in designing interiors of various
                  brands and establishments in Addis Ababa, our
                  multidisciplinary team knows how to design around spaces of
                  just about every shape and size.{" "}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4">
              <span className="text-sm md:text-base flex justify-center items-center border border-foreground rounded-full w-5 h-5 md:w-7 md:h-7">
                3
              </span>
              <div className="flex flex-col items-start gap-2">
                <p className="text-base md:text-lg  tracking-wide uppercase">
                  Interior Design
                </p>
                <p className="text-sm md:text-base ">
                  With our years of experience in designing interiors of various
                  brands and establishments in Addis Ababa, our
                  multidisciplinary team knows how to design around spaces of
                  just about every shape and size.{" "}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4">
              <span className="text-sm md:text-base flex justify-center items-center border border-foreground rounded-full w-5 h-5 md:w-7 md:h-7">
                4
              </span>
              <div className="flex flex-col items-start gap-2">
                <p className="text-base md:text-lg tracking-wide uppercase">
                  Interior Design
                </p>
                <p className="text-sm md:text-base">
                  With our years of experience in designing interiors of various
                  brands and establishments in Addis Ababa, our
                  multidisciplinary team knows how to design around spaces of
                  just about every shape and size.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FAQ />
      <div className="bg-foreground my-10 lg:mb-20 py-5 md:py-10 px-5 md:px-10 lg:px-14 text-background flex flex-col gap-5 md:flex-row items-center justify-between w-screen">
        <h5 className="font-montserrat uppercase text-sm md:text-lg w-3/4 md:w-1/2">
          Are you interested in a design or have any other inquiries?
        </h5>
        <Link
          href="/contact"
          className=" text-xs md:text-lg button border-[1.3px] border-background flex items-center justify-center uppercase bg-background text-foreground md:w-24 md:h-24 w-20 h-20 font-montserrat rounded-full "
        >
          Contact
        </Link>
      </div>
      <Testimonial />
    </div>
  );
};
export default Page;
