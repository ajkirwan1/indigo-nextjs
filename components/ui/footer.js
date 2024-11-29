/** @format */

import Image from "next/image";
import aklogo from "/public//images/aklogo.png";
import shareicon from "/public/images/icons/iconshare.svg";
import classes from "./footer.module.css";
export default function Footer() {
  return (
    <footer className={classes.footer}>
      <ul>
        <li>
          <Image
            src={shareicon}
            alt="An icon showing the share symbol"
            className={classes.shareIcon}
          />
        </li>
        <li>COPYRIGHT © INDIGO 2024</li>
        <li>Privacy Policy</li>
        <li className={classes.flexlist}>
          Developed By
          <Image src={aklogo} alt="A&K logo" className={classes.aklogo} />
        </li>
      </ul>
    </footer>
  );
}
