"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { updateGoogleDriveFolderId } from "@/server/actions/db/admin/google-folders/update-google-folder-id";
import { fetchGoogleFolders } from "./fetch-google-folders";
import { PendingBlock, AcceptedBlock, UpdatePendingBlock } from "./ui-blocks"
import { updateGoogleDriveFolderIdByUserNewId } from "@/server/actions/db/admin/google-folders/accepted-user-update-google-id";
import { fetchGoogleFoldersNew } from "./fetch-google-folders-new";
import MaterialUiModal from "@/components/ui/modal/material-ui-modal";
import { sendMagicLink } from "@/server/actions/db/admin/send-magic-link";
import { Email } from "@mui/icons-material";


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
  const [modalOpen, setModalOpen] = useState(false);

  const openConfirmationModal = () => {
    return new Promise((resolve) => {
      setModalOpen(true);

      const handleClose = (value) => {
        setModalOpen(false);
        resolve(value);
      };

      // We'll pass these handlers to the modal:
      modalHandlers.current = { onClose: () => handleClose(false), onConfirm: () => handleClose(true) };
    });
  };


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
        const response = await fetch('/api/google-drive/all-folders', {
          cache: 'no-store',
        });
        const data = await response.json();

        console.log(data, "ALL GOOGLE FOLDERS")
        
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
      console.log("Already have the data")
    }
    setState((prev) => ({ ...prev, virtualListOpen: !prev.virtualListOpen }));
  };

  const modalHandlers = useRef({
    onClose: () => {},
    onConfirm: () => {},
  });
  
  const handleUpdateDb = async () => {
    setModalOpen(true);
    const result = await openConfirmationModal();

    if (result) {
      // User confirmed, do your DB update here
      const updateResult = await updateGoogleDriveFolderId(registrationId, state.googleFileId);
      if (updateResult.createdUser) {
        const {createdUser, updatedRegistration} = updateResult;
        console.log(updateResult, "updateResult")
        const sendMagicLinkResult = await sendMagicLink(updatedRegistration.email, createdUser.id)
        console.log(sendMagicLinkResult, "MAGIC LINK RESULT")
        setOriginalGoogleFolders(state.googleFileName);
        setGoogleFolders(state.googleFileName);
        setRegistrationStatus("accepted");
        setState((prev) => ({ ...prev, updatePending: false }));
      }
      console.log("Confirmed!");
    } else {
      console.log("Cancelled");
      setState((prev) => ({ ...prev, updatePending: false }));
    }


    // const updateResult = await updateGoogleDriveFolderId(registrationId, state.googleFileId);
    // if (updateResult.createdUser) {
    //   setOriginalGoogleFolders(state.googleFileName);
    //   setGoogleFolders(state.googleFileName)
    //   setRegistrationStatus("accepted");
    //   setState((prev) => ({ ...prev, updatePending: false }));
    // }
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
    const folderId = getGoogleFolderId(googleFolders, allGoogleFolders);
    const updateResult = await updateGoogleDriveFolderIdByUserNewId(registrationId, folderId);
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
      <MaterialUiModal
        open={modalOpen}
        onClose={modalHandlers.current.onClose}
        onConfirm={modalHandlers.current.onConfirm}
      />
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
