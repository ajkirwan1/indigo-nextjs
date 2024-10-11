/** @format */

import React from "react";

export default function TableRow({ data }) {
  return (
    <tr>
      {data.map((item) => {
        return <td key={item}>{item}</td>;
      })}
    </tr>
  );
}
