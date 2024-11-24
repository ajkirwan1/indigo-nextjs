/** @format */
"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";
import SubmitButton from "@/components/ui/buttons/submit-button";
import { useFormStatus } from "react-dom";

function Loading() {
  return <p>Losdingksdfkl</p>;
}

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const status = useFormStatus();
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
      {/* <label htmlFor={name}>{label}</label> */}
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="An image picked by admin"
              height={960}
              width={1280}
            />
          )}
        </div>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="An image picked by admin"
              height={960}
              width={1280}
            />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpg"
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
        {status.pending ? <Loading /> : null}

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
