/** @format */
"use client";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import classes from "./table.module.css";
import React from "react";
import { Tooltip } from "@nextui-org/react";

export default function TableRow({ data, id }) {
  const pathName = usePathname();
  const router = useRouter();

  const requestStatus = data.propertyAccess;
  const handleClick = () => {
    router.push(`${pathName}/${id}`);
  };

  delete data.userId;

  const dataArray = Object.values(data);

  return (
    <>
      {requestStatus === "Not requested" ? (
        <Tooltip content="This user's access request is pending"  color="warning" className={classes.toolTip}>
          <tr
            className={
              requestStatus === "Not requested" ? `${classes.pending}` : null
            }
            onClick={handleClick}
          >
            {dataArray.map((item, index) => {
              return (
                <td key={index}>
                  {requestStatus == "Not requested" ? item + "sad" : item}
                </td>
              );
            })}
          </tr>
        </Tooltip>
      ) : (
        <tr
          className={
            requestStatus === "Not requested" ? `${classes.pending}` : null
          }
          onClick={handleClick}
        >
          {dataArray.map((item, index) => {
            return (
              <td key={index}>
                {requestStatus == "Not requested" ? item + "sad" : item}
              </td>
            );
          })}
        </tr>
      )}
    </>
  );
}
