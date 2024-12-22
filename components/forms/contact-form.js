/** @format */

"use client";
import { useFormState } from "react-dom";
import { useState, useEffect } from "react";
import FormSubmit from "./formsubmit";
import classes from "./contact-form.module.css";
import Image from "next/image";
import contactIcon from "/public/images/icons/envelope.png";
import ModalBackdrop from "@/components/modal-backdrop";

export default function ContactForm({ action, redirection }) {
  const [state, formAction] = useFormState(action, { redirection });
  const [data, setData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    contactNumber: "",
    message: "",
  });
  const [modalState, setModalState] = useState({ ...state });

  useEffect(() => {
    setModalState({ ...state });
  }, [state]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(data)
    console.log(value)

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleModal = () => {
    setModalState(false);
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
      {modalState.submitted && (
        <ModalBackdrop handleModal={handleModal}>
          <div className={classes.modalInnerWrapper}>
            <h2 className={classes.modalHeader}>Thanks for your message!</h2>
          </div>
        </ModalBackdrop>
      )}
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
          <p className={classes.errorD}>Invalid email address number</p>
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
