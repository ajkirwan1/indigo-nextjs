/** @format */
"use client";
import { getUser } from "@/server/actions/db/client";
import { getProperties } from "@/server/actions/db/properties";
import AccordionPersonal from "@/components/surfaces/accordian";
import classes from "./admin-user-info.module.css";
import GetPropertyPdfNew from "@/components/forms/admin/properties/get-property-pdf-new";
import Button from "@/components/ui/button";
import { useState } from "react";
import ModalBackdrop from "@/components/modal-backdrop";
import Link from "next/link";

export default function AdminUserInfo({ userInfo }) {
  const [modalOpen, setModalOpen] = useState(false);

  const {
    id,
    name,
    email,
    phoneNumber,
    buyertype,
    location,
    purchaseTimeline,
    investmentInterest,
    investmentRange,
    previousInvestment,
    registration,
    pdfs,
  } = userInfo;
  
  const PersonalDetails = () => {
    return (
      <div className={classes.text}>
        <div className={classes.row}>
          <p>Name: &nbsp;&nbsp;</p>
          <p>{name}</p>
        </div>
        <div className={classes.row}>
          <p>Phone number: &nbsp;&nbsp;</p>
          <p>{phoneNumber}</p>
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
          <p>Name: &nbsp;&nbsp;</p>
          <p>{name}</p>
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
          <p>{purchaseTimeline}</p>
        </div>
        <div className={classes.row}>
          <p>Investment interest: &nbsp;&nbsp;</p>
          <p>{investmentInterest}</p>
        </div>
        <div className={classes.row}>
          <p>Previous investment in Greece: &nbsp;&nbsp;</p>
          <p>{investmentRange}</p>
        </div>
        <div className={classes.row}>
          <p>Previous investment in Greece: &nbsp;&nbsp;</p>
          <p>{previousInvestment}</p>
        </div>
      </div>
    );
  };

  const PropertyDetails = () => {
    return (
      <div className={classes.text}>
        {registration == "pending" && (
          <p>The User&apos;s registration is pending</p>
        )}
        {registration === "accepted" && (
          <>
            <p>Here is the list of documents accessible to the client:</p>
            <ul>
              {pdfs?.map((element, index) => (
                <li key={index}>
                  <Link href={element.url}>{element.name}</Link>
                </li>
              ))}
            </ul>
          </>
        )}
        <div className={classes.buttonContainer}>
          <div className="submit-button-container">
            <Button onClick={toggleModal}>Manage</Button>
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
      header: "Manage access",
      content: <PropertyDetails />,
    },
  ];

  const toggleModal = () => {
    setModalOpen((val) => !val);
  };

  return (
    <>
      {modalOpen && (
        <div>
          <ModalBackdrop handleModal={toggleModal}></ModalBackdrop>
          <GetPropertyPdfNew userId={id} pdfs={pdfs} toggleModal={toggleModal}/>
        </div>
      )}
      <div className={classes.subHeader}>
        <h1>CLIENT DETAILS</h1>
      </div>
      <AccordionPersonal data={data}></AccordionPersonal>
    </>
  );
}
