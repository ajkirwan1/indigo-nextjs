/** @format */
"use client";

import { RWebShare } from "react-web-share";
import Image from "next/image";
import shareIcon from "/public/images/icons/shareIcon.svg";
import shareicon from "/public/images/icons/iconshare.svg";

export default function ShareComponent({url, title, text, white}) {
  return (
    <>
      <RWebShare
        data={{
          text: "ASASASASSA",
          url: url,
          title: "title",
        }}
      >
        <Image
          className={white ? "share-icon-white" : "share-icon"}
          src={white ? shareicon : shareIcon}
          alt="An image showing a share icon used to provide a url to this page"
          width={30}
          height={30}
        />
      </RWebShare>
    </>
  );
}
