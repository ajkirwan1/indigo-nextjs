/** @format */

"use client";

import React, { useState, useEffect } from "react";
import { FixedSizeList } from "react-window";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

export default function DriveFileListTest({
  result,
  handleToggle,
  checkedIndex,
  setCheckedIndex
}) {
  const [files, setFiles] = useState([]);
  // const [checkedIndex, setCheckedIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch files and determine checkedIndex
  useEffect(() => {
    fetch("/api/drive/list")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch files");
        return res.json();
      })
      .then((data) => {
        setFiles(data);
        const foundIndex = data.findIndex((file) => file.name === result);
        console.log("Matching result:", result?.name);
        console.log("Found at index:", foundIndex);
        if (foundIndex !== -1) {
          setCheckedIndex(foundIndex);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, [result]);

  // const handleToggle = (index) => {
  //   setCheckedIndex(index === checkedIndex ? null : index);
  // };

  const Row = ({ index, style }) => {
    const item = files[index];
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
  };

  if (loading) return <p>Loading files...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

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
        key={files.length + "-" + checkedIndex} // Forces re-render on change
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
