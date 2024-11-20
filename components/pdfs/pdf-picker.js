/** @format */
"use client";

import { useRef, useState } from "react";
import classes from "./pdf-picker.module.css";
import Image from "next/image";
import pdf from "/public/images/icons/icons8-pdf-100.png";

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
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
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
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick a PDF
        </button>
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
