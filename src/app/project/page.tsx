import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data";
const page = () => {
  return (
    <div className="max-w-[1440px] text-foreground py-28 md:py-32 lg:py-40 px-5 md:px-10 lg:px-14 mx-auto flex flex-col gap-5 lg:gap-10">
      <h2 className="font-bebasNeue text-3xl lg:text-4xl tracking-wide uppercase">
        Project
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-3 gap-10 lg:gap-14">
        {projects.map((project) => {
          return (
            <Link
              key={project.id}
              href={`project/${project.id}`}
              className="flex flex-col gap-2 group"
            >
              <div className="relative h-[270px] md:h-[320px] overflow-hidden">
                <Image
                  src={project.images[2]}
                  alt={project.title}
                  width={1000}
                  height={1000}
                  className="h-full translate-y-0 group-hover:-translate-y-full transform-all duration-1000 "
                />
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  width={1000}
                  height={1000}
                  className=" h-full translate-y-0 group-hover:-translate-y-full group-hover:scale-y-250  transform-all duration-1000"
                />
              </div>
              <div className="font-montserrat flex flex-col gap-1">
                <p className="uppercase tracking-wide text-sm md:text-base">
                  {project.title}
                </p>
                <p className="uppercase tracking-wide font-light text-xs">
                  {project.location}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default page;
