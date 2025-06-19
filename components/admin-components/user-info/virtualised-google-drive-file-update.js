/** @format */
"use client";

import React, { useState, useEffect } from "react";
import { FixedSizeList } from "react-window";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

export default function DriveFileListTest({ googleFolders, allGoogleFolders, setGoogleFolders }) {
  const [selectedFolder, setSelectedFolder] = useState(googleFolders); // Track the currently selected folder by name
  const [files, setFiles] = useState([]);

  // Set files from allGoogleFolders prop
  useEffect(() => {
    setFiles(allGoogleFolders);
  }, [allGoogleFolders]);

  // --- Handle checkbox toggle ---
  const handleToggle = (name) => {
    // Only update if a new folder is selected, preventing toggling off the selected one
    if (selectedFolder !== name) {
      setSelectedFolder(name); // Update selected folder to the clicked one
      setGoogleFolders(name); // Pass the selected folder back to parent
    }
  };

  // --- Row rendering function for the list ---
  const Row = ({ index, style }) => {
    const item = files[index];
    const isChecked = item?.name === selectedFolder; // Check if the folder is the selected one

    return (
      <ListItem style={style} key={index} component="div" disablePadding>
        <ListItemButton onClick={() => handleToggle(item?.name)}>
          <ListItemText primary={item?.name || `Item ${index + 1}`} />
          <Checkbox
            edge="start"
            checked={isChecked} // This will always reflect the selectedFolder state
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
  };

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
        key={files.length + "-" + selectedFolder} // Forces re-render on change
        height={300}
        itemCount={files.length}
        itemSize={40}
        width={360}
      >
        {Row}
      </FixedSizeList>
    </Box>
  );
}
