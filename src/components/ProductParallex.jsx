import Link from "next/link";
import React from "react";
import { TbArrowNarrowRight } from "react-icons/tb";

const ProductParallex = () => {
  return (
    <div className="flex flex-col text-white ">
      <div className="bgimg-1 w-screen h-[30vh] sm:h-[50vh] md:h-screen px-5 md:px-10 lg:px-14 py-5 md:py-20">
        <div className="max-w-[1440px] mx-auto flex flex-col items-start gap-4">
          <span className="font-montserrat text-lg">01</span>
          <h1 className="font-bebasNeue text-5xl md:text-7xl lg:text-8xl  w-1/3">
            Summersby House
          </h1>
          <Link
            href="/project/summersby-house"
            className=" cursor-pointer  font-montserrat text-lg flex gap-2 hover:gap-4 uppercase items-center transition-all duration-500"
          >
            <span className="">see more </span>
            <TbArrowNarrowRight className="text-3xl" />
          </Link>
        </div>
      </div>
      <div className="bgimg-2 w-screen h-[30vh]  sm:h-[50vh] md:h-screen px-5 md:px-10 lg:px-14 py-5 md:py-20 ">
        <div className="max-w-[1440px] mx-auto flex flex-col items-start gap-4">
          <span className="font-montserrat text-lg">02</span>
          <h1 className="font-bebasNeue text-5xl md:text-7xl lg:text-8xl w-1/3">
            Rolling Lawns
          </h1>
          <Link
            href="/project/rolling-lawns"
            className=" cursor-pointer  font-montserrat text-lg flex gap-2 hover:gap-4 uppercase items-center transition-all duration-500"
          >
            <span className="">see more </span>
            <TbArrowNarrowRight className="text-3xl" />
          </Link>
        </div>
      </div>
      <div className="bgimg-3 w-screen h-[30vh] sm:h-[50vh] md:h-screen px-5 md:px-10 lg:px-14 py-5 md:py-20 ">
        <div className="max-w-[1440px] mx-auto flex flex-col items-start gap-4">
          <span className="font-montserrat text-lg">03</span>
          <h1 className="font-bebasNeue text-5xl md:text-7xl lg:text-8xl w-1/3">
            Penthouse 501
          </h1>
          <Link
            href="/project/penthouse-501"
            className=" cursor-pointer  font-montserrat text-lg flex gap-2 hover:gap-4 uppercase items-center transition-all duration-500"
          >
            <span className="">see more </span>
            <TbArrowNarrowRight className="text-3xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductParallex;
