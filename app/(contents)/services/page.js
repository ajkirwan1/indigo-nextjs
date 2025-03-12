/** @format */

import classes from "./page.module.css";
import WhatWeDoMobileSwiper from "@/components/pages/what-we-do/what-we-do-swiper-mobile";
import ServiceItemList from "@/components/pages/what-we-do/service-item-list";

export const metadata = {
  title: "Services | Indigo Consulting | Real Estate Development & Consulting",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "real estate consulting",
    "luxury real estate Greece",
    "Greece real estate development",
    "redevelopment projects Greece",
    "Golden Visa consulting",
    "market analysis Greece",
    "property development Greece",
    "Indigo Consulting services",
    "real estate investment consulting",
    "real estate advisory services",
  ],
  description:
    "Explore the range of services offered by Indigo Consulting, including real estate development, luxury property consulting, Golden Visa assistance, market analysis, and redevelopment projects in Greece. Let us help you navigate the dynamic Greek real estate market.",
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
