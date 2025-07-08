/** @format */

"use client";
import classes from "./register-form.module.css";
import RegistrationButton from "@/components/ui/buttons/registration-button";
import Image from "next/image";
import userIcon from "/public/images/icons/add-user.png";
export default function RegisterFormPage0New({ handleNextTab }) {
  const handleNext = () => {
    handleNextTab();
  };

  return (
    <>
      <div className={classes.headerContainer}>
        <h1>REGISTER</h1>
        <Image className={classes.iconRegister} src={userIcon} alt="A user registration icon" />
      </div>
      <div className={classes.infoWrapper}>
        <h2>
          Unlock Exclusive Access to Our Comprehensive Property Development
          Services
        </h2>
        <p>
          By sharing your details, you&apos;ll access tailored property development
          services, including consultancy, investment opportunities, and project
          management. We&apos;ll guide you through planning to completion, offering
          exclusive options like redevelopment projects and the Golden Visa
          program.
        </p>
      </div>
      <div className={classes.buttonWrapper}>
        <RegistrationButton onClick={handleNext}>Next</RegistrationButton>
      </div>
    </>
  );
}
