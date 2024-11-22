/** @format */
"use client";
import { useState, useTransition } from "react";
import classes from "./get-property-image.module.css";
import Image from "next/image";
import { Spinner } from "@nextui-org/spinner";
import pdf from "/public/images/icons/icons8-pdf-100.png";
import { GetPropertyPdfAction } from "@/server/actions/db/admin/properties/get-property-pdf-action";

function Loading() {
  return <Spinner />;
}

function ListOfPdfs({ pdfList, checkboxticked, handleUpdateCheckbox }) {
  return (
    <form>
      <ul>
        {pdfList.map((img, index) => (
          <li>
            <div className={classes.tickRow}>
              <label>
                <a target="_blank" href={img.url}>
                  {img.key}
                </a>
              </label>
              <input
                type="checkbox"
                name={img.key}
                checked={index == checkboxticked ? true : false}
                onChange={() => handleUpdateCheckbox(index)}
              ></input>
            </div>
          </li>
        ))}
      </ul>
    </form>
  );
}

export default function GetPropertyPdf() {
  const [pickedPdf, setPickedPdf] = useState();
  const [pdfList, setPdfList] = useState([]);
  const [checkboxticked, setCheckboxTicked] = useState();
  const [isPending, startTransition] = useTransition();

  const handlePickClick = async () => {
    startTransition(async () => {
      const result = await GetPropertyPdfAction();
      setPdfList([...result]);
    });
  };

  const handleUpdateCheckbox = (index) => {
    setCheckboxTicked(index);
  };

  const selectPdf = () => {
    setPickedPdf(pdfList[checkboxticked].url);
  };

  return (
    <div className={classes.picker}>
      <div className={classes.controls}>
        <div className={classes.imageItems}>
          {pdfList.length == 0 && isPending == false ? (
            <p>Pdfs not downloaded yet</p>
          ) : pdfList.length == 0 && isPending == true ? (
            <Loading />
          ) : (
            <ListOfPdfs
              pdfList={pdfList}
              checkboxticked={checkboxticked}
              handleUpdateCheckbox={handleUpdateCheckbox}
            />
          )}
        </div>
        <div className={classes.pdfPreview}>
          {!pickedPdf && <p>No pdf selected</p>}
          {pickedPdf && (
            <Image
              src={pdf}
              alt="A pdf picked by admin"
              height={100}
              width={100}
              //   className={classes.image}
            />
          )}
        </div>
        <div className={classes.buttonsContainer}>
          <button
            className={classes.button}
            type="button"
            onClick={handlePickClick}
          >
            Find a pdf
          </button>
        </div>
        {checkboxticked >= 0 ? (
          <div className={classes.submitButtonContainer}>
            <button onClick={selectPdf}>Submit</button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
