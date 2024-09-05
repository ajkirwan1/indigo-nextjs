/** @format */

import { notFound } from "next/navigation";
import ModalBackdrop from "@/components/modal-backdrop";

import { getProject } from "@/server/data/projects";

export default async function InterceptedImagePage({ params }) {
  const project = getProject(params.id);
  console.log("intercepting");

  if (!project) {
    notFound();
  }
  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={project.slug} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
