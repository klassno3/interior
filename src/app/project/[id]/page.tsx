"use client";
import React from "react";
import { useParams } from "next/navigation";
import { projects } from "@/data";
import ProjectDetails from "@/components/projectDetails";
const Page = () => {
  const { id } = useParams();
  const project = id
    ? projects.find((project) => project.id === id )
    : null;

  return (
    <div>
      {project ? (
        <ProjectDetails project={project} />
      ) : (
        <p>Project not found</p>
      )}
    </div>
  );
};

export default Page;
