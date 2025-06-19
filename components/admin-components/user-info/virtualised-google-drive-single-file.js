/** @format */

"use client";
import React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

export default function VirtualizedGoogleDriveSingleFile({
  handleToggle,
  checkedIndex,
  googleFileName
}) {
  return (
    <Box
      sx={{
        width: "100%",
        height: 60,
        maxWidth: 360,
        bgcolor: "background.paper",
        border: "1px solid #ccc",
        borderRadius: 1,
      }}
    >
      <ListItem component="div" disablePadding>
        <ListItemButton onClick={() => handleToggle(checkedIndex)}>
          <ListItemText primary={googleFileName || "Unnamed Item"} />
          <Checkbox
            edge="start"
            checked={true}
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
    </Box>
  );
}
