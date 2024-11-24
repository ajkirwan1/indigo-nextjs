import db from "@/modules/db";

export async function GetSingleProperty(id) {
  try {
    const singleProperty = await db.property2.findFirst({ where: { id: id } });
    // console.log(singleProperty, "SINGLE");
    return singleProperty;
  } catch (error) {
    console.log(error);
  }
}
