'use client'
import { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


export default function VirtualizedGoogleDriveListOfFiles({ result }) {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loadingFileId, setLoadingFileId] = useState(null);

  if (!Array.isArray(result)) return null;

  async function handleDownload(fileId, fileName) {
    setLoadingFileId(fileId);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch(`/api/download?fileId=${fileId}`);

      if (!res.ok) {
        const errorMessage = `Failed to download: ${res.status} ${res.statusText}`;
        console.error(`[Download Error] File ID: ${fileId}, Name: ${fileName}, Status: ${res.status}`, {
          fileId,
          fileName,
          status: res.status,
          statusText: res.statusText,
        });
        throw new Error(errorMessage);
      }

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = fileName || "file";
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      document.body.appendChild(a);
      a.click();

      a.remove();
      window.URL.revokeObjectURL(url);

      setSuccess(`Successfully downloaded "${fileName || "file"}"`);
    } catch (err) {
      console.error(`[Unhandled Download Error] File ID: ${fileId}, Name: ${fileName}`, err);
      setError(err.message);
    } finally {
      setLoadingFileId(null);
    }
  }

  return (
    <>
      <Box
        sx={{
          width: "100%",
          maxWidth: 500,
          overflow: "auto",
          maxHeight: 300,
          p: 1,
        }}
      >
        <List dense>
          {result.map((item, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                py: 1,
              }}
            >
              <ListItemText
                primary={<Typography variant="body1">{item.name || "Unnamed Item"}</Typography>}
              />
              <Button
                variant="text"
                onClick={() => handleDownload(item.id, item.name)}
                disabled={loadingFileId === item.id}
              >
                {loadingFileId === item.id ? "Loading..." : "View"}
              </Button>
            </ListItem>
          ))}
        </List>
      </Box>

      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={() => setError(null)}
        message="An error occured downloading the file"
        ContentProps={{
          sx: {
            bgcolor: 'red',   // green background
            color: 'white',     // white text for contrast
          }
        }}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="white"
            onClick={() => setError(null)} 
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }     
      />

      <Snackbar
        open={!!success}
        autoHideDuration={4000}
        onClose={() => setSuccess(null)}
        message={success}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        ContentProps={{
          sx: {
            bgcolor: 'green',   // green background
            color: 'white',     // white text for contrast
          }
        }}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="white"
            onClick={() => setSuccess(null)} 
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </>
  );
}
