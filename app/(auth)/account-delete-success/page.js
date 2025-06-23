/** @format */
import HeroComponent from "@/components/hero/hero-component";
import classes from "./page.module.css"
import heroImage from "/public/images/croppednight.jpg";

export default async function AccountDeleteSuccess() {
    return (
      <div className={classes.pageWrapper}>
        <HeroComponent heroImage={heroImage} altText="Alt text" header footer>
          <div className={classes.formcontainer}>
            Delete Account page
          </div>
        </HeroComponent>
      </div>
    );
  } 
