/** @format */
"use server";
import { redirect } from "next/navigation";
import { validateRequest } from "/auth/lucia";
import { getProperties } from "@/server/actions/db/properties";
import classes from "./page.module.css";
import { headers } from "next/headers";
import Link from "next/link";
import Image from "next/image";

// async function Properties({ userId }) {
//   await new Promise((resolve) => setTimeout(resolve, 3000));
//   const properties = await getProperties(userId);
//   return <PropertyList properties={properties} />;
// }

function PropertyItem({ data }) {
  const { title, image } = data;

  return (
    // <Link href={`projects/${slug}`}>
    <>
      <div className={classes.ProjectItemWrapper}>
        <div className={classes.imageContainer}>
          <Image
            className={classes.image}
            src={`/images/pages/properties/${image}`}
            alt="alt"
            width={800}
            height={600}
          />
        </div>
        <div className={classes.infoWrapper}>
          <h2>{title}</h2>
          {/* <p>INVESTMENT RETURN - {investmentReturn}</p> */}
          {/* <p>{description}</p> */}
        </div>
        <div className={classes.subItemContainer}>
          <h4>Description:</h4>
          <p> Nulla id diam eget tortor congue vestibulum.</p>
        </div>
        <div className={classes.subItemContainer}>
          <h4>Price:</h4>
          <p>200,000 €</p>
        </div>
      </div>
    </>

    // </Link>
    // <div>asdasdasd</div>
  );
}

export default async function PropertiesPage() {
  const { user } = await validateRequest();
  const headerList = headers();
  const pathname = headerList.get("x-current-path");

  if (!user) {
    redirect(`/login?next=${pathname}`);
  }
  const userId = user.id;

  const result = await getProperties(userId);
  console.log(result);

  return (
    <>
      <title>INDIGO Consulting Properties Page</title>
      <div className="header">
        <h1>PROPERTIES FOR SALE</h1>
        <hr />
      </div>
      <div className={classes.subSubHeader}>
        <p>
          Welcome to the luxurious selection of properties curated by Indigo
          Consulting.Explore ongoing developments meticulously managed by our
          consultancy services, tailored for discerning investors. Discover
          carefully selected future projects endorsed by investors in
          collaboration with Indigo Consulting.From developers not directly
          affiliated with our consultancy.
        </p>
      </div>
      <div className={classes.blogPageContainer}>
        {result.map((element) => (
          <PropertyItem key={element} data={element} />
        ))}
      </div>
    </>
  );
}
