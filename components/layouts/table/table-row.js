/** @format */
"use client";
import { useRouter } from "next/navigation";
import classes from "./table.module.css"
import React from "react";

export default function TableRow({ data }) {
  const router = useRouter();
  const id = data[0];
  const requestStatus = data[5];
  const handleClick = () => {
    console.log(data[0]);
    router.push(`/admin/user/${id}`);
  };

  return (
    <tr
      className={requestStatus === 0 ? `${classes.pending}` : null}
      onClick={handleClick}
    >
      {data.map((item) => {
        return <td key={item}>{item}</td>;
      })}
    </tr>
  );
}
