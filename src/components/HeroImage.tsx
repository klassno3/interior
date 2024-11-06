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
    <div className="wrapper  bgImage h-[1000px] md:h-screen  z-10 mt-10 ">
      <div className="flex flex-col md:flex-row gap-7 md:gap-5 lg:gap-10 justify-center items-center hero w-11/12 mx-auto">
        <div className="bg-background px-4 py-4 h-1/2 w-4/5 md:w-1/3 flex flex-col gap-3 items-center">
          <Image
            src={ImageOne}
            alt="Image Two"
            className="h-[200px] object-cover"
          />
          <p className="text-foreground uppercase font-montserrat text-xs md:text-sm text-center object-cover">
            Interior design as in the picture and even better
          </p>
        </div>
        <div className="bg-background px-4 py-4 h-1/2 w-4/5 md:w-1/3 flex flex-col gap-3 items-center">
          <Image
            src={ImageTwo}
            alt="Image Two"
            className="h-[200px] object-cover"
          />
          <p className="text-foreground uppercase font-montserrat text-xs md:text-sm  text-center">
            Interior design as in the picture and even better
          </p>
        </div>
        <div className="bg-background px-4 py-4 h-1/2 w-4/5 md:w-1/3 flex flex-col gap-3 items-center">
          <Image src={ImageThree} alt="Image Two" className="h-[200px]" />
          <p className="text-foreground uppercase font-montserrat text-xs md:text-sm text-center">
            Interior design as in the picture and even better
          </p>
        </div>
      </div>
    </div>
  );
}
