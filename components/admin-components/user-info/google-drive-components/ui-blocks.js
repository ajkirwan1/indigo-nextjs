// components/ui/blocks.js

import Button from "@/components/ui/button";
import VirtualizedFileList from "../virtualised-google-drive-file-list";
import VirtualizedGoogleDriveSingleFile from "../virtualised-google-drive-single-file";
import DriveFileListTest from "../virtualised-google-drive-file-update";

export const PendingBlock = ({
  state,
  toggleListOpen,
  toggleFileSelection,
  resultStatus,
  classes,
  handleUpdateDb,
  setState, // Receive setState as a prop
}) => (
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

export const AcceptedBlock = ({
  googleFolders,
  toggleFileSelection,
  state,
  classes,
  handleUpdate,
  setState, // Receive setState as a prop
}) => (
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

export const UpdatePendingBlock = ({
  state,
  googleFolders,
  allGoogleFolders,
  setGoogleFolders,
  handleRevert,
  handleUpdateFolder,
  classes,
  setState, // Receive setState as a prop
}) => (
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
                handleUpdateFolder(googleFolders);
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
