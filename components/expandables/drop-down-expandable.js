/** @format */
"use client";

import classes from "./drop-down-expandable.module.css";
import Image from "next/image";
import expandIcon from "/public/images/icons/icons8-expand-arrow-50.png";

export default function DropDownExpandable({ children, expandableOpen, setExpandableOpen }) {

  const handleExpandable = () => {
    console.log("FIRE")
    console.log("typeof setExpandableOpen:", typeof setExpandableOpen); // 🔍 debug
    setExpandableOpen((val) => !val);
  };

  return (
    <>
      <div className={classes.expandableContainer} onClick={handleExpandable}>
        <h2>{children}</h2>
        {expandableOpen ? (
          <Image
            src={expandIcon}
            style={{ transform: "rotate(180deg)" }}
            alt="An icon representing hiding filter information"
            width={25}
            height={25}
          />
        ) : (
          <Image
            src={expandIcon}
            alt="An icon representing hiding filter information"
            width={25}
            height={25}
          />
        )}
      </div>
    </>
  );
}
