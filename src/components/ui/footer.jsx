/** @format */

import classes from "../../assets/styles/Footer.module.css";
export function Footer() {
  return (
    <footer className={classes.footer}>
      <ul>
        <li>COPYRIGHT © INDIGO 2024</li>
        <li>Privacy Policy</li>
        <li>Developed By</li>
        <li>
          <img className={classes.aklogo} src="./images/aklogo.png"></img>
        </li>
      </ul>
    </footer>
  );
}
