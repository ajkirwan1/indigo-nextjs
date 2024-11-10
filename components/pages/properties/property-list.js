/** @format */

import PropertyItem from "./property-item";
import classes from "./property-list.module.css";

export default function PropertyList({ properties }) {
  return (
    <ul className={classes.projectGrid}>
      {properties.map((property) => (
        <li className={classes.propertyItem} key={property.id}>
          <PropertyItem {...property} />
        </li>
      ))}
    </ul>
  );
}
