/** @format */
'use client'
import React from "react";

export default function TableRow({ data }) {

    const handleClick = () => {
        console.log("CLICK")
    }

  return (
    <tr onClick={handleClick}>
      {data.map((item) => {
        return <td key={item}>{item}</td>;
      })}
    </tr>
  );
}
