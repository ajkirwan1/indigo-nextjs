/** @format */

"use client";
import React, { useState, useCallback } from "react";
import { FixedSizeList } from "react-window";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

export default function VirtualizedFileList({ allGoogleFolders, handleToggle, checkedIndex }) {
  // const [checkedIndex, setCheckedIndex] = useState(null);

  // Handle the checkbox toggle logic
  // const handleToggle = (index) => {
  //   setCheckedIndex(checkedIndex === index ? null : index); // Deselect if already selected
  // };

  // Row renderer function for react-window
  const Row = useCallback(
    ({ index, style }) => {
      const item = allGoogleFolders[index]; // Get the folder item
      const isChecked = checkedIndex === index; // Check if the current item is selected
      return (
        <ListItem style={style} key={item.id} component="div" disablePadding>
          <ListItemButton onClick={() => handleToggle(index, item)}>
            <ListItemText primary={item?.name || `Item ${index + 1}`} />
            <Checkbox
              edge="start"
              checked={isChecked}
              tabIndex={-1}
              disableRipple
              sx={{
                color: "#003a4d",
                "&.Mui-checked": {
                  color: "#003a4d",
                },
              }}
            />
          </ListItemButton>
        </ListItem>
      );
    },
    [checkedIndex, allGoogleFolders] // Recreate Row when checkedIndex or allGoogleFolders change
  );

  return (
    <Box
      sx={{
        width: "100%",
        height: 300,
        maxWidth: 360,
        bgcolor: "background.paper",
        border: "1px solid #ccc",
        borderRadius: 1,
      }}
    >
      <FixedSizeList
        height={300}
        itemCount={allGoogleFolders.length} // Set the item count to allGoogleFolders length
        itemSize={40} // Set height for each row
        width={360}
      >
        {({ index, style }) => {
          return <Row index={index} style={style} />; // Correctly invoking the Row function
        }}
      </FixedSizeList>
    </Box>
  );
}
