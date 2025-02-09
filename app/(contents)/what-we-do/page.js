/** @format */

import classes from "./page.module.css";
import WhatWeDoMobileSwiper from "@/components/pages/what-we-do/what-we-do-swiper-mobile";
import ServiceItemList from "@/components/pages/what-we-do/service-item-list";

export const metadata = {
  title: "Services",
  keywords: [
    "Greece",
    "Development",
    "Consulting",
    "Luxury",
    "Redevelopment",
    "Golden visa",
    "Market Analysis",
    "Email",
    "Conact",
    "Phone number",
  ],
  description:
    "Indigo consulting web application services page. Vistors can read about the services provided by Indigo Consulting",
};

export default function ServicePage() {
  return (
    <>
      <div className="header">
        <h1>SERVICES</h1>
        <hr />
      </div>

      <div className={classes.mobileWrapper}>
        <section className={classes.page}>
          <WhatWeDoMobileSwiper />
        </section>
      </div>
      <div className={classes.desktopWrapper}>
        <section className={classes.page}>
          <ServiceItemList />
        </section>
      </div>
    </>
  );
}
