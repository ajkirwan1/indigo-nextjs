/** @format */

import Link from "next/link";

export default function ProjectItem({ id }) {
  return (
    <>
      <Link href={`/projects/${id}`}>View Details</Link>
    </>
  );
}
