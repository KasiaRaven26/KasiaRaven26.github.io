/** @format */
import { Link } from "react-router-dom";
import classes from "../assets/styles/Button.module.css";
export function Button({ children }) {
  return (
    <Link className={classes.link}>
      <div className={classes.wrapper}>
        <button className={classes.button} type="submit">
          {children}
        </button>
        <img className={classes.arrow} src="./images/arrow-right.png"></img>
      </div>
    </Link>
  );
}
