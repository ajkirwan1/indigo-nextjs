/** @format */

import Header from "@/components/ui/header/header";
import classes from "./page.module.css";
import HomepageHeros from "@/components/pages/homepage/home-page-heros";

export default function Homepage() {

  return (
    <>
      <Header className={classes.heroHeader}></Header>
      <HomepageHeros />
    </>
  );
}
