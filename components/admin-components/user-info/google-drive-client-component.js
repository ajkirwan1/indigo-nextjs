/** @format */
"use client";
import Button from "@/components/ui/button";
import VirtualizedFileList from "./virtualised-google-drive-file-list";

export default function GoogleDriveClientComponent({
  classes,
  registration,
  result,
}) {
  const handleClick = () => {
    console.log("CLICK");
  };

  return (
    <>
      {registration == "accepted" && (
        <>
          <p>
            The User&apos;s registration is pending, and they currently have no
            access to a folder.
          </p>
          <p>By updating the following, you will grant them access.</p>
        <VirtualizedFileList result={result}/>
        </>
      )}
      {/* {registration === "accepted" && (
        <div>
          <h3>The following folder is accessible by the client:</h3>
          <h4>{result}</h4>
        </div>
      )} */}
      <div className={classes.buttonContainer}>
        <div className="submit-button-container">
          <Button onClick={handleClick}>Manage</Button>
        </div>
      </div>
    </>
  );
}
