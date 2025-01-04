/** @format */

"use client";
import { useFormState } from "react-dom";
import { useState, useEffect } from "react";
import FormSubmit from "../formsubmit";
import classes from "./newsletter-form.module.css";
import Image from "next/image";
import imageIcon from "/public/images/icons/icons8-plus.svg";
import ModalBackdrop from "@/components/modal-backdrop";
import Button from "@/components/ui/button";

export default function NewsletterForm({ action }) {
  const initialState = { errorMessage: "", submitted: false };
  const [state, formAction] = useFormState(action, initialState);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [data, setData] = useState({ email: "" });
  const [modalState, setModalState] = useState({ ...state });

  useEffect(() => {
    setModalState({ ...state });
  }, [state]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (value.trim().length > 3 && value.includes("@") && value.includes(".")) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleReset = () => {
    state.errorMessage = "";
    setIsButtonDisabled(true);
    setData({ email: "" });
  };

  const handleModal = () => {
    setModalState(false);
    setData({ email: "" });
  };

  return (
    <>
      {modalState.submitted && (
        <ModalBackdrop handleModal={handleModal}>
          <div className={classes.modalInnerWrapper}>
            <h2 className={classes.modalHeader}>
              THANK YOU FOR JOINING OUR NEWSLETTER
            </h2>
          </div>
        </ModalBackdrop>
      )}
      {!state.errorMessage ? (
        <form action={formAction}>
          <div className={classes.formContainer}>
            <Image
              src={imageIcon}
              alt="alt"
              width={40}
              height={40}
              className={classes.plusIcon}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              autoComplete="off"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div className={classes.submitButtonOuterContainer}>
            <div className={classes.submitButtonContainer}>
              <FormSubmit disabled={isButtonDisabled} />
            </div>
          </div>
        </form>
      ) : (
        <>
          <p>{state.errorMessage}</p>
          <div className={classes.submitButtonContainer}>
            <Button onClick={handleReset}>
              <p>Reset</p>
            </Button>
          </div>
        </>
      )}
    </>
  );
}
