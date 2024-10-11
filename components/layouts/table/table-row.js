/** @format */
"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function TableRow({ data }) {
  const router = useRouter();
  const id = data[0];
  const handleClick = () => {
    console.log(data[0]);
    router.push(`/admin/user/${id}`);
  };

  return (
    <tr onClick={handleClick}>
      {data.map((item) => {
        return <td key={item}>{item}</td>;
      })}
    </tr>
  );
}
