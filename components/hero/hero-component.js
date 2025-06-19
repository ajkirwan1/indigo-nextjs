/** @format */

import Header from "@/components/ui/header/header";
import classes from "./hero-component.module.css";
import Image from "next/image";
import HeroFooter from "../ui/footer/hero-footer";

export default function HeroComponent({
  heroImage,
  altText,
  header,
  footer,
  children,
}) {
  return (
    <>
      <div className={classes.heroWrapper}>
        <div className={classes.imageWrapper}>
          <Image
            priority
            // mobile
            alt={altText}
            src={heroImage}
            className={classes.imageHero}
          />
        </div>
        <div className={classes.formContainerOuterWrapper}>
          {header ? <Header className={classes.heroHeader} /> : null}
          {children}
          {footer ? (
            <div className={classes.footerWrapper}>
              <HeroFooter />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
