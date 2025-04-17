/** @format */
import IndigoLogo from "/public/images/logodark.jpg";
import classes from "./header.module.css";
import Link from "next/link";
import Image from "next/image";

export default function ImageHeader() {
  return (
    <>
          <Link href="/">
            <Image
              priority
              src={IndigoLogo}
              alt="The logo for indigo"
              className={classes.logoIndigo}
            />
          </Link>
    </>
  );
}
