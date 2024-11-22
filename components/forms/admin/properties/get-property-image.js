/** @format */
"use client";
import { Suspense, useState, useTransition } from "react";
import classes from "./get-property-image.module.css";
import Image from "next/image";
import { Spinner } from "@nextui-org/spinner";
import Link from "next/link";
import { GetPropertyImageAction } from "@/server/actions/db/admin/properties/get-property-image-action";

function Loading() {
  console.log("LOADING");
  return <Spinner />;
}

function ListOfImages({ imageList }) {
  return (
    <form>
      <ul>
        {imageList.map((img) => (
          <li>
            <div className={classes.tickRow}>
              {/* <div className={classes.inputWrapper}> */}
              <label>
                <a target="_blank" href={img.url}>
                  {img.key}
                </a>
              </label>
              <input
                type="checkbox"
                name={img.key}
                // checked={buyerType[0]}
                // checked={handleChange}
                // onChange={handleBuyerType}
              ></input>
            </div>
            {/* </div> */}
          </li>
        ))}
      </ul>
    </form>
  );

  return imageList.map((img) => (
    <ul>
      <li>
        <Link href={img.url}>
          <p>{img.key}</p>
        </Link>
      </li>
    </ul>
  ));
}

export default function GetPropertyImage() {
  const [pickedImage, setPickedImage] = useState();
  const [imageList, setImageList] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handlePickClick = async () => {
    startTransition(async () => {
      const result = await GetPropertyImageAction();
      setImageList([...result]);
    });

    // console.log(result, "image");
    // console.log(imageList.length);
  };

  return (
    <div className={classes.picker}>
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
        <div className={classes.imageItems}>
          {imageList.length == 0 && isPending == false ? (
            <p>Images not downloaded yet</p>
          ) : imageList.length == 0 && isPending == true ? (
            <Loading />
          ) : (
            <ListOfImages imageList={imageList} />
          )}
          {/* {pickedImage && (
            <Image
              src={pickedImage}
              alt="An image picked by admin"
              height={960}
              width={1280}
            />
          )} */}
        </div>
        {/* {isPending ?  : null} */}

        <div className={classes.buttonsContainer}>
          <button
            className={classes.button}
            type="button"
            onClick={handlePickClick}
          >
            Find an image
          </button>
          <div className={classes.submitButtonContainer}></div>
        </div>
        {/* {status.pending ? <Loading /> : null} */}
      </div>
    </div>
  );
}
