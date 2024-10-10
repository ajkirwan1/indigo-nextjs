/** @format */

import Header from "@/components/ui/header/header";
import Footer from "@/components/ui/footer";
import classes from "./page.module.css";


export default async function RegisterPage() {

  return (
    <>
  <div className={classes.registerPageContainer}>
        <div className={classes.hero}>
        <Header className={classes.header}></Header>
          <div className={classes.formcontainer}>
         <h1>Form has been submitted and is pending</h1>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
