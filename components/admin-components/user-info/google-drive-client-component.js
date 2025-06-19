/** @format */
"use client";

import { useState, useCallback, useEffect } from "react";
import Button from "@/components/ui/button";
import VirtualizedFileList from "./virtualised-google-drive-file-list";
import { updateGoogleDriveFolderId } from "@/server/actions/db/admin/google-folders/update-google-folder-id";
import VirtualizedGoogleDriveSingleFile from "./virtualised-google-drive-single-file";
import DriveFileListTest from "./virtualised-google-drive-file-update";
export default function GoogleDriveClientComponent({
  classes,
  registration,
  googleDriveFolderId,
  userId,
}) {
  const [state, setState] = useState({
    virtualListOpen: false,
    selectedItem: null,
    checkedIndex: null,
    updatePending: false,
    isFetching: false,
  });

  const [registrationStatus, setRegistrationStatus] = useState(registration);
  const [resultStatus, setResultStatus] = useState(null);
  const [googleFolders, setGoogleFolders] = useState(null);
  const [allGoogleFolders, setAllGoogleFolders] = useState(null);
  const [originalGoogleFolders, setOriginalGoogleFolders] = useState(null); // Store the original value of googleFolders

  // --- EFFECT: Fetch folders based on registration status ---
  useEffect(() => {
    const fetchGoogleFolders = async () => {
      let apiEndpoint;

      if (registration === "accepted") {
        apiEndpoint = `/api/google-drive/get-folder-name?folderId=${googleDriveFolderId}`;
      } else if (registration === "typeB") {
        apiEndpoint = "https://api.example.com/foldersTypeB";
      } else {
        console.log("Invalid registration type");
        return;
      }

      try {
        setState((prev) => ({ ...prev, isFetching: true }));
        const response = await fetch(apiEndpoint);
        console.log(response, "RESPONSE");
        if (!response.ok) {
          throw new Error("API call failed");
        }

        const data = await response.json();
        console.log(data, "DATA");
        if (data.folderName) {
          setGoogleFolders(data.folderName); // Set the fetched folders in state
          setOriginalGoogleFolders(data.folderName); // Store the original folder value
        }

      } catch (error) {
        console.error("Error fetching folders:", error);
      } finally {
        setState((prev) => ({ ...prev, isFetching: false }));
      }
    };

    fetchGoogleFolders();
  }, [registration]); // Runs when registration changes

  // --- OTHER HANDLERS AND UI BLOCKS ---

  const toggleFileSelection = useCallback(
    (index) => {
      setState((prev) => {
        const newIndex = prev.checkedIndex === index ? null : index;
        const selectedItem = googleFolders?.[newIndex] || null;
        return {
          ...prev,
          checkedIndex: newIndex,
          selectedItem,
        };
      });
    },
    [googleFolders]
  );

  const toggleListOpen = () =>
    setState((prev) => ({ ...prev, virtualListOpen: !prev.virtualListOpen }));

  const handleUpdateDb = async () => {
    const updateResult = await updateGoogleDriveFolderId(userId, state.selectedItem);
    if (updateResult.createdUser) {
      setResultStatus(state.selectedItem.name);
      setRegistrationStatus("accepted");
      setState((prev) => ({ ...prev, updatePending: false }));
    }
  };

  const handleUpdateFolder = (val) => {
    setGoogleFolders(val); // Update googleFolders based on the checkbox selection
    // setResultStatus(state.selectedItem.name);
    // setState((prev) => ({ ...prev, updatePending: false }));
  };

  const handleUpdate = async () => {
    // Check if allGoogleFolders is empty
    if (allGoogleFolders?.length > 0) {
      console.log("Google Drive folders are already fetched, skipping API call.");
      setState((prev) => ({ ...prev, updatePending: true }));
      return; // Don't make the API call if there is data
    }

    try {
      // Only fetch data if allGoogleFolders is empty
      const response = await fetch("/api/drive/list");
      if (!response.ok) {
        throw new Error("API call failed");
      }

      const data = await response.json();

      setAllGoogleFolders([...data]); // Set the fetched data
      setState((prev) => ({ ...prev, updatePending: true }));

    } catch (error) {
      console.error("Error updating:", error);
    }
  };

  const handleRevert = () => {
    // Revert googleFolders back to the original value
    setGoogleFolders(originalGoogleFolders);
    setState((prev) => ({ ...prev, updatePending: false }));
  };

  const setFetching = (isFetching) =>
    setState((prev) => ({ ...prev, isFetching }));

  // --- UI BLOCKS ---
  const PendingBlock = () => (
    <>
      <p>
        The User&apos;s registration is pending, and they currently have no
        access to a folder.
      </p>
      <p>By updating the following, you will grant them access.</p>

      {state.virtualListOpen && (
        <VirtualizedFileList
          result={resultStatus}
          handleToggle={toggleFileSelection}
          checkedIndex={state.checkedIndex}
        />
      )}

      <div className={classes.buttonContainer}>
        <div className="submit-button-container">
          <Button onClick={toggleListOpen}>
            {state.virtualListOpen ? "Close" : "Edit"}
          </Button>
        </div>
        {state.selectedItem && (
          <div className="submit-button-container">
            <Button onClick={handleUpdateDb}>Save</Button>
          </div>
        )}
      </div>
    </>
  );

  const AcceptedBlock = () => (
    <div>
      <p>The following folder is accessible by the client:</p>
      <VirtualizedGoogleDriveSingleFile
        googleFileName={googleFolders}
        handleToggle={toggleFileSelection}
        checkedIndex={state.checkedIndex}
      />
      <div className={classes.buttonContainer}>
        <div className="submit-button-container">
          <Button onClick={handleUpdate}>Update</Button>
        </div>
      </div>
    </div>
  );

  const UpdatePendingBlock = () => (
    <>
      <p>{state.isFetching ? "Loading folders:" : "Revert update, or check new folder:"}</p>

      <DriveFileListTest
        googleFolders={googleFolders}
        allGoogleFolders={allGoogleFolders}
        setGoogleFolders={setGoogleFolders}
      />

      <div className={classes.buttonContainer}>
        {!state.isFetching && (
          <>
            <div className="submit-button-container">
              <Button onClick={handleRevert}>Revert1</Button>
            </div>
            <div className="submit-button-container">
              <Button
                onClick={() => {
                  handleUpdateFolder(googleFolders); // Update googleFolders with the selected item
                  setState((prev) => ({ ...prev, updatePending: false }));
                }}
              >
                Save1
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );

  // --- MAIN RENDER ---
  return (
    <>
      {/* {registrationStatus === "pending" && !state.updatePending && <PendingBlock />} */}
      {registrationStatus === "accepted" && !state.updatePending && <AcceptedBlock />}
      {state.updatePending && <UpdatePendingBlock />}
    </>
  );
}
