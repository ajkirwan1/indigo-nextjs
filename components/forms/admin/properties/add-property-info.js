/** @format */

"use client";
import classes from "./add-property.module.css";
// import { useFormState } from "react-dom";
// import { AddPropertyInfoAction } from "@/server/actions/db/admin/properties/add-property-info-action";

export default function AddPropertyInfo({ data, handleChange }) {
  // const [state, formAction] = useFormState(AddPropertyInfoAction, {
  //   message: null,
  // });
  return (
    <>
      <form className={classes.form}>
        <p>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            required
            value={data.title}
            onChange={handleChange}
          />
        </p>
        <div className={classes.row}>
          <p>
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={data.location}
              onChange={handleChange}
              required
            />
          </p>
          <p>
            <label htmlFor="price">Price</label>
            <input
              type="text"
              id="price"
              value={data.price}
              onChange={handleChange}
              name="price"
              required
            />
          </p>
        </div>
        <p>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            // @ts-ignore
            rows="10"
            value={data.description}
            onChange={handleChange}
            required
          ></textarea>
        </p>
      </form>
    </>
  );
}
