/** @format */
import Header from "@/components/ui/header/header";
import classes from "./hero-component.module.css";
import Image from "next/image";

export default async function HeroComponent({
  heroImage,
  altText,
  header,
  children,
}) {
  return (
    <>
      {/* <div className={mobile == "mobile" ? classes.hide : null}> */}
        <div className={classes.heroWrapper}>
          <div className={classes.imageWrapper}>
            <Image
              priority
              // mobile
              alt={altText}
              src={heroImage}
              className={classes.imageHero}
              // objectFit="cover"
              // objectPosition="center"
            />
          </div>
          <div className={classes.formContainerOuterWrapper}>
            {header ? <div className={classes.headerOverlap}>{header}</div> : null}
          

            {children}
            {/* <div className={classes.formcontainer}>{children}</div> */}
          </div>
        </div>
      {/* </div> */}
    </>
  );
}
