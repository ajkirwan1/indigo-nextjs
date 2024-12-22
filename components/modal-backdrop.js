/** @format */

"use client";

import { useRouter } from "next/navigation";

export default function ModalBackdrop({ children, handleModal }) {
  // const router = useRouter();

  return <div className="modal-backdrop" onClick={() => handleModal()}>{children}</div>;
}
