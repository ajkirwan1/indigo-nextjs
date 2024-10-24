/** @format */
import db from "@/modules/db";

export async function getProperties() {
    
    const properties = await db.property.findMany();

  return properties
}
