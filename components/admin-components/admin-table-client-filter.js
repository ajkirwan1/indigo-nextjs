/** @format */
"use client";
import { useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import classes from "./admin-client-table.module.css";

export default function AdminTableFilter() {
  const [bulkFilter, setBulkFilter] = useState([false, false, false]);
  const [data, setData] = useState({ name: "", email: "" });
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleClick = (event) => {
    const eventSource = event.target.name;

    if (eventSource == "pending") {
      setBulkFilter([true, false, false]);
    }
    if (eventSource == "recent") {
      setBulkFilter([false, true, false]);
    }
    if (eventSource == "all") {
      setBulkFilter([false, false, true]);
    }

    const params = new URLSearchParams(searchParams);
    if (eventSource) {
      params.set("query", eventSource);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const handleSearch = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    const params = new URLSearchParams(searchParams);

    if (name == "name") {
      setData({
        ...data,
        name: value,
      });
      params.set("name", value);
    } else if (name == "email") {
      setData({
        ...data,
        email: value,
      });
      params.set("email", value);
    } else {
      params.delete("name");
      params.delete("email");
    }
    replace(`${pathname}?${params.toString()}`);
    // replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      <h2>Filter options:</h2>
      <form className={classes.registerForm3}>
        <div className={classes.tickRow}>
          <div>
            <label>Pending registration</label>
            <input
              type="checkbox"
              name="pending"
              checked={bulkFilter[0]}
              onChange={(event) => handleClick(event)}
            ></input>
          </div>
          <div>
            <label>Recently joined - last 7 days</label>
            <input
              type="checkbox"
              name="recent"
              checked={bulkFilter[1]}
              onChange={(event) => handleClick(event)}
            ></input>
          </div>
          <div>
            <label>All users</label>
            <input
              type="checkbox"
              name="all"
              checked={bulkFilter[2]}
              onChange={(event) => handleClick(event)}
            ></input>
          </div>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={(event) => handleSearch(event)}
            ></input>
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={data.email}
              onChange={(event) => handleSearch(event)}
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
}
