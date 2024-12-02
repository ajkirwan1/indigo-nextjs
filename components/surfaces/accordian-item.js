"use client";
import React, { useRef, useState } from "react";

import classes from "./accordian.module.css";
import { display, height } from "@mui/system";

export default function AccordionItem({ header, content, isOpen, onClick }) {
  // const [setActive, setActiveState] = useState("");
  const contentHeight = useRef(null);
  // const height = contentHeight.current.scrollHeight;

  return (
    <div className={classes.accordionSection}>
      <button
        className={
          isOpen
            ? `${classes.accordion} ${classes.active}`
            : `${classes.accordion}`
        }
        onClick={onClick}
      >
        <div className={classes.accordionTitle}>{header}</div>
      </button>
      <div
        className={isOpen ? `${classes.accordionContent}` : `${classes.closed}`}
        ref={contentHeight}
        // style={
        //   isOpen
        //     ? { height: contentHeight.current.scrollHeight }
        //     : { display: "none" }
        // }
        // className={classes.accordionText}
        // dangerouslySetInnerHTML={{ __html: content }}
      >
        {content}
      </div>
    </div>
  );
}
