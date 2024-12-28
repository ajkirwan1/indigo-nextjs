/** @format */
"use client";
import { useState } from "react";
import TableHeadItem from "./table-head-item";
import TableRow from "./table-row";
import classes from "./table.module.css";

export default function Table({
  theadData,
  tbodyData,
  bodyData2,
  customClass,
}) {
  const [bodyData, setBodyData] = useState([...tbodyData]);
  const [ascending, setAscending] = useState({
    columnName: "Date of request",
    ascending: true,
  });


  const sorted = [...bodyData2].sort((a, b) => b.name.localeCompare(a.name));
  const sorted2 = [...bodyData2].sort((a, b) => a.name.localeCompare(b.name));

  // const [first, ...rest] = sorted
  // console.log(rest)

  const handleSort = (headerItem) => {
    // console.log(headerItem);
    // console.log(tbodyData)
    // console.log(bodyData);

    if (headerItem == ascending.columnName) {
      setAscending({ columnName: headerItem, ascending: !ascending.ascending });
    } else {
      if (headerItem == "Name") {
        setAscending({ columnName: "Name", ascending: true });
      } else if (headerItem == "Email") {
        setAscending({ columnName: "Email", ascending: true });
      } else if (headerItem == "Property access") {
        setAscending({
          columnName: "Property access",
          ascending: true,
        });
      } else if (headerItem == "Consulting access") {
        setAscending({
          columnName: "Consulting access",
          ascending: true,
        });
      } else if (headerItem == "Date of request") {
        setAscending({
          columnName: "Date of request",
          ascending: true,
        });
      } else {
        setAscending({
          columnName: "Date of request",
          ascending: true,
        });
      }
    }
  };

  return (
    <>
      <table className={classes[customClass]}>
        <thead>
          <tr>
            {theadData.map((h) => {
              return (
                <TableHeadItem
                  ascending={ascending}
                  handleSort={handleSort}
                  key={h}
                  item={h}
                />
              );
            })}
          </tr>
        </thead>
        <tbody>
          {/* {tbodyData.map((item, index) => {
            return (
              <TableRow
                id={item.userId ?? item.id}
                key={index}
                data={item.items}
              />
            );
          })} */}
          {sorted2.map((item, index) => {
            return (
              <TableRow
                id={item.userId}
                key={index}
                data={item}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}
