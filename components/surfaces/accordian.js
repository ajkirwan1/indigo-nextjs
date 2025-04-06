"use client";
import { useState } from "react";
import AccordionItem from "./accordian-item";
import classes from "./accordian.module.css";

export default function AccordionPersonal({ data }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    // console.log(index);
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={classes.container}>
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          header={item.header}
          content={item.content}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
}
