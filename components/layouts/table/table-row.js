/** @format */
"use client";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import classes from "./table.module.css";
import React from "react";

export default function TableRow({ data, id }) {
  const pathName = usePathname();

  const router = useRouter();
  const requestStatus = data[2];
  const handleClick = () => {
    router.push(`${pathName}/${id}`);
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
