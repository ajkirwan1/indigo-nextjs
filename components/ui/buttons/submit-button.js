import classes from "./submit-button.module.css";
export function SubmitButton({ children }) {
  return (
    <>
      <button className={classes.button} type="submit">
        {children}
        <img className={classes.arrow} src="./images/arrow-right.png"></img>
      </button>
    </>
  );
}
