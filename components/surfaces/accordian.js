/** @format */

import classes from "./accordian.module.css";

export default async function AccordionPersonal({ userInfo }) {
  const {
    name,
    email,
    phoneNumber,
    buyertype,
    location,
    purchaseTimeline,
    investmentInterest,
    investmentRange,
    previousInvestment,
  } = userInfo;

  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <h2>Client Information</h2>
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
      <div className={classes.text}>
        {/* <h2>Registration information</h2> */}
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
      {/* <div className={classes.text}>
      </div> */}
    </div>
  );
}
