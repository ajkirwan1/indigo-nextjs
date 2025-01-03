/** @format */
"use client";

import { whatWeDoData } from "@/data/what-we-do-data";
import { useState } from "react";
import ServiceItem from "./service-item";

export default function ServiceItemList() {
  const [modalIndex, setModalIndex] = useState(null);
  const [infoActive, setInfoActive] = useState(false);

  const handleModal = (id) => {
    console.log("CLICK");
    if (modalIndex == id) {
      setInfoActive((val) => !val);
    }
    if (modalIndex != id) {
      setInfoActive(true);
    }
    setModalIndex(id);
  };

  return (
    <>
      {whatWeDoData.map((element) => (
        <ServiceItem
          key={element.id}
          data={element}
          handleModal={handleModal}
          modalIndex={modalIndex}
          infoActive={infoActive}
        />
      ))}
    </>
  );
}
