/** @format */

import PropertyItem from "./project-item";
import classes from "./property-list.module.css";

export default function PropertyList({ properties }) {
  return (
    <ul className={classes.projectGrid}>
      {properties.map((property) => (
        <li key={property.id}>
          <PropertyItem {...property} />
        </li>
      ))}
    </ul>
  );
}
