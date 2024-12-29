/** @format */
"use client";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import classes from "./table.module.css";
import React from "react";

export default function TableRow({ data, id }) {

  const pathName = usePathname();
  const router = useRouter();

  const requestStatus = data.propertyAccess;
  const handleClick = () => {
    router.push(`${pathName}/${id}`);
  };

  delete data.userId

  const dataArray = Object.values(data)

  return (
    <tr
      className={requestStatus === "Pending" ? `${classes.pending}` : null}
      onClick={handleClick}
    >
      {dataArray.map((item, index) => {
        return <td key={index}>{item}</td>;
      })}
    </tr>
  );
}
