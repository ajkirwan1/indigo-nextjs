/** @format */
import Image from "next/image";
import classes from "./service-item.module.css"
import { whatWeDoData } from "@/data/what-we-do-data";

export default function ServiceItem({ data, handleModal, infoActive, modalIndex, className }) {

  return (
    <div
      className={
        !(infoActive && data.id == modalIndex)
          ? `${classes.itemContainer}`
          : null
      }
    >
      <div className={classes.imageContainer}>
        <Image
          className={classes.image}
          src={data.image}
          alt="alt"
          width={1000}
          height={1250}
        />
        <div className={classes.moreContainer}>
          {infoActive && data.id == modalIndex ? null : <h2>{data.title}</h2>}
        </div>
        <div
          className={
            infoActive && data.id == modalIndex
              ? `${classes.infoWrapper} ${classes.infoWrapperActive}`
              : `${classes.infoWrapper} `
          }
          onClick={
            infoActive && data.id == modalIndex
              ? null
              : () => handleModal(data.id)
          }
        >
          {!(infoActive && data.id == modalIndex) ? (
            <div
              className={classes.popupContainerClosed}
              // onClick={() => handleModal(data.id)}
            >
              <p>More</p>
            </div>
          ) : (
            <div className={classes.popupContainerOpen}>
              <div>
                <h2>{whatWeDoData[modalIndex - 1].title}</h2>
                <p>{whatWeDoData[modalIndex - 1].info.paragraph}</p>
                <p>{whatWeDoData[modalIndex - 1].info.paragraph2}</p>
                <p>{whatWeDoData[modalIndex - 1].info.paragraph3}</p>
              </div>
              <div
                className={classes.lessContainer}
                onClick={() => handleModal(data.id)}
              >
                <p>Less</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
