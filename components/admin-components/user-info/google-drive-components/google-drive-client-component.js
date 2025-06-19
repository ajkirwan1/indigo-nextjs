"use client";

import { useState, useCallback, useEffect } from "react";
import { updateGoogleDriveFolderId } from "@/server/actions/db/admin/google-folders/update-google-folder-id";
import { fetchGoogleFolders } from "./fetch-google-folders";
import { PendingBlock, AcceptedBlock, UpdatePendingBlock } from "./ui-blocks"
import { updateGoogleDriveFolderIdByUserNewId } from "@/server/actions/db/admin/google-folders/accepted-user-update-google-id";
import { fetchGoogleFoldersNew } from "./fetch-google-folders-new";


export default function GoogleDriveClientComponent({
  classes,
  registration,
  googleDriveFolderId,
  registrationId,
}) {
  const [state, setState] = useState({
    virtualListOpen: false,
    selectedItem: null,
    checkedIndex: null,
    updatePending: false,
    isFetching: false,
    googleFileId: null,
    googleFileName: null
  });

  const [registrationStatus, setRegistrationStatus] = useState(registration);
  const [googleFolders, setGoogleFolders] = useState(null);
  const [allGoogleFolders, setAllGoogleFolders] = useState(null);
  const [originalGoogleFolders, setOriginalGoogleFolders] = useState(null);

  useEffect(() => {
    if (!googleDriveFolderId || registration !== "accepted") return;
  
    const endpoint = `/api/google-drive/get-folder-name?folderId=${googleDriveFolderId}`;
  
    const loadFolders = async () => {
      setState((prev) => ({ ...prev, isFetching: true }));
  
      const data = await fetchGoogleFoldersNew(endpoint);
      if (data?.folderName) {
       
        setGoogleFolders(data.folderName);
        setOriginalGoogleFolders(data.folderName);
      }
  
      setState((prev) => ({ ...prev, isFetching: false }));
    };
  
    loadFolders();
  }, [registration, googleDriveFolderId]);
  

  const toggleFileSelection = useCallback(
    (index, item) => {
  
      setState((prev) => {
        const newIndex = prev.checkedIndex === index ? null : index;
        const selectedItem = googleFolders?.[newIndex] || null;
        const googleFileId = newIndex !== null ? item.id : null;
        const fileName = newIndex !== null ? item.name : null;
  
        return {
          ...prev,
          checkedIndex: newIndex,
          selectedItem,
          googleFileId,
          googleFileName : fileName
        };
      });
    },
    [googleFolders]
  );
  

  const toggleListOpen = async () => {

    if (state.checkedIndex || state.checkedIndex == 0) {
      setState((prev) => ({ ...prev, checkedIndex: null }));
    }

    if (!allGoogleFolders) {
      try {
        const response = await fetch('/api/google-drive/all-folders');
        const data = await response.json();
        
        if (response.ok) {

          const fileList = data.files;
          setAllGoogleFolders(fileList); // Update the state with the fetched files
        } else {
          console.error('Error fetching Google Drive files:', data.error);
        }
      } catch (error) {
        console.error('Error fetching Google Drive files:', error);
      }
    } else {
      console.log("FAlready have the data")
    }
    setState((prev) => ({ ...prev, virtualListOpen: !prev.virtualListOpen }));
  };
  
  const handleUpdateDb = async () => {
    const updateResult = await updateGoogleDriveFolderId(registrationId, state.googleFileId);
    if (updateResult.createdUser) {
      setOriginalGoogleFolders(state.googleFileName);
      setGoogleFolders(state.googleFileName)
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
    console.log("handleUpdateFolder")
    console.log(googleFolders, "googleFolders")
    console.log(allGoogleFolders, "allGoogleFolders")
    const folderId = getGoogleFolderId(googleFolders, allGoogleFolders);
    console.log(folderId, "FOLDERID")
    const updateResult = await updateGoogleDriveFolderIdByUserNewId(registrationId, folderId);
    console.log(updateResult, "updateResult");
    setGoogleFolders(val); // Update googleFolders based on the checkbox selection
  };


  const handleUpdate = async () => {
    console.log("HERE I AM")
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
      {registrationStatus === "pending" && !state.updatePending && (
        <PendingBlock
          allGoogleFolders={allGoogleFolders}
          googleFolders={googleFolders}
          toggleFileSelection={toggleFileSelection}
          state={state}
          classes={classes}
          // handleUpdate={handleUpdate}
          setState={setState}
          toggleListOpen={toggleListOpen}
          handleUpdateDb={handleUpdateDb}
        />
      )}
    </>
  );
}
