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
        <thead>
          <tr>
            <td title={1}>PENDING</td>
          </tr>
        </thead>
        <tbody>
          {/* {tbodyData.map((item) => {
            return (
              <TableRow id={item.userId} key={item.userId} data={item.items} />
            );
          })} */}
          <tr>
            <td>
              {/* <Skeleton
                // color={commonColors.black}
                className="h-40 w-3/5 rounded-lg"
              ></Skeleton> */}
              <Skeleton
                sx={{ bgcolor: "grey.400" }}
                animation="wave"
                variant="rectangular"
                // width={700}
                // height={400}
              />
            </td>
          </tr>
          <tr>
            <td>Pending</td>
          </tr>
          <tr>
            <td>Pending</td>
          </tr>
          <tr>
            <td>Pending</td>
          </tr>
          <tr>
            <td>Pending</td>
          </tr>
          <tr>
            <td>Pending</td>
          </tr>
          <tr>
            <td>Pending</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
