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
      <div className={classes.heroWrapper}>
        <div className={classes.imageWrapper}>
          <Image
            priority
            alt={altText}
            src={heroImage}
            className={classes.imageHero}
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className={classes.formContainerOuterWrapper}>
          {header && <Header className={classes.heroHeader}></Header>}
          <div className={classes.formcontainer}>{children}</div>
        </div>
      </div>
    </>
  );
}
