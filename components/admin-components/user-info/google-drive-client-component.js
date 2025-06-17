/** @format */
"use client";
import { useState, useCallback } from "react";
import Button from "@/components/ui/button";
import VirtualizedFileList from "./virtualised-google-drive-file-list";
import { updateGoogleDriveFolderId } from "@/server/actions/db/admin/google-folders/update-google-folder-id";
import VirtualizedGoogleDriveSingleFIle from "./virtualised-google-drive-single-file";
import DriveFileListTest from "./virtualised-google-drive-file-update";

export default function GoogleDriveClientComponent({
  classes,
  registration,
  result,
  userId,
}) {
  const [virtualListOpen, setVirtualListOpen] = useState(false);
  const [selectedCheckItem, setSelectedCheckItem] = useState(null);
  const [checkedIndex, setCheckedIndex] = useState(null);
  const [updatePending, setUpdatePending] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [registrationStatus, setRegistrationStatus] = useState(registration);
  const [resultStatus, setResultStatus] = useState(result);

  const handleToggle = useCallback(
    (index) => {
      setCheckedIndex((prev) => {
        const newIndex = prev === index ? null : index;
        const selectedItem = result[newIndex];
        if (selectedItem) {
          console.log(selectedItem);
          setSelectedCheckItem({ ...selectedItem });
  
          // setResultStatus({...selectedItem})
        } else {
          setSelectedCheckItem(null);
        }
        return newIndex;
      });
    },
    [result]
  );

  const handleClick = () => {
    setVirtualListOpen((val) => !val);
  };

  const handleUpdateDb = async () => {
    const updateResult = await updateGoogleDriveFolderId(
      userId,
      selectedCheckItem
    );
    if (updateResult.createdUser) {
      setResultStatus(selectedCheckItem.name);
      setRegistrationStatus("accepted");
      setUpdatePending(false);
    }
  };

  const handleUpdateFolder = () => {
    setResultStatus(selectedCheckItem);
    setUpdatePending(false);
  }

  const handleUpdate = () => {
    setUpdatePending(true);
  };

  const handleRevert = () => {
    setUpdatePending(false);
  };

  return (
    <>
      {registrationStatus == "pending" && !updatePending && (
        <>
          <p>
            The User&apos;s registration is pending, and they currently have no
            access to a folder.
          </p>
          <p>By updating the following, you will grant them access.</p>
          {virtualListOpen && (
            <VirtualizedFileList
              result={resultStatus}
              handleToggle={handleToggle}
              checkedIndex={checkedIndex}
            />
          )}
          <div className={classes.buttonContainer}>
            <div className="submit-button-container">
              <Button onClick={handleClick}>
                {virtualListOpen ? "Close" : "Edit"}
              </Button>
            </div>
            {selectedCheckItem && (
              <div className="submit-button-container">
                <Button onClick={handleUpdateDb}>Save</Button>
              </div>
            )}
          </div>
        </>
      )}
      {registrationStatus === "accepted" && !updatePending && (
        <div>
          <p>The following folder is accessible by the client:</p>
          <VirtualizedGoogleDriveSingleFIle
            result={resultStatus}
            handleToggle={handleToggle}
            checkedIndex={checkedIndex}
          />
          <div className={classes.buttonContainer}>
            <div className="submit-button-container">
              <Button onClick={handleUpdate}>Update</Button>
            </div>
          </div>
        </div>
      )}
      {updatePending && (
        <>
          {isFetching ? (
            <p>Loading folders:</p>
          ) : (
            <p>Revert update, or check new folder:</p>
          )}

          <DriveFileListTest
            result={resultStatus}
            handleToggle={handleToggle}
            checkedIndex={checkedIndex}
            setCheckedIndex={setCheckedIndex}
            setIsLoading={setIsFetching}
          />
          {isFetching ? (
            <div className={classes.buttonContainer}></div>
          ) : (
            <div className={classes.buttonContainer}>
              <div className="submit-button-container">
                <Button onClick={handleRevert}>Revert</Button>
              </div>
              {selectedCheckItem && (
                <div className="submit-button-container">
                  <Button onClick={handleUpdateFolder}>Save</Button>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </>
  );
}
