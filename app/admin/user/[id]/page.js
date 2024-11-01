/** @format */

import { validateRequest } from "@/auth/lucia";
import { getUser } from "@/server/actions/db/client";
import { getProperties } from "@/server/actions/db/properties";
import { redirect } from "next/navigation";
import AdminSubmitForm from "@/components/forms/admin-submit-form";
import { AdminSubmit } from "@/server/actions/admin-submit";
import AdminClientPropertyList from "@/components/admin-components/properties-list";
import classes from "./page.module.css";

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
  console.log(properties, "ADMIN");

  return (
    <>
      <h1>Client details</h1>
      <div className={classes.userDetailsContainer}>
        <h2>User name: </h2>
        <p>{username}</p>
        <hr />
        <h2>First name:</h2>
        <p>{firstname}</p>
        <hr />
        <h2>Last name:</h2>
        <p>{lastname}</p>
        <hr />
        <h2>Email:</h2>
        <p>{email}</p>
        <hr />
        <h2>Company name:</h2>
        <p>{companyname}</p>
        <hr />
        <h2>Phonenumber:</h2>
        <p>{phonenumber}</p>
        <hr />
        <h2>Buyer type:</h2>
        <p>{buyertype}</p>
        <hr />
        <h2>Location:</h2>
        <p>{location}</p>
        <hr />
        <h2>Purchase timeline:</h2>
        <p>{purchasetimeline}</p>
        <hr />
        <h2>Investment interest:</h2>
        <p>{estinvestmentinterest}</p>
        <hr />
        <h2>Previous investment:</h2>
        <p>{previousinvestment}</p>
        <hr />
        <h2>Consulting access status:</h2>
        <p>{consultingaccess}</p>
        <hr />
        <h2>Property access status:</h2>
        <p>{propertyaccess}</p>
      </div>
      <h1>Visible properties</h1>
      <div className={classes.userDetailsContainer}>
        <AdminClientPropertyList properties={properties} />
        <button>Update</button>
        <button>Remove</button>
      </div>
      <h1>Visible consulting</h1>
      <div></div>
      <AdminSubmitForm id={params.id} action={AdminSubmit}></AdminSubmitForm>
    </>
  );
}
