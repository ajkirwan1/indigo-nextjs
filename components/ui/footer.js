/** @format */

import classes from "./footer.module.css";
export default function Footer() {
  return (
    <footer className={classes.footer}>
      <ul>
        <li>COPYRIGHT © INDIGO 2024</li>
        <li>Privacy Policy</li>
        <li className={classes.flexlist}>
          Developed By
          <img className={classes.aklogo} src="./images/aklogo.png"></img>{" "}
        </li>
      </ul>
    </footer>
  );
}
