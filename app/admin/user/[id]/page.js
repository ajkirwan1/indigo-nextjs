/** @format */

import { validateRequest } from "@/auth/lucia";
import { getUser } from "@/server/actions/db/client";
import { getProperties } from "@/server/actions/db/properties";
import { redirect } from "next/navigation";
import AccordionPersonal from "@/components/surfaces/accordian";
import AdminClientPropertyList from "@/components/admin-components/properties-list";
import Button from "@/components/ui/button";
import classes from "./page.module.css";
import Link from "next/link";

export default async function AdminClientPage({ params }) {
  const { user } = await validateRequest();

  if (!user) {
    redirect("/");
  }
  if (user?.adminaccess != 2) {
    redirect("/");
  }
  const {
    username,
    firstname,
    lastname,
    companyname,
    phonenumber,
    buyertype,
    location,
    purchasetimeline,
    estinvestmentinterest,
    previousinvestment,
    email,
    propertyaccess,
    consultingaccess,
  } = await getUser(params.id);

  const properties = await getProperties(params.id);
  // console.log(properties, "ADMIN");

  const PersonalDetails = () => {
    return (
      <div className={classes.text}>
        <div className={classes.row}>
          <p>Username: &nbsp;&nbsp;</p>
          <p>{username}</p>
        </div>
        <div className={classes.row}>
          <p>First name: &nbsp;&nbsp;</p>
          <p>{firstname}</p>
        </div>
        <div className={classes.row}>
          <p>Last name: &nbsp;&nbsp;</p>
          <p>{lastname}</p>
        </div>
        <div className={classes.row}>
          <p>Email: &nbsp;&nbsp;</p>
          <p>{email}</p>
        </div>
      </div>
    );
  };

  const RegistrationDetails = () => {
    return (
      <div className={classes.text}>
        <div className={classes.row}>
          <p>Company name: &nbsp;&nbsp;</p>
          <p>{companyname}</p>
        </div>
        <div className={classes.row}>
          <p>Phone number: &nbsp;&nbsp;</p>
          <p>{phonenumber}</p>
        </div>
        <div className={classes.row}>
          <p>Buyer type: &nbsp;&nbsp;</p>
          <p>{buyertype}</p>
        </div>
        <div className={classes.row}>
          <p>Location: &nbsp;&nbsp;</p>
          <p>{location}</p>
        </div>
        <div className={classes.row}>
          <p>Purchase timeline: &nbsp;&nbsp;</p>
          <p>{purchasetimeline}</p>
        </div>
        <div className={classes.row}>
          <p>Investment interest: &nbsp;&nbsp;</p>
          <p>{estinvestmentinterest}</p>
        </div>
        <div className={classes.row}>
          <p>Previous investment in Greece: &nbsp;&nbsp;</p>
          <p>{previousinvestment}</p>
        </div>
      </div>
    );
  };

  const PropertyDetails = () => {
    return (
      <div className={classes.text}>
        <AdminClientPropertyList properties={properties} />
        <div className={classes.buttonContainer}>
          <div className="submit-button-container">
            <Link href={`/admin/user/${params.id}/properties`}>
              UPDATE RECORDS
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const data = [
    {
      header: "Personal details",
      content: <PersonalDetails />,
    },
    {
      header: "Registration information",
      content: <RegistrationDetails />,
    },
    {
      header: "Property access",
      content: <PropertyDetails />,
    },
  ];

  return (
    <div className={classes.pageContainer}>
      <div className={classes.subHeader}>
        <h1>CLIENT DETAILS</h1>
      </div>
      <AccordionPersonal data={data}></AccordionPersonal>
    </div>
  );
}
