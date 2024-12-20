/** @format */

"use client";
import { useFormState } from "react-dom";
import { Spinner } from "@nextui-org/spinner";
import { useState } from "react";
import userIcon from "/public/images/icons/add-user.png";
import Image from "next/image";
import { RegisterMultiPage } from "@/server/actions/submit-multi-register";
import classes from "./register-form.module.css";
import RegistrationButton from "@/components/ui/buttons/registration-button";

export default function RegisterFormPage4({
  action,
  data,
  handlePreviousTab,
  handleInterest,
  handlePreviousInvest,
}) {
  const [state, formAction] = useFormState(action, { data });
  const [submitPending, setsubmitPending] = useState(false);

  const [investmentInterest, setinvestmentInterest] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [previousInvestment, setpreviousInvestment] = useState([false, false]);

  const handleInvestmentInterest = (e) => {
    handleInterest(e);
    const eventSource = e.target.name;

    if (eventSource == "50") {
      setinvestmentInterest([true, false, false, false]);
    }
    if (eventSource == "50-100") {
      setinvestmentInterest([false, true, false, false]);
    }
    if (eventSource == "100-150") {
      setinvestmentInterest([false, false, true, false]);
    }
    if (eventSource == "150+") {
      setinvestmentInterest([false, false, false, true]);
    }
  };

  const handlePreviousInvestment = (e) => {
    handlePreviousInvest(e);
    const eventSource = e.target.name;
    if (eventSource == "yes") {
      setpreviousInvestment([true, false]);
    }
    if (eventSource == "no") {
      setpreviousInvestment([false, true]);
    }
  };

  const handleSubmitForm = () => {
    setsubmitPending(true);
    try {
      RegisterMultiPage(data);
    } catch (error) {
      console.log(error);
    }
  };

  let pending = false;
  return (
    <>
      <div className={classes.headerContainer}>
        <h1>REGISTER</h1>
        <Image className={classes.iconRegister} src={userIcon} alt="alt" />
        <h2>4/4</h2>
      </div>
      <form className={classes.registerForm3} action={formAction}>
        <label>Estimated investment interest - 1,000s €</label>
        <div className={classes.tickRow}>
          <div>
            <label>Up to 50</label>
            <input
              type="checkbox"
              name="50"
              checked={investmentInterest[0]}
              onChange={(event) => handleInvestmentInterest(event)}
            ></input>
          </div>
          <div>
            <label>50 - 100</label>
            <input
              type="checkbox"
              name="50-100"
              checked={investmentInterest[1]}
              onChange={(event) => handleInvestmentInterest(event)}
            ></input>
          </div>
          <div>
            <label>100 - 150</label>
            <input
              type="checkbox"
              name="100-150"
              checked={investmentInterest[2]}
              onChange={(event) => handleInvestmentInterest(event)}
            ></input>
          </div>
          <div>
            <label>More than 150</label>
            <input
              type="checkbox"
              name="150+"
              checked={investmentInterest[3]}
              onChange={(event) => handleInvestmentInterest(event)}
            ></input>
          </div>
        </div>
        <label>Have you previously invested in Greek real estate?</label>
        <div className={classes.tickRow}>
          <div>
            <label>Yes</label>
            <input
              type="checkbox"
              name="yes"
              checked={previousInvestment[0]}
              onChange={(event) => handlePreviousInvestment(event)}
            ></input>
          </div>
          <div>
            <label>No</label>
            <input
              type="checkbox"
              name="no"
              checked={previousInvestment[1]}
              onChange={(event) => handlePreviousInvestment(event)}
            ></input>
          </div>
        </div>
      </form>
      <div className={classes.buttonWrapper}>
        <RegistrationButton onClick={handlePreviousTab}>
          PREVIOUS
        </RegistrationButton>
        <RegistrationButton onClick={() => handleSubmitForm()}>
          SUBMIT
        </RegistrationButton>
      </div>
      {submitPending ? (
        <div className={classes.spinner}>
          <Spinner color="secondary" size="lg" />
        </div>
      ) : null}

      {/* <div className={classes.submitButtonContainer}>
          <FormSubmit />
        </div>
                <RegistrationButton onClick={handlePreviousTab}>
          Previous
        </RegistrationButton>
        <RegistrationButton
                >
          Next
        </RegistrationButton>
      
      {/* {state.errors && (
          <ul>
            {state.errors.map((error) => (
              <li key={error}>
                <p>{error}</p>
              </li>
            ))}
          </ul>
        )} */}
    </>
  );
}
