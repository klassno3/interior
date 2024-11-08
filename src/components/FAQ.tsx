import React from "react";
import Accordion from "./Accordion";
const FAQ = () => {
  const items = [
    {
      id: "01",
      label: "Meeting & Briefing",
      content:
        "This initial stage involves meeting with clients to understand their needs, preferences, and budget for the project. Gathering information about the space to be designed, including measurements, existing structures, and any specific requirements.",
    },
    {
      id: "02",
      label: "Brainstom",
      content:
        "In this creative phase, ideas are generated based on the client's brief and the designer's expertise. Researching current trends, materials, and styles that align with the client's vision. Sketching rough concepts and exploring different possibilities for the space.",
    },

    {
      id: "03",
      label: "Design & Visualize",
      content:
        "Developing detailed design plans based on the approved concepts. Creating mood boards, color schemes, furniture layouts, and material selections. Utilizing software tools like CAD or 3D modeling to provide clients with visual representations of the proposed design. Presenting the designs to the client for feedback and revisions before finalizing the plans.",
    },
    {
      id: "04",
      label: "Build & install",
      content:
        "Once the design is approved, the implementation phase begins. Collaborating with contractors, vendors, and suppliers to execute the design plan. Overseeing the construction process to ensure that the design is implemented correctly and according to the specifications. Installing furniture, fixtures, and decorative elements to bring the design to life.",
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className=" flex w-full flex-col  gap-5 md:gap-10 pb-5 md:pb-10 lg:pb-20">
        <div className="uppercase font-bebasNeue text-3xl lg:text-4xl pl-5 md:pl-10 lg:pl-14 tracking-wide">
          our approach
        </div>
        <Accordion items={items} />
      </div>
    </div>
  );
};

export default FAQ;
