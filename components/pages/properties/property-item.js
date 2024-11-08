/** @format */

import Link from "next/link";
import Image from "next/image";
import pdf from "/public/images/icons/icons8-pdf-100.png";
import locationIcon from "/public/images/icons/icons8-location-pin-100.png";

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
          <h2>
            {title} - {name}
          </h2>
          <Link
            href={`/pdfs/properties/Karikan_Realty_Φ19_Project_Book.pdf`}
            download
          >
            <div className={classes.iconContainer}>
              <Image
                className={classes.icon}
                src={pdf}
                alt="alt"
                width={100}
                height={100}
              />
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
          <h4>Description:</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            suscipit lacinia massa, in eleifend dui tristique at. Nulla id diam
            eget tortor congue vestibulum.
          </p>
          <h4>Price:</h4>
          <p>200,000 €</p>
        </div>
      </div>
    </>
  );
}
