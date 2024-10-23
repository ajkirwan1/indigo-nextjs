/**
 * @format
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
import { LegacyScrypt } from "lucia";
import { generateId } from "lucia";

const userId1 = generateId(15);
const userId2 = generateId(15);
const userId3 = generateId(15);
const userId4 = generateId(15);

export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      id: userId1,
      username: "user123",
      firstname: "micsadasdsadsak",
      lastname: "jackson",
      email: "user@123.com",
      adminaccess: 0,
      propertyaccess: 0,
      consultingaccess: 0,
      accessrequestdate: new Date().toJSON().slice(0, 10),
    },
    {
      id: userId2,
      username: "admin123",
      firstname: "adam",
      lastname: "kirwan",
      email: "ajkirwan@123.com",
      adminaccess: 2,
      propertyaccess: 2,
      consultingaccess: 2,
      accessrequestdate: new Date().toJSON().slice(0, 10),
    },
    {
      id: userId3,
      username: "property123",
      firstname: "john",
      lastname: "smith",
      email: "property@123.com",
      adminaccess: 0,
      propertyaccess: 2,
      consultingaccess: 0,
      accessrequestdate: new Date().toJSON().slice(0, 10),
    },
    {
      id: userId4,
      username: "consulting123",
      firstname: "pete",
      lastname: "burns",
      email: "consulting@123.com",
      adminaccess: 0,
      propertyaccess: 0,
      consultingaccess: 2,
      accessrequestdate: new Date().toJSON().slice(0, 10),
    },
  ]);
  await knex("passwords").del();
  await knex("passwords").insert([
    {
      id: 1,
      hashedPassword: await new LegacyScrypt().hash(password)(password, {
        memoryCost: 19456,
        timeCost: 2,
        outputLen: 32,
        parallelism: 1,
      }),
      userId: userId1,
    },
    {
      id: 2,
      hashedPassword: await new LegacyScrypt().hash(password)(password, {
        memoryCost: 19456,
        timeCost: 2,
        outputLen: 32,
        parallelism: 1,
      }),
      userId: userId2,
    },
    {
      id: 3,
      hashedPassword: await new LegacyScrypt().hash(password)(password, {
        memoryCost: 19456,
        timeCost: 2,
        outputLen: 32,
        parallelism: 1,
      }),
      userId: userId3,
    },
    {
      id: 4,
      hashedPassword: await new LegacyScrypt().hash(password)(password, {
        memoryCost: 19456,
        timeCost: 2,
        outputLen: 32,
        parallelism: 1,
      }),
      userId: userId4,
    },
  ]);
}
