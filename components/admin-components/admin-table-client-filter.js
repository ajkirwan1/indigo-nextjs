/** @format */
"use client";
import { useState, useEffect } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import classes from "./admin-table-client-filter.module.css";
import expandIcon from "/public/images/icons/icons8-expand-arrow-50.png";
import SubmitButton from "../ui/buttons/submit-button";

export default function AdminTableFilter() {
  const [bulkFilter, setBulkFilter] = useState([false, false, false]);
  const [data, setData] = useState({ name: "", email: "" });
  const [filterOpen, setFilterOpen] = useState(false);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    console.log(searchParams.toString());
    if (params.get("firstnav")) {
      // console.log("First Nav IS TRUE")
      params.delete("firstnav");
      replace(`${pathname}?${params.toString()}`);
      return;
    }
    params.delete("query");
    params.delete("name");
    params.delete("email");
    params.delete("firstNav");
    replace(`${pathname}?${params.toString()}`);
  }, []);

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

  const handleReset = (event) => {
    event.preventDefault();
    const params = new URLSearchParams(searchParams);
    setBulkFilter([false, false, false]);
    setData({ name: "", email: "" });
    params.delete("name");
    params.delete("email");
    params.delete("query");
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className={classes.filterContainer}>
      <div className={classes.filterHeaderWrapper}>
        <div>
          <h2>Filter options:&nbsp;</h2>
        </div>
        <div
          className={classes.filterHeaderInnerWrapper}
          onClick={() => setFilterOpen((val) => !val)}
        >
          {filterOpen ? (
            <>
              <h2>Hide</h2>
              <Image
                src={expandIcon}
                style={{ transform: "rotate(90deg)" }}
                alt="An icon representing hiding filter information"
                width={100}
                height={100}
              />
            </>
          ) : (
            <>
              <h2>Show</h2>
              <Image
                src={expandIcon}
                style={{ transform: "rotate(270deg)" }}
                alt="An icon representing revealing filter information"
                width={100}
                height={100}
              />
            </>
          )}
        </div>
      </div>
      {filterOpen ? (
        <form className={classes.filterForm} onSubmit={handleReset}>
          <div className={classes.checkboxContainer}>
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
          </div>
          <div className={classes.infoContainer}>
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
          <div className={classes.submitButtonContainer}>
            <SubmitButton>Reset</SubmitButton>
          </div>
        </form>
      ) : null}
    </div>
  );
}
