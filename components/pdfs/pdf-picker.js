/** @format */
"use client";

import { useRef, useState } from "react";
import classes from "./pdf-picker.module.css";
import Image from "next/image";
import pdf from "/public/images/icons/icons8-pdf-100.png";
import SubmitButton from "../ui/buttons/submit-button";

export default function PdfPicker({ label, name }) {
  const [pickedPdf, setPickedPdf] = useState();
  const imageInput = useRef();

  function handlePickClick() {
    imageInput.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <div className={classes.controls}>
        <div className={classes.pdfPreview}>
          {!pickedPdf && <p>No pdf selected</p>}
          {pickedPdf && (
            <Image src={pdf} alt="A pdf icon" height={100} width={100} />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="application/pdf"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <div className={classes.buttonsContainer}>
          <button
            className={classes.button}
            type="button"
            onClick={handlePickClick}
          >
            Pick an image
          </button>
          <div className={classes.submitButtonContainer}>
            <SubmitButton>SUBMIT</SubmitButton>
          </div>
        </div>

        {/* <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Preview
        </button> */}
      </div>
    </div>
  );
}
