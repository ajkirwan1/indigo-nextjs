/** @format */
"use client";
import { useState, useTransition } from "react";
import classes from "./get-property-image.module.css";
import Image from "next/image";
import { Spinner } from "@nextui-org/spinner";
import { GetPropertyImageAction } from "@/server/actions/db/admin/properties/get-properties/get-property-image-action";

function Loading() {
  return <Spinner />;
}

function ListOfImages({ imageList, checkboxticked, handleUpdateCheckbox }) {
  return (
    <form>
      <ul>
        {imageList.map((img, index) => (
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

export default function GetPropertyImage({ handleImageUrl }) {
  const [pickedImage, setPickedImage] = useState();
  const [imageList, setImageList] = useState([]);
  const [checkboxticked, setCheckboxTicked] = useState();
  const [isPending, startTransition] = useTransition();

  const handlePickClick = async () => {
    startTransition(async () => {
      const result = await GetPropertyImageAction();
      setImageList([...result]);
    });
  };

  const handleUpdateCheckbox = (index) => {
    setCheckboxTicked(index);
  };

  const selectImage = () => {
    setPickedImage(imageList[checkboxticked].url);
    handleImageUrl(imageList[checkboxticked].url);
  };

  return (
    <div className={classes.picker}>
      <div className={classes.controls}>
        <div className={classes.imageItems}>
          {imageList.length == 0 && isPending == false ? (
            <p>Images not downloaded yet</p>
          ) : imageList.length == 0 && isPending == true ? (
            <Loading />
          ) : (
            <ListOfImages
              imageList={imageList}
              checkboxticked={checkboxticked}
              handleUpdateCheckbox={handleUpdateCheckbox}
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
              className={classes.image}
            />
          )}
        </div>
        <div className={classes.buttonsContainer}>
          <button
            className={classes.button}
            type="button"
            onClick={handlePickClick}
          >
            Find an image
          </button>
        </div>
        {checkboxticked >= 0 ? (
          <div className={classes.submitButtonContainer}>
            <button onClick={selectImage}>Submit</button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
