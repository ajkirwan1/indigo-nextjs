/** @format */

import Image from "next/image";
import aklogo from "/public//images/aklogo.png";
import ShareComponent from "../share/share-component";
import classes from "./footer.module.css";
import Link from "next/link";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <ul>
        <li>
          <ShareComponent
            white="true"
            text={"Indigo Consulting Homepage"}
            url={baseUrl}
            title={"Indigo Consulting Homepage"}
          />
        </li>
        <li>COPYRIGHT © INDIGO 2024</li>
        <li>
          <Link href="/privacy">Privacy Policy</Link>
        </li>
        <li className={classes.flexlist}>
          Developed By
          <Image src={aklogo} alt="A&K logo" className={classes.aklogo} />
        </li>
      </ul>
    </footer>
  );
}
