/**
 * eslint-disable react-hooks/exhaustive-deps
 *
 * @format
 */

/** @format */
"use client";
import { useState, useEffect } from "react";
import classes from "./get-property-pdf-new.module.css";
import { GetAllPdfs } from "@/server/actions/db/admin/properties/pdfs/get-all-pdfs";
import Button from "@/components/ui/button";
import { UpdateClientPdfs } from "@/server/actions/db/admin/properties/pdfs/update-client-pdfs";
import { CreateClientPdfs } from "@/server/actions/db/admin/properties/pdfs/create-client-pdfs";
import { sendMagicLink } from "@/server/actions/db/admin/send-magic-link";
// import { listDriveFiles } from "@/lib/google/get-drive-files";

function ListOfPdfs({
  pdfList,
  checkboxticked,
  handleUpdateCheckbox,
  handleClick,
}) {
  return (
    <form>
      <ul>
        {pdfList.map((element, index) => (
          <li key={index}>
            <div className={classes.tickRow}>
              <label>
                <p>{element.name}</p>
              </label>
              <input
                type="checkbox"
                name={element.name}
                checked={checkboxticked?.includes(element.id)}
                onChange={() => handleUpdateCheckbox(element.id)}
              ></input>
            </div>
          </li>
        ))}
      </ul>
      <div className="submitButtonContainer">
        <Button onClick={handleClick}>Submit</Button>
      </div>
    </form>
  );
}

export default function GetPropertyPdfNew({
  pdfs,
  userId,
  toggleModal,
  registration,
  files={files}
}) {
  const [pdfList, setPdfList] = useState([]);
  const [checkboxticked, setCheckboxTicked] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    async function fetchPdfs() {
      const result = await GetAllPdfs();
      // add GetAllGoogleDriveFolderNames
      // const googleDriveFiles = await listDriveFiles();
      // console.log("GOOGLE DRIVE FILES", googleDriveFiles)
      setIsPending(false);
      setPdfList(result);

      if (pdfs && pdfs.length > 0) {
        const matchingIndexes = findMatchingPdfIndexes(pdfs, result);
        setCheckboxTicked(matchingIndexes);
      }
    }
    fetchPdfs();
  }, [pdfs]);

  function findMatchingPdfIndexes(pdfs, pdfList) {
    const matchingIndexes = [];

    pdfs.forEach((pdf, index) => {
      const matchExists = pdfList.some((item) => item.id === pdf.id);
      if (matchExists) {
        matchingIndexes.push(pdf.id);
      }
    });
    return matchingIndexes;
  }

  const handleUpdateCheckbox = (id) => {
    setCheckboxTicked(
      (prev) =>
        prev.includes(id)
          ? prev.filter((i) => i !== id) // Remove index
          : [...prev, id] // Add index
    );
  };

  const handleClick = async (event) => {
    event.preventDefault();
    if (registration == "pending") {
      await CreateClientPdfs(userId, checkboxticked)
      
    }
    if (registration == "accepted") {
      await UpdateClientPdfs(userId, checkboxticked);
    }
    toggleModal();
  };

  return (
    <div className={classes.picker}>
      {isPending ? (
        <p>loading....</p>
      ) : (
        <ListOfPdfs
          pdfList={pdfList}
          checkboxticked={checkboxticked}
          handleUpdateCheckbox={handleUpdateCheckbox}
          handleClick={handleClick}
        />
      )}
      {files?.map((el, index) => (
        <li key={index}>
          <p>{el.name}</p>
        </li>
      ))}
    </div>
  );
}
