"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
type projectDetailsType = {
  id: string;
  title: string;
  titleTwo: string;
  subtitle: string;
  descOne: string;
  descTwo: string;
  descThree: string;
  descFour: string;
  descFive: string;
  rooms: string;
  time: string;
  location: string;
  images: string[];
};
type projectProps = {
  project: projectDetailsType;
};
const ProjectDetails = ({ project }: projectProps) => {
  const imageRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    tl.fromTo(".left", { x: "110%" }, { duration: 0.1, x: "0%" });

    ScrollTrigger.create({
      animation: tl,
      trigger: ".wrapper",
      start: "top top",

      toggleActions: "play reverse play reverse",
      scrub: true,
    });
    ScrollTrigger.create({
      animation: tl,
      trigger: ".wrapperTwo",

      toggleActions: "play reverse play reverse",
      scrub: true,
    });
  });
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="relative text-white">
        <Image
          src={project.images[0]}
          alt={project.title}
          width={1000}
          height={1000}
          className="w-screen h-[90vh] object-cover"
        />
        <div className="top-0 absolute w-screen h-[90vh] bg-[#010003]/40 "></div>
        <h2 className="absolute  left-1/2 top-2 md:top-4 -translate-x-1/2 font-bebasNeue uppercase text-lg md:text-xl lg:text-2xl tracking-wide">
          {project.title}
        </h2>
        <h4 className="absolute left-1/2 top-1/2 w-full text-center -translate-x-1/2 -translate-y-1/2 uppercase font-bebasNeue text-5xl lg:text-7xl xl:text-8xl tracking-wide">
          {project.rooms}
        </h4>
        <p className="absolute px-5 text-center w-full  text-sm md:text-base left-1/2 top-[60%] md:top-[62%] -translate-x-1/2 -translate-y-1/2  font-montserrat text-bg tracking-wide">
          {project.subtitle}
        </p>
      </div>
      <div className="max-w-[1440px] mx-auto  wrapper px-5 md:px-10 lg:px-14 py-5 md:py-10 lg:py-14 flex flex-col md:flex-row gap-7 justify-between items-start">
        <div className="flex flex-col gap-2 md:gap-5">
          <h3 className="font-bebasNeue uppercase text-3xl md:text-5xl lg:text-7xl w-full md:w-1/3 tracking-wide">
            {project.title}
          </h3>
          <div className="flex font-montserrat flex-col text-sm md:text-base gap-2 md:w-3/4 ">
            <p className="">{project.descOne}</p>
            <p className="">{project.descTwo}</p>
          </div>
        </div>
        <div ref={imageRef} className="w-3/4 left ">
          <Image
            src={project.images[1]}
            alt={project.title}
            width={1000}
            height={1000}
          />
        </div>
      </div>

      <Image
        src={project.images[2]}
        alt={project.title}
        width={1000}
        height={1000}
        className="w-screen md:h-screen object-cover"
      />
      <div className="flex w-full md:flex-row gap-3 md:gap-5 pt-3 md:pt-5">
        <Image
          src={project.images[3]}
          alt={project.title}
          width={1000}
          height={1000}
          className="w-1/2"
        />{" "}
        <Image
          src={project.images[4]}
          alt={project.title}
          width={1000}
          height={1000}
          className="w-1/2"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-3 md:gap-5 py-10 md:py-20 px-5 ">
        <Image
          src={project.images[5]}
          alt={project.title}
          width={1000}
          height={1000}
          className="w-[270px] "
        />
        <p className="font-montserrat text-sm md:text-base md:w-1/3 text-center mx-auto">
          {project.descThree}
        </p>
      </div>
      <Image
        src={project.images[6]}
        alt={project.title}
        width={1000}
        height={1000}
        className="w-screen md:h-screen object-cover"
      />
      <div className="wrapperTwo max-w-[1440px] mx-auto  px-5 md:px-10 lg:px-14 py-5 md:py-10 lg:py-14 flex gap-7 flex-col md:flex-row justify-between items-start">
        <div className="flex flex-col gap-1 md:gap-2">
          <h3 className="font-bebasNeue uppercase text-3xl md:text-5xl lg:text-6xl w-full md:w-1/2 tracking-wide">
            {project.titleTwo}
          </h3>
          <div className="flex flex-col gap-5 md:gap-10 md:w-3/4 ">
            <p className="text-sm md:text-base font-montserrat">
              {project.descFour}
            </p>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col md:gap-2">
                <p className="font-bebasNeue text-xl md:text-2xl">Location</p>
                <p className="font-montserrat text-sm md:text-base capitalize">
                  {project.location}
                </p>
              </div>
              <div className="flex flex-col md:gap-2">
                <p className="font-bebasNeue uppercase text-xl md:text-2xl">
                  project Time
                </p>
                <p className="font-montserrat text-sm md:text-base  capitalize">
                  {project.time}
                </p>
              </div>
              <div className="flex flex-col md:gap-2">
                <p className="font-bebasNeue uppercase text-xl md:text-2xl">
                  Rooms
                </p>
                <p className="font-montserrat text-sm md:text-base  capitalize">
                  {project.rooms}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/4 left">
          <Image
            src={project.images[7]}
            alt={project.title}
            width={1000}
            height={1000}
            className=""
          />
        </div>
      </div>
      <div className="grid grid-cols-2 w-screen gap-3 pb-3 md:gap-5 md:pb-5">
        <Image
          src={project.images[8]}
          alt={project.title}
          width={1000}
          height={1000}
          className="w-full"
        />{" "}
        <Image
          src={project.images[9]}
          alt={project.title}
          width={1000}
          height={1000}
          className="w-full"
        />
        <Image
          src={project.images[10]}
          alt={project.title}
          width={1000}
          height={1000}
          className="w-full"
        />
        <Image
          src={project.images[11]}
          alt={project.title}
          width={1000}
          height={1000}
          className="w-full"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-3 md:gap-5 py-10 md:py-20 px-5 ">
        <Image
          src={project.images[12]}
          alt={project.title}
          width={1000}
          height={1000}
          className="w-[270px] "
        />
        <p className="font-montserrat text-sm md:text-base md:w-1/3 text-center mx-auto">
          {project.descFive}
        </p>
      </div>
    </div>
  );
};

export default ProjectDetails;
