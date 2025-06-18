"use client";

import { useState, useCallback, useEffect } from "react";
import { updateGoogleDriveFolderId } from "@/server/actions/db/admin/google-folders/update-google-folder-id";
import { fetchGoogleFolders } from "./fetch-google-folders";
import { PendingBlock, AcceptedBlock, UpdatePendingBlock } from "./ui-blocks"
import { updateGoogleDriveFolderIdByUserNewId } from "@/server/actions/db/admin/google-folders/accepted-user-update-google-id";

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
  // const [resultStatus, setResultStatus] = useState(null);
  const [googleFolders, setGoogleFolders] = useState(null);
  const [allGoogleFolders, setAllGoogleFolders] = useState(null);
  const [originalGoogleFolders, setOriginalGoogleFolders] = useState(null);

  useEffect(() => {
    fetchGoogleFolders(
      registration,
      googleDriveFolderId,
      setState,
      setGoogleFolders,
      setOriginalGoogleFolders
    );
  }, [registration, googleDriveFolderId]);

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
      // setResultStatus(state.selectedItem.name);
      setRegistrationStatus("accepted");
      setState((prev) => ({ ...prev, updatePending: false }));
    }
  };

  const handleRevert = () => {
    setGoogleFolders(originalGoogleFolders);
    setState((prev) => ({ ...prev, updatePending: false }));
  };

  const getGoogleFolderId = (googleFolders, allGoogleFolders) => {
    // Find the folder in allGoogleFolders that has the same name as googleFolders
    const folder = allGoogleFolders.find(folder => folder.name === googleFolders);
  
    // If a match is found, return the id
    if (folder) {
      return folder.id;
    } else {
      // If no match is found, return null or handle as needed
      console.log('No folder found with the given name');
      return null;
    }
  };
  


  const handleUpdateFolder = async (val) => {
    console.log(userId, "userId")

    const folderId = getGoogleFolderId(googleFolders, allGoogleFolders);

    const updateResult = await updateGoogleDriveFolderIdByUserNewId(userId, folderId);
    console.log(updateResult, "updateResult");


    setGoogleFolders(val); // Update googleFolders based on the checkbox selection
  };


  const handleUpdate = async () => {
    if (allGoogleFolders?.length > 0) {
      setState((prev) => ({ ...prev, updatePending: true }));
      return;
    }

    try {
      const response = await fetch("/api/drive/list");
      if (!response.ok) {
        throw new Error("API call failed");
      }

      const data = await response.json();
      setAllGoogleFolders([...data]);
      setState((prev) => ({ ...prev, updatePending: true }));

    } catch (error) {
      console.error("Error updating:", error);
    }
  };

  // --- MAIN RENDER ---
  return (
    <>
      {registrationStatus === "accepted" && !state.updatePending && (
        <AcceptedBlock
          googleFolders={googleFolders}
          toggleFileSelection={toggleFileSelection}
          state={state}
          classes={classes}
          handleUpdate={handleUpdate}
          setState={setState}
        />
      )}
      {state.updatePending && (
        <UpdatePendingBlock
          state={state}
          googleFolders={googleFolders}
          allGoogleFolders={allGoogleFolders}
          setGoogleFolders={setGoogleFolders}
          handleRevert={handleRevert}
          handleUpdateFolder={handleUpdateFolder}
          classes={classes}
          setState={setState}
        />
      )}
      {/* Add your pending block or other conditions as needed */}
    </>
  );
}
