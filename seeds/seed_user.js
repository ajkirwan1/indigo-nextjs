/**
 * @format
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
import { hash } from "@node-rs/argon2";
import { generateId } from "lucia";

export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      id: generateId(15),
      username: "user123",
      firstname: "micsadasdsadsak",
      lastname: "jackson",
      email: "user@123.com",
      adminaccess: 0,
      propertyaccess: 0,
      consultingaccess: 0,
      accessrequestdate: new Date().toJSON().slice(0, 10),
      passwordhash: await hash("password123", {
        // recommended minimum parameters
        memoryCost: 19456,
        timeCost: 2,
        outputLen: 32,
        parallelism: 1,
      })
    },
    {
      id: generateId(15),
      username: "admin123",
      firstname: "adam",
      lastname: "kirwan",
      email: "ajkirwan@123.com",
      adminaccess: 2,
      propertyaccess: 2,
      consultingaccess: 2,
      accessrequestdate: new Date().toJSON().slice(0, 10),
      passwordhash: await hash("password123", {
        // recommended minimum parameters
        memoryCost: 19456,
        timeCost: 2,
        outputLen: 32,
        parallelism: 1,
      })
    },
    {
      id: generateId(15),
      username: "property123",
      firstname: "john",
      lastname: "smith",
      email: "property@123.com",
      adminaccess: 0,
      propertyaccess: 2,
      consultingaccess: 0,
      accessrequestdate: new Date().toJSON().slice(0, 10),
      passwordhash: await hash("password123", {
        // recommended minimum parameters
        memoryCost: 19456,
        timeCost: 2,
        outputLen: 32,
        parallelism: 1,
      })
    },
    {
      id: generateId(15),
      username: "consulting123",
      firstname: "pete",
      lastname: "burns",
      email: "consulting@123.com",
      adminaccess: 0,
      propertyaccess: 0,
      consultingaccess: 2,
      accessrequestdate: new Date().toJSON().slice(0, 10),
      passwordhash: await hash("password123", {
        // recommended minimum parameters
        memoryCost: 19456,
        timeCost: 2,
        outputLen: 32,
        parallelism: 1,
      })
    },
  ]);
}
