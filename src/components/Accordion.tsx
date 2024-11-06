import { useState } from "react";

type itemsElType = {
  id: string;
  label: string;
  content: string;
};
type itemsType = {
  items: itemsElType[];
};

function Accordion({ items }: itemsType) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex: number) => {
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
  };

  const renderedItems = items.map((item: itemsElType, index: number) => {
    const isExpanded = index === expandedIndex;
    const icon = (
      <span className="text-2xl">
        {isExpanded ? <span>-</span> : <span>+</span>}
      </span>
    );
    const content = isExpanded
      ? `${item.content.slice(0, item.content.length)}`
      : `${item.content.slice(0, 100)} .....`;

    return (
      <div
        key={item.id}
        className="flex flex-col md:flex-row gap-3  font-montserrat justify-start lg:justify-end items-start border-foreground border-b-[1px] py-5"
      >
        <div className="cursor-pointer" onClick={() => handleClick(index)}>
          <div className="flex gap-10 md:gap-40 tracking-wide text-lg">
            <div className="text-sm md:text-base">{item.id}</div>
            <div className="text-sm md:text-base uppercase w-[220px] ">
              {item.label}
            </div>
          </div>
        </div>

        <div className="flex md:pl-20 gap-5 justify-start lg:justify-end items-start font-light text-sm md:text-base text-foreground">
          <div className="">{content}</div>
          <div className="cursor-pointer" onClick={() => handleClick(index)}>
            {icon}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="max-w-[1440px] mx-auto w-screen px-5 md:px-10 lg:px-14 ">
      <div className="border-foreground border-t "></div>
      {renderedItems}
    </div>
  );
}

export default Accordion;
