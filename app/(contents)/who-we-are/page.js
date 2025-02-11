/** @format */
// "use client";

import classes from "./page.module.css";
import Image from "next/image";
import emmanImage from "/public/images/pages/who-we-are/emmanuel5.jpg";

export const metadata = {
  title: "Who We Are",
  keywords: [
    "Greece",
    "Development",
    "Consulting",
    "Luxury",
    "Redevelopment",
    "Golden visa",
    "Market Analysis",
    "Architect",
    "Besboke",
    "Lawyer",
    "Notary",
    "Investment",
    "CEO",
    "Experience",
    "Real Estate",
  ],
  description:
    "Indigo consulting web apllication who we are page. Vistors can read about Indigo Consulting's CEO, Emmanuel Petrakis, and the information about the company",
};

function LargeSection() {
  return (
    <div className={classes.sectionContainer}>
      {/* <h2>INDIGO</h2> */}
      <div className={classes.paragraphWrapper}>
        <p>
          Established in 2021 by Emmanuel Petrakis. <b>Indigo Consulting</b> stands as
          a bespoke real estate consulting firm capitalizing on strategic
          investment opportunities boasting <b>25 years of experience and local
          knowledge</b>.
        </p>
        <p>
          Indigo serves as a <b>trusted</b> service company to investors, providing
          expertise consulting in residential development. The company’s
          multi-disciplinary team, comprised of investment, finance and realty
          professionals, collaborates with reputable firms such as developers,
          architects, lawyers, notaries and more.
        </p>
        <p>
          The clientele includes private investors and investment funds, both
          local and foreign, seeking <b>tailored</b> solutions for various real estate
          ventures. Indigo emphasizes in <b>transparency</b>, <b>low-risk strategies</b>, and
          a <b>commitment</b> to guide clients through every step of their investment
          projects in Greece.
        </p>
      </div>
      <span></span>
      <div className={classes.top}>
        <div className={classes.imageOuterWrapper}>
          <Image
            className={classes.image}
            src={emmanImage}
            alt="An image showing Emmanuel Petrakis, wearing a hard-hat and high vis vest, while working on a building site"
            width={2048}
            height={1400}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
          <div className={classes.paragraphWrapperRight}>
            <p>
            <b>Emmanuel Petrakis</b> is an experienced Company Director and CEO with
              expertise in corporate and maritime law. He specializes in
              selecting high-value residential, commercial, and industrial real
              estate assets to meet investor objectives and portfolio
              strategies.
            </p>
            <p>
              An active real estate investor with deep knowledge of the Greek
              property market, Emmanuel leads successful projects with the
              support of his experienced team.
            </p>
            <p>
              His focus on ROI, project management, contract negotiation, and
              regulatory compliance ensures every acquisition is transformed
              into a high-performing investment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WhoWeArePage() {
  return (
    <>
      <div className={classes.pageWrapper}>
        <div className="header">
          <h1>WHO WE ARE</h1>
          <hr />
        </div>
        <LargeSection />
      </div>
    </>
  );
}
