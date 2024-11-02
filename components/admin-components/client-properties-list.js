/** @format */
"use client";
import { useState, useEffect } from "react";
import classes from "./client-properties-list.module.css";
import Button from "../ui/button";

export default function ClientPropertiesList({ allProperties, properties }) {
  const [clientState, setClientState] = useState([]);

  useEffect(() => {
    let clientObj = {};
    let array = [];
    let finalArray = []

    properties.forEach((element) => {
      // console.log(element.id);
      array.push(element.id);
    });

    allProperties.forEach((element) => {
      //   console.log(element);
      clientObj = { data: { ...element } };

      if (array.includes(element.id)) {
        clientObj = { includes: true, clientObj: { ...clientObj } };
      } else {
        clientObj = { includes: false, clientObj: { ...clientObj } };
      }
    //   console.log(clientObj);
      finalArray.push(clientObj)
    });

    setClientState([...finalArray]);
  }, []);

  //   let array = [];
  //   properties.forEach((element) => {
  //     console.log(element.id);
  //     array.push(element.id);
  //   });

  //   const checkArray = (id) => {
  //     if (array.includes(id)) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   };

  console.log("clientState", clientState);
  return (
    <>
      {/* <h1>User: Michael Jackson</h1>
      <div className={classes.userDetailsContainer}>
        <ul>
          {allProperties.map((item) => (
            <>
              <li key={item.id} className={classes.listWrapper}>
                <div className={classes.listWrapperinner}>
                  <h2>Title:</h2>
                  <p>{item.title}</p>
                </div>
                <div className={classes.listWrapperinner}>
                  <h2>Name:</h2>
                  <p>{item.name}</p>
                </div>
                <div className={classes.listWrapperinner}>
                  <input
                    type="checkbox"
                    defaultChecked={checkArray(item.id) ? true : false}
                  ></input>
                </div>
              </li>
              <hr />
            </>
          ))}
        </ul>
      </div>
      <button>Update</button>
      <button>Reset</button> */}
    </>
  );
}
