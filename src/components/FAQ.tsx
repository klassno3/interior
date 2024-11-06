import React from "react";
import Accordion from "./Accordion";
const FAQ = () => {
  const items = [
    {
      id: "01",
      label: "Meeting & Briefing",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ea asperiores quo quasi nesciunt provident accusantium reiciendis excepturi numquam molestias necessitatibus temporibus dolores, et eveniet sequi impedit assumenda ex maiores.",
    },
    {
      id: "02",
      label: "Brainstom",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ea asperiores quo quasi nesciunt provident accusantium reiciendis excepturi numquam molestias necessitatibus temporibus dolores, et eveniet sequi impedit assumenda ex maiores.",
    },

    {
      id: "03",
      label: "Design & Visualize",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ea asperiores quo quasi nesciunt provident accusantium reiciendis excepturi numquam molestias necessitatibus temporibus dolores, et eveniet sequi impedit assumenda ex maiores.",
    },
    {
      id: "04",
      label: "Build & install",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ea asperiores quo quasi nesciunt provident accusantium reiciendis excepturi numquam molestias necessitatibus temporibus dolores, et eveniet sequi impedit assumenda ex maiores.",
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
