/** @format */
import classes from "./page.module.css"
import Button from "@/components/ui/button";

export default function WhatWeDoPage() {
  return (
    <>
      <div className={classes.subHeader}>
          <h1>WHAT WE DO</h1>
          </div>
        <section className={classes.section1}>
          <div className={classes.sectionContainer}>
            <div className={classes.paragraphWrapper}>
              <h1>Development Opportunities Sourcing </h1>
              <p>
                Sourcing Development Opportunities focuses on empowering
                investors by sourcing and selecting prime real estate
                opportunities based on specific criteria. 
              </p>
              <p>
                Through meticulous analysis, strategic planning, and seamless
                execution of real estate projects, Indigo aims to tailor
                propositions based on investor profile as portfolio, budgets,
                lock up period, etc. ensuring reliable project plans aligned
                with market demands and trends
              </p>
            </div>
            <img src="./images/pages/what-we-do/greece12.jpg" />
          </div>
          <div className={classes.sectionContainer}>
            <img src="./images/pages/what-we-do/handshakecrop.jpg" />
            <div className={classes.paragraphWrapperRight}>
              <h1>Development Consultancy</h1>
              <p>
                Indigo offers expert guidance, insights from the knowledge
                economy, strategic planning, informed decision-making support,
                and aims to be a trusted development partner.
              </p>
            </div>
          </div>
          <div className={classes.sectionContainer}>
            <div className={classes.paragraphWrapper}>
              <h1>Development Project Management</h1>
              <p>
                Project Development Management offers customizable services
                tailored to the specific needs and goals of clients or
                investors. 
              </p>
              <p>
                Clients can choose from a complete package or opt for specific
                services, ensuring effectiveness in development management
                proposals.
              </p>
            </div>
            <img
              className={classes.image3}
              src="./images/pages/what-we-do/constructioncrop.jpg"
            />
          </div>
          <div className={classes.subSection}>
            <img
              className={classes.icon}
              src="./images/pages/what-we-do/graph5.png"
            />
            <h1>Market Analysis</h1>
            <div className={classes.paragraphWrapperCentre}>
              <p>
                Integrated with our consultancy and project management services,
                we provide comprehensive support from inception to project
                delivery, empowering investors to make informed decisions and
                maximize their investments
              </p>
              <p>
                Our company conducts comprehensive market analyses, providing
                invaluable insights into residential development trends.
              </p>
              <p>
                Leveraging this data, we offer tailored studies to potential
                investors, guiding them through plot selection, potentialities
                and development options.
              </p>
              <Button href="/contact-us">CONTACT US</Button>
            </div>
          </div>
        </section>
        <section className={classes.section2}>
          <div className={classes.sectionContainer}>
            <img
              className={classes.img}
              src="./images/pages/what-we-do/elinikocrop.jpg"
            />
            <div className={classes.paragraphWrapperRight}>
              <h1>Redevelopment Development Projects</h1>
              <p>
                Indigo's founder, an experienced investor, has led visionary
                transformations in residential projects through previous
                companies, focusing on flipping properties for substantial
                returns on investment.  These endeavors illustrate a history of
                successful ventures and innovative strategies in real estate.
              </p>
              <p>
                Committed to revitalizing urban spaces, we've transformed
                ordinary properties into luxurious minimalist havens,
                specializing primarily in residential properties with ventures
                into commercial projects.  Our proven portfolio spans Greece and
                beyond, meticulously crafted for resale to showcase our
                commitment to excellence and financial success.
              </p>
              <Button href="/projects">SAMPLE PROJECTS</Button>
            </div>
          </div>
        </section>
        <section className={classes.section3}>
          <div className={classes.wrapper3}></div>
          <img
            className={classes.icon}
            src="./images/pages/what-we-do/design4.png"
          />
          <h1>Property Management</h1>

          <div className={classes.sectionContainer}>
            <h2>
              Experience hassle-free property management tailored for your Greek
              properties. From maintenance to rental collection and payments,
              entrust us with the care and oversight of your investments.
            </h2>
          </div>
          <Button href="/properties">PROPERTIES</Button>
        </section>
        <section className={classes.section4}>
          <div className={classes.sectionContainer}>
            <img className src="./images/pages/what-we-do/legalcrop.jpg" />
            <div className={classes.paragraphWrapperRight}>
              <h1>Legal & Notarial Services</h1>
              <p>
                Access expert Legal & Notarial Services for your real estate
                needs through our trusted affiliates. Streamline transactions,
                contracts, and legal documentation with precision and
                confidence, ensuring seamless real estate processes from start
                to finish.
              </p>
            </div>
          </div>
          <section>
            <div className={classes.sectionContainer}>
              <div className={classes.paragraphWrapper}>
                <h1>Residency - Golden Visa</h1>
                <p>
                  Unlock your path to residency in Greece with our Golden Visa
                  Consulting services. Let us guide you through the intricacies
                  of obtaining a residential visa, ensuring a smooth and
                  efficient process.  Contact us today for personalized
                  assistance and expert advice.
                </p>
              </div>
              <img src="./images/pages/what-we-do/goldencrop.jpg" />
            </div>
          </section>
        </section>

    </>
  );
}
