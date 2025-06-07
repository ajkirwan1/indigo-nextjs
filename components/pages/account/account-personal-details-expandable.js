/** @format */
"use client";
import { useState } from "react";

import { UpdateUserAccountRegisrationInfo } from "@/server/actions/db/account-registration-update";
import DropDownExpandable from "@/components/expandables/drop-down-expandable";

export default function ClientAccountPersonalDetailsExpandable({ id, result }) {
  console.log(id, "id");
  console.log(result, "result");
  const [expandableOpen, setExpandableOpen] = useState(false);

  return (
    <>
      <DropDownExpandable
        expandableOpen={expandableOpen}
        setExpandableOpen={setExpandableOpen}
      >
        Personal details
      </DropDownExpandable>
      {/* <ClientPersonalDetailsForm
            username={result.username}
            firstname={result.firstname}
            lastname={result.lastname}
            email={result.email}
            companyname={result.companyname}
            phonenumber={result.phonenumber}
            id={id}
          /> */}
      {expandableOpen ? <div>Open</div> : <div>Closed</div>}
    </>
  );
}
