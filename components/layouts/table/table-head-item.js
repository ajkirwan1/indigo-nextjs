/** @format */
"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import expandIcon from "/public/images/icons/icons8-expand-arrow-100.png";
import classes from "./table.module.css";

export default function TableHeadItem({ item, handleSort, ascending }) {
  return (
    <td title={item}>
      <div className={classes.tdContainer} onClick={() => handleSort(item)}>
        <span>{item}</span>
        {ascending.columnName == item && ascending.ascending == true ? (
          <Image
            src={expandIcon}
            style={{ transform: "rotate(180deg)" }}
            alt="An icon representing hiding filter information"
            width={100}
            height={100}
          />
        ) : ascending.columnName == item && ascending.ascending == false ? (
          <Image
            src={expandIcon}
            alt="An icon representing hiding filter information"
            width={100}
            height={100}
          />
        ) : null}
      </div>
    </td>
  );
}
