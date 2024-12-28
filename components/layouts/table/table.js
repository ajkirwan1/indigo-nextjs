/** @format */
"use client";
import { useState } from "react";
import TableHeadItem from "./table-head-item";
import TableRow from "./table-row";
import classes from "./table.module.css";
import SortStringAscending from "@/utils/admin/table-sort/string-sort-ascending";
import SortStringDescending from "@/utils/admin/table-sort/string-sort-descending";

export default function Table({
  theadData,
  tbodyData,
  bodyData2,
  customClass,
}) {
  const [bodyData, setBodyData] = useState([...bodyData2]);
  const [ascending, setAscending] = useState({
    columnName: "Date of request",
    ascending: true,
  });

  // const sorted = [...bodyData2].sort((a, b) => b.name.localeCompare(a.name));
  // const sorted2 = [...bodyData2].sort((a, b) => a.name.localeCompare(b.name));

  const handleSort = (headerItem) => {
    console.log(headerItem);
    console.log(bodyData);
    let tableData;

    if (headerItem == ascending.columnName) {
      setAscending({ columnName: headerItem, ascending: !ascending.ascending });
      if (ascending.ascending) {
        setBodyData(SortStringAscending(bodyData2, "name"));
      } else {
        setBodyData(SortStringDescending(bodyData2, "name"));
      }
    } else {
      if (headerItem == "Name") {
        setAscending({ columnName: "Name", ascending: true });
        setBodyData(SortStringAscending(bodyData2, "name"));
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

    // setBodyData([...tableData])
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
          {bodyData.map((item, index) => {
            return <TableRow id={item.userId} key={index} data={item} />;
          })}
        </tbody>
      </table>
    </>
  );
}
