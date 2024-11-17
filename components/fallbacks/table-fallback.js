"use client";

/** @format */

// import { Suspense } from "react";
// import TableHeadItem from "./table-head-item";
// import TableRow from "./table-row";
// import { Skeleton } from "@nextui-org/skeleton";
// import { commonColors, semanticColors } from "@nextui-org/theme";
import Skeleton from "@mui/material/Skeleton";

import classes from "./table-fallback.module.css";

export default function TableFallback({ theadData, tbodyData, customClass }) {
  return (
    <>
      <table className={classes.admin}>
        <thead className={classes.head}>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Property access</td>
            <td>Consulting access</td>
            <td>Date of request</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={5} className={classes.fallbackTr} align="center">
              <Skeleton
                className={classes.skeleton}
                animation="pulse"
                variant="rectangular"
              ></Skeleton>
            </td>
          </tr>
          <tr>
            <td colSpan={5} className={classes.fallbackTr} align="center">
              <Skeleton
                className={classes.skeleton}
                animation="pulse"
                variant="rectangular"
              ></Skeleton>
            </td>
          </tr>
          <tr>
            <td colSpan={5} className={classes.fallbackTr} align="center">
              <Skeleton
                className={classes.skeleton}
                animation="pulse"
                variant="rectangular"
              ></Skeleton>
            </td>
          </tr>
          <tr>
            <td colSpan={5} className={classes.fallbackTr} align="center">
              <Skeleton
                className={classes.skeleton}
                animation="pulse"
                variant="rectangular"
              ></Skeleton>
            </td>
          </tr>
          <tr>
            <td colSpan={5} className={classes.fallbackTr} align="center">
              <Skeleton
                className={classes.skeleton}
                animation="pulse"
                variant="rectangular"
              ></Skeleton>
            </td>
          </tr>
          <tr>
            <td colSpan={5} className={classes.fallbackTr} align="center">
              <Skeleton
                className={classes.skeleton}
                animation="pulse"
                variant="rectangular"
              ></Skeleton>
            </td>
          </tr>
          <tr>
            <td colSpan={5} className={classes.fallbackTr} align="center">
              <Skeleton
                className={classes.skeleton}
                animation="pulse"
                variant="rectangular"
              ></Skeleton>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
