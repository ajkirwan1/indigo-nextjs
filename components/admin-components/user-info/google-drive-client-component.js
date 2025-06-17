/** @format */
"use client";

import { useState, useCallback } from "react";
import Button from "@/components/ui/button";
import VirtualizedFileList from "./virtualised-google-drive-file-list";
import { updateGoogleDriveFolderId } from "@/server/actions/db/admin/google-folders/update-google-folder-id";
import VirtualizedGoogleDriveSingleFile from "./virtualised-google-drive-single-file";
import DriveFileListTest from "./virtualised-google-drive-file-update";

export default function GoogleDriveClientComponent({
  classes,
  registration,
  result,
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
  const [resultStatus, setResultStatus] = useState(result);

  const toggleFileSelection = useCallback(
    (index) => {
      setState((prev) => {
        const newIndex = prev.checkedIndex === index ? null : index;
        const selectedItem = result[newIndex] || null;
        return {
          ...prev,
          checkedIndex: newIndex,
          selectedItem,
        };
      });
    },
    [result]
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

  const handleUpdateFolder = () => {
    setResultStatus(state.selectedItem.name);
    setState((prev) => ({ ...prev, updatePending: false }));
  };

  const handleUpdate = () =>
    setState((prev) => ({ ...prev, updatePending: true }));

  const handleRevert = () =>
    setState((prev) => ({ ...prev, updatePending: false }));

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
        result={resultStatus}
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
        result={resultStatus}
        handleToggle={toggleFileSelection}
        checkedIndex={state.checkedIndex}
        setCheckedIndex={(idx) => setState((prev) => ({ ...prev, checkedIndex: idx }))}
        setIsLoading={setFetching}
      />

      <div className={classes.buttonContainer}>
        {!state.isFetching && (
          <>
            <div className="submit-button-container">
              <Button onClick={handleRevert}>Revert</Button>
            </div>
            {state.selectedItem && (
              <div className="submit-button-container">
                <Button onClick={handleUpdateFolder}>Save</Button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );

  // --- MAIN RENDER ---
  return (
    <>
      {registrationStatus === "pending" && !state.updatePending && <PendingBlock />}
      {registrationStatus === "accepted" && !state.updatePending && <AcceptedBlock />}
      {state.updatePending && <UpdatePendingBlock />}
    </>
  );
}
