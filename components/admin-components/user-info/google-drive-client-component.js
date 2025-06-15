/** @format */
"use client";
import { useState, useCallback } from "react";
import Button from "@/components/ui/button";
import VirtualizedFileList from "./virtualised-google-drive-file-list";
import { updateGoogleDriveFolderId } from "@/server/actions/db/admin/google-folders/update-google-folder-id";
import VirtualizedGoogleDriveSingleFIle from "./virtualised-google-drive-single-file";

export default function GoogleDriveClientComponent({
  classes,
  registration,
  result,
  userId,
}) {
  const [virtualListOpen, setVirtualListOpen] = useState(false);
  const [selectedCheckItem, setSelectedCheckItem] = useState(null);
  const [checkedIndex, setCheckedIndex] = useState(null);

  console.log(result, "RESULT");

  const handleToggle = useCallback(
    (index) => {
      setCheckedIndex((prev) => {
        const newIndex = prev === index ? null : index;
        const selectedItem = result[newIndex];
        if (selectedItem) {
          // onSelect(newIndex, selectedItem);
          setSelectedCheckItem({ ...selectedItem });
          console.log(selectedItem, "ITEMS");
        } else {
          setSelectedCheckItem(null);
        }
        return newIndex;
      });
    },
    [result]
  );

  const handleClick = () => {
    console.log("CLICK");
    setVirtualListOpen((val) => !val);
  };

  const handleUpdateDb = () => {
    console.log("UPDATE DB");
    const updateResult = updateGoogleDriveFolderId(userId, selectedCheckItem);
  };

  return (
    <>
      {registration == "pending" && (
        <>
          <p>
            The User&apos;s registration is pending, and they currently have no
            access to a folder.
          </p>
          <p>By updating the following, you will grant them access.</p>
          {virtualListOpen && (
            <VirtualizedFileList
              result={result}
              handleToggle={handleToggle}
              checkedIndex={checkedIndex}
            />
          )}
        </>
      )}
      {registration === "accepted" && (
        <div>
          <h3>The following folder is accessible by the client:</h3>
          <VirtualizedGoogleDriveSingleFIle
            result={result}
            handleToggle={handleToggle}
            checkedIndex={checkedIndex}
          />
        </div>
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
  );
}
