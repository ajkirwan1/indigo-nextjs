/** @format */

"use client";
import { useFormState } from "react-dom";
import { useState } from "react";
import FormSubmit from "./formsubmit";
import classes from "./contact-form.module.css";
import Image from "next/image";
import contactIcon from "/public/images/icons/envelope.png";
import ModalBackdrop from "@/components/modal-backdrop";
import Link from "next/link";
import Button from "../ui/button";

const initialState = { errorMessage: "", errors: [], submitted: false };

function MessageForm({ formAction, data, handleChange, state }) {
  return (
    <>
      <h2>MESSAGE</h2>
      <Image alt="icon" src={contactIcon} className={classes.contactIcon} />
      <form className={classes.loginForm} action={formAction}>
        <div className={`${classes.formItemContainer} ${classes.ItemA}`}>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={data.firstName}
            onChange={handleChange}
          />
        </div>
        {state.errors?.find((item) => item.errorType == "firstName") ? (
          <p className={classes.errorA}>Invalid first name</p>
        ) : null}
        <div className={`${classes.formItemContainer} ${classes.ItemB}`}>
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={data.lastName}
            onChange={handleChange}
          />
        </div>
        {state.errors?.find((item) => item.errorType == "lastName") && (
          <p className={classes.errorB}>Invalid last name</p>
        )}
        <div className={`${classes.formItemContainer} ${classes.ItemC}`}>
          <input
            type="text"
            name="contactNumber"
            placeholder="Contact number"
            value={data.contactNumber}
            onChange={handleChange}
          />
        </div>
        {state.errors?.find((item) => item.errorType == "contactNumber") && (
          <p className={classes.errorC}>Invalid contact number</p>
        )}
        <div className={`${classes.formItemContainer} ${classes.ItemD}`}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        {state.errors?.find((item) => item.errorType == "email") && (
          <p className={classes.errorD}>Invalid email address</p>
        )}
        <div
          className={`${classes.formItemContainer} ${classes.input} ${classes.ItemE}`}
        >
          <textarea
            type="textArea"
            rows="5"
            cols="50"
            name="message"
            placeholder="Message"
            value={data.message}
            onChange={handleChange}
          />
        </div>
        {state.errors?.find((item) => item.errorType == "message") && (
          <p className={classes.errorE}>Invalid message</p>
        )}
        <div className={`${classes.submitButtonContainer} ${classes.ItemF}`}>
          <FormSubmit />
        </div>
      </form>
    </>
  );
}

export default function ContactForm({ action }) {
  const [state, formAction] = useFormState(action, initialState);
  const [data, setData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    contactNumber: "",
    message: "",
  });
  // const [modalState, setModalState] = useState( {...initialState} );

  // useEffect(() => {
  //   setModalState({ ...initialState });
  // }, [state]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleModal = () => {
    state.submitted = false;
    setData({
      email: "",
      firstName: "",
      lastName: "",
      contactNumber: "",
      message: "",
    });
  };

  const handleReset = () => {
    state.errorMessage = "";
    setData({
      email: "",
      firstName: "",
      lastName: "",
      contactNumber: "",
      message: "",
    });
  };

  return (
    <>
      {state.submitted && (
        <ModalBackdrop handleModal={handleModal}>
          <div className={classes.modalInnerWrapper}>
            <h2 className={classes.modalHeader}>Thanks for your message !</h2>
            <p>
              One of our team members will respond to your message as soon as
              possible
            </p>
          </div>
        </ModalBackdrop>
      )}
      {!state.errorMessage ? (
        <MessageForm
          formAction={formAction}
          handleChange={handleChange}
          data={data}
          state={state}
        />
      ) : (
        <div className={classes.errorLayout}>
          {/* <h2>Your message was not sent</h2> */}
          <p>{state.errorMessage}</p>
          <div className={classes.submitButtonContainer}>
            <Button onClick={handleReset}>Try again</Button>
          </div>
          <Link href="/">Return to home page</Link>
        </div>
      )}
    </>
  );
}
