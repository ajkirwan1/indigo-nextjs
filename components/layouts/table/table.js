/** @format */
"use client";
import { useState } from "react";
import TableHeadItem from "./table-head-item";
import TableRow from "./table-row";
import classes from "./table.module.css";

export default function Table({ theadData, tbodyData, customClass }) {
  const [bodyData, setBodyData] = useState([...tbodyData]);
  const [ascending, setAscending] = useState({
    columnName: "Date of request",
    ascending: true,
  });

  const handleSort = (headerItem) => {
    console.log(headerItem);
    // console.log(tbodyData)
    console.log(bodyData);

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

    console.log(ascending);
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
          {tbodyData.map((item) => {
            return (
              <TableRow
                id={item.userId ?? item.id}
                key={item.userId ?? item.id}
                data={item.items}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}
