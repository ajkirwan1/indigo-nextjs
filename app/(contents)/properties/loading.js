import { Spinner } from "@nextui-org/spinner";
import classes from "./page.module.css";
// import { Loading } from "@nextui-org/react";
export default function LoadingProperties() {
  return (
    <>
      <div className={classes.subHeader}>
        <h1>PROPERTIES FOR SALE</h1>
      </div>
      <p>Please wait while we find your properties</p>

      <Spinner color="default" size="lg" className="spinner" />

      {/* <Loading /> */}
    </>
  );
}
