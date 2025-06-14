/** @format */

"use client";
import React from "react";
import { FixedSizeList } from "react-window";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

function renderRow(result, handleToggle) {
  return function renderRow({ index, style }) {
    const item = result[index];
    return (
      <ListItem style={style} key={index} component="div" disablePadding>
        <ListItemButton onClick={handleToggle()}>
          <ListItemText primary={item?.name || `Item ${index + 1}`} />
          <Checkbox
            edge="start"
            // checked={checked.includes(value)}
            tabIndex={-1}
            disableRipple
            // inputProps={{ 'aria-labelledby': labelId }}
          />
        </ListItemButton>
      </ListItem>
    );
  };
}


export default function VirtualizedFileList({ result }) {
  // const Row = ({ index, style }) => (
  //   <li style={style} key={index}>
  //     <p>{result[index].name}</p>
  //   </li>
  // );
 const handleToggle = () => {
  console.log("TOGGGGGGLWW")
 }
  return (
    <Box
      sx={{
        width: "100%",
        height: 300,
        maxWidth: 360,
        bgcolor: "background.paper",
        border: "1px solid #ccc", // Add this line for a light gray border
        borderRadius: 1, // Optional: slightly rounded corners
      }}
    >
      <FixedSizeList
        height={300}
        itemCount={result.length}
        // itemCount={500}
        itemSize={40}
        width={360}
        // width="100%"
      >
        {/* {Row} */}
        {renderRow(result, handleToggle)}
      </FixedSizeList>
    </Box>
  );
}
