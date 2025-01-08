/** @format */

import NavLink from "../nav-link";
import classes from "./user.module.css";

export default function User({ id, username, first_name, last_name }) {
  // console.log(id);
  return (
    <div className={classes.img}>
      {/* <NavLink href={`/user/${id}`}> */}
      {/* </NavLink> */}
      <h1>USER</h1>
      <h2>{username}</h2>
      <h2>{first_name}</h2>
      <h2>{last_name}</h2>
    </div>
  );
}
