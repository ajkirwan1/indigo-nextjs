import db from "@/modules/db";

export async function FindAllProperties() {
  try {
    const allProperties = await db.property2.findMany();
    return allProperties;
    // console.log(allProperties);
  } catch (error) {
    console.log(error);
  }
}
