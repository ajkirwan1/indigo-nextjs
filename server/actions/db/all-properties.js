/** @format */

import db from "@/modules/db";

export async function getAllProperties(id) {
  const allProperties = await db.property.findMany({
  });

  return allProperties;
}
