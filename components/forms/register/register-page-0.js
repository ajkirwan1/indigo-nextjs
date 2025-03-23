/** @format */

"use client";
import classes from "./register-form.module.css";
import RegistrationButton from "@/components/ui/buttons/registration-button";
import Image from "next/image";
import userIcon from "/public/images/icons/add-user.png";
export default function RegisterFormPage0New({
  handleNextTab,
}) {

  const handleNext = () => {
    handleNextTab();
  };

  return (
    <>
      <div className={classes.headerContainer}>
        <h1>REGISTER</h1>
            <Image className={classes.iconRegister} src={userIcon} alt="alt" />
      </div>
      <div className={classes.infoWrapper}>
        <h2>
          Unlock Exclusive Access to Our Comprehensive Property Development
          Services
        </h2>
        <p>
          By providing your details, you can gain access to tailored property
          development services, including expert consultancy, investment
          opportunities, and project management. We will guide you from
          planning to completion, while unlocking exclusive opportunities like
          redevelopment projects and residency options such as the Golden Visa
          program, ensuring informed decisions and successful outcomes.
        </p>
      </div>
      <div className={classes.buttonWrapper}>
        <RegistrationButton onClick={handleNext}>Next</RegistrationButton>
      </div>
    </>
  );
}
