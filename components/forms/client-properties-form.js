/** @format */
"use client";
import { useState, useEffect } from "react";
import { useFormState } from "react-dom";
import classes from "./client-properties-form.module.css";
import FormSubmit from "./formsubmit";

export default function ClientPropertiesForm({
  action,
  id,
  allProperties,
  properties,
}) {
  const [clientState, setClientState] = useState([]);
  const [initialState, setInitialState] = useState([]);
  const [state, formAction] = useFormState(action, { id });

  useEffect(() => {
    state.id = id;
    let clientObj = {};
    let array = [];
    let finalArray = [];

    properties.forEach((element) => {
      array.push(element.id);
    });

    allProperties.forEach((element) => {
      clientObj = { ...element };

      if (array.includes(element.id)) {
        clientObj = { includes: true, clientObj: { ...clientObj } };
      } else {
        clientObj = { includes: false, clientObj: { ...clientObj } };
      }
      finalArray.push(clientObj);
    });
    setInitialState([...finalArray]);
    setClientState([...finalArray]);
  }, []);

  const handleUpdate = (event) => {
    setClientState(
      clientState.map((element) => {
        if (element.clientObj.name == event.target.name) {
          const newValue = !element.includes;
          return { ...element, includes: newValue };
        } else {
          return element;
        }
      })
    );
  };

  const handleReset = (event) => {
    event.preventDefault();
    setClientState([...initialState]);
  };

  return (
    <>
      <h1>User: Michael Jackson</h1>
      <div className={classes.userDetailsContainer}>
        <form action={formAction}>
          <ul>
            {clientState.map((item, index) => (
              <div key={item.clientObj.id}>
                <li className={classes.listWrapper}>
                  <div className={classes.listWrapperinner}>
                    <h2>Title:</h2>
                    <p>{item.clientObj.title}</p>
                  </div>
                  <div className={classes.listWrapperinner}>
                    <h2>Name:</h2>
                    <p>{item.clientObj.name}</p>
                  </div>
                  <div className={classes.checkboxContainer}>
                    <input
                      className={classes.checkbox}
                      name={item.clientObj.name}
                      type="checkbox"
                      checked={item.includes ? true : false}
                      onChange={(event) => handleUpdate(event)}
                    ></input>
                    {initialState[index].includes == true &&
                    clientState[index].includes == false ? (
                      <p> Property removed</p>
                    ) : initialState[index].includes == false &&
                      clientState[index].includes == true ? (
                      <p> Property added</p>
                    ) : null}
                  </div>
                </li>
                <hr />
              </div>
            ))}
          </ul>
          <div className={classes.submitButtonContainer}>
            <FormSubmit />
            <button onClick={handleReset}>Reset</button>
          </div>
          {/* <div className={classes.submitButtonContainer}> */}

          {/* </div> */}
        </form>
      </div>
    </>
  );
}
