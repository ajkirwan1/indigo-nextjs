import classes from "./submit-button.module.css";
export default function SubmitButton({ children }) {
  return (
    <>
      <button className={classes.button}>
        {children}
        <img className={classes.arrow} src="/images/arrow-right.png"></img>
      </button>
    </>
  );
}
