/** @format */
"use client";
import { useRouter } from "next/navigation";
import classes from "./table.module.css"
import React from "react";

export default function TableRow({ data, id }) {
  console.log(data);
  const router = useRouter();
  // const id = data[0];
  const requestStatus = data[2];
  const handleClick = () => {
    console.log(data);
    router.push(`/admin/user/${id}`);
  };

  return (
    <tr
      className={requestStatus === "Pending" ? `${classes.pending}` : null}
      onClick={handleClick}
    >
      {data.map((item) => {
        return <td key={item}>{item}</td>;
      })}
    </tr>
  );
}
