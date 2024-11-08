"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import ImageOne from "../../public/image 1.jpg";
import ImageTwo from "../../public/image 2.jpg";
import ImageThree from "../../public/image 3.jpg";
export default function HeroImage() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    gsap.from(".wrapper", { duration: 1, opacity: 0 });
    tl.fromTo(".wrapper", { scale: 1 }, { scale: 1.05 });
    tl.fromTo(".hero", { x: "110%" }, { x: "0%" }, "-=0.4");

    ScrollTrigger.create({
      animation: tl,
      trigger: ".wrapper",
      start: "top top",
      pinSpacing: true,

      pin: true,
      toggleActions: "play reverse play reverse",
      scrub: true,
    });
  });
  return (
    <div className="wrapper  bgImage w-full h-full md:h-screen py-5 z-10 mt-10 ">
      <div className="hero max-w-[1440px] h-full flex flex-col items-start md:flex-row gap-7 md:gap-5 lg:gap-10 justify-center w-11/12 m-auto">
        <div className="bg-background  px-4 py-4 w-[90%] md:w-1/3 flex flex-col gap-3 items-center">
          <Image
            src={ImageOne}
            alt="Image Two"
            className="object-cover h-[150px] md:h-[200px]"
          />
          <p className="text-foreground uppercase font-montserrat text-xs md:text-sm text-center object-cover">
            Designing Dreams, Transforming Spaces
          </p>
        </div>
        <div className="bg-background px-4 py-4 w-[90%] md:w-1/3 flex flex-col gap-3 items-center">
          <Image
            src={ImageTwo}
            alt="Image Two"
            className="object-cover  h-[150px] md:h-[200px]"
          />
          <p className="text-foreground uppercase font-montserrat text-xs md:text-sm text-center object-cover">
            Elevate Your Environment, Designing Beyond Imagination
          </p>
        </div>
        <div className="bg-background px-4 py-4 w-[90%] md:w-1/3 flex flex-col gap-3 items-center">
          <Image
            src={ImageThree}
            alt="Image Two"
            className="object-cover  h-[150px] md:h-[200px]"
          />
          <p className="text-foreground uppercase font-montserrat text-xs md:text-sm text-center">
            Where Vision Meets Reality, Designing Your World
          </p>
        </div>
      </div>
    </div>
  );
}
