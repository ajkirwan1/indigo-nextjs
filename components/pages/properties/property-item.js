/** @format */

import Link from "next/link";
import Image from "next/image";
import pdf from "/public/images/icons/icons8-pdf-100.png";
import locationIcon from "/public/images/icons/icons8-location-pin-100.png";
import messageIcon from "/public/images/contact.png";

import classes from "./property-item.module.css";

export default function PropertyItem({ id, image, title, name }) {
  return (
    <>
      <div className={classes.propertyItemContainer}>
        <Image
          className={classes.img}
          src={`/images/pages/properties/${image}`}
          alt="alt"
          width={1920}
          height={960}
        />
        <div className={classes.infoContainer}>
          <div className={classes.headerContainer}>
            <h2>
              {title} - {name}
            </h2>
            <div className={classes.messageContainer}>
              <p>Contact</p>
              <Image
                className={classes.messageIcon}
                src={messageIcon}
                alt="alt"
              />
            </div>
          </div>
          <div className={classes.subItemContainer}>
            <h4>Description:</h4>
            <p> Nulla id diam eget tortor congue vestibulum.</p>
          </div>
          <div className={classes.subItemContainer}>
            <h4>Price:</h4>
            <p>200,000 €</p>
          </div>

          <div className={classes.iconOuterWrapper}>
            <Link
              href={`/pdfs/properties/Karikan_Realty_Φ19_Project_Book.pdf`}
              download
            >
              <div className={classes.iconContainer}>
                <Image className={classes.icon} src={pdf} alt="alt" />
                <p>Download pdf</p>
              </div>
            </Link>
            <Link
              href={`/pdfs/properties/Karikan_Realty_Φ19_Project_Book.pdf`}
              download
            >
              <div className={classes.iconContainer}>
                <Image className={classes.icon} src={locationIcon} alt="alt" />
                <p>Voula</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
