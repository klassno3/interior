import React from "react";
import Input from "@/components/Input";
import Image from "next/image";
import Map from "../../../public/map.png";
const page = () => {
  return (
    <div className="flex flex-col items-start gap-5 md:gap-10 py-28 md:py-40 px-5 md:px-10 lg:px-14">
      <h2 className="font-bebasNeue uppercase text-3xl md:text-4xl tracking-wide">
        Let&apos;s <span className="text-primary">talk</span>
      </h2>
      <div className="flex flex-col gap-10 md:flex-row justify-between w-full">
        <div className="flex md:w-1/2 flex-col gap-10">
          <div className="w-full ">
            <Image src={Map} alt="" />
          </div>
          <div className="font-montserrat font-light flex gap-20  text-sm md:text-lg">
            <div className="uppercase tracking-wide ">Contact</div>
            <div className="">
              <p className="tracking-wide">info@enovo.com</p>
              <p className="tracking-wide">+301 210 4505</p>
            </div>
          </div>
          <div className="font-montserrat font-light flex gap-20 text-sm md:text-lg ">
            <div className="uppercase tracking-wide">address</div>
            <div className="">
              <p className="tracking-wide">4, bakopoulou street,</p>
              <p className="tracking-wide">154 51 neo psychiko, athens</p>
            </div>
          </div>
          <div className="w-3/4 hidden md:flex">
            <Image src={Map} alt="" />
          </div>
        </div>
        <form className="md:w-1/2 flex flex-col items-center gap-10 font-montserrat">
          <Input title="full name" type="text" />
          <Input title="Email" type="email" />
          <Input title="phone number" type="tel" />
          <Input title="message" type="textarea" />
          <button
            className="bg-foreground text-sm md:text-base text-background py-2 md:py-2.5 px-7 md:px-10 uppercase tracking-wide"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
