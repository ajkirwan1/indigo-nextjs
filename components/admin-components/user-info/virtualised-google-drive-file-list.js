/** @format */

"use client";
import React, { useState, useCallback } from "react";
import { FixedSizeList } from "react-window";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

export default function VirtualizedFileList({ result, handleToggle, checkedIndex }) {

  const Row = useCallback(
    ({ index, style }) => {
      const item = result[index];
      const isChecked = checkedIndex === index;

      return (
        <ListItem style={style} key={index} component="div" disablePadding>
          <ListItemButton onClick={() => handleToggle(index)}>
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
    [result, handleToggle, checkedIndex]
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
        itemCount={result.length}
        itemSize={40}
        width={360}
      >
        {Row}
      </FixedSizeList>
    </Box>
  );
}
