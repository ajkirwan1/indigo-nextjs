/** @format */

"use client";
import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function VirtualizedGoogleDriveListOfFiles({ result }) {
  if (!Array.isArray(result)) return null;

  console.log(result, "RESULTS")

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 500,
        // bgcolor: "background.paper",
        // border: "1px solid #ccc",
        // borderRadius: 1,
        overflow: "auto",
        maxHeight: 300,
        p: 1,
      }}
    >
      <List dense>
        {result.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", py: 1 }}>
            <ListItemText
              primary={
                <Typography variant="body1">{item.name || "Unnamed Item"}</Typography>
              }
            />
            <Link
              href={`/api/download?fileId=${item.id}`}
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              variant="body2"
              sx={{ ml: 2, cursor: "pointer" }}
            >
              View
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
