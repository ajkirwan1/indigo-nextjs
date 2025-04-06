/** @format */
"use client";
import { useState, useEffect } from "react";
import TableHeadItem from "./table-head-item";
import TableRow from "./table-row";
import classes from "./table.module.css";
import SortStringAscending from "@/utils/admin/table-sort/string-sort-ascending";
import SortStringDescending from "@/utils/admin/table-sort/string-sort-descending";

export default function Table({
  theadData,
  tbodyData,
  customClass,
}) {
  const [bodyData, setBodyData] = useState([...tbodyData]);
  const [ascending, setAscending] = useState({
    columnName: "Date of request",
    ascending: false,
  });

useEffect(() => {
  setBodyData([...tbodyData])
}, [tbodyData])

  const headerNameMapper = new Map([
    ["Name", "name"],
    ["Email", "email"],
    ["Property access", "propertyAccess"],
    ["Consulting access", "consultingAccess"],
    ["Date of request", "dateOfRequest"],
  ]);

  const handleSort = (headerItem) => {
    const filterItem = headerNameMapper.get(headerItem);

    if (headerItem == ascending.columnName) {
      setAscending({ columnName: headerItem, ascending: !ascending.ascending });
      if (ascending.ascending) {
        setBodyData(SortStringDescending(tbodyData, filterItem));
      } else {
        setBodyData(SortStringAscending(tbodyData, filterItem));
      }
    } else {
      if (headerItem == "Name") {
        setAscending({ columnName: "Name", ascending: false });
        setBodyData(SortStringDescending(tbodyData, filterItem));
      } else if (headerItem == "Email") {
        setAscending({ columnName: "Email", ascending: true });
        setBodyData(SortStringDescending(tbodyData, filterItem));
      } else if (headerItem == "Property access") {
        setAscending({
          columnName: "Property access",
          ascending: false,
        });
        setBodyData(SortStringDescending(tbodyData, filterItem));
      } else if (headerItem == "Consulting access") {
        setAscending({
          columnName: "Consulting access",
          ascending: false,
        });
        setBodyData(SortStringDescending(tbodyData, filterItem));
      } else if (headerItem == "Date of request") {
        setAscending({
          columnName: "Date of request",
          ascending: false,
        });
      } else {
        setAscending({
          columnName: "Date of request",
          ascending: false,
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
          {bodyData.map((item, index) => {
            return <TableRow id={item.userId} key={index} data={item} />;
          })}
        </tbody>
      </table>
    </>
  );
}
