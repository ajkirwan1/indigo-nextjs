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
const userId5 = generateId(15);

export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("passwords").del();
  await knex("users").del();
  await knex("properties").del();
  await knex("usersonproperties").del();
  await knex("users").insert([
    {
      id: userId1,
      username: "user123",
      firstname: "micsadasdsadsak",
      lastname: "jackson",
      email: "user@123.com",
      companyname: "company1",
      phonenumber: "+4412345",
      buyertype: "private",
      location: "other",
      purchasetimeline: "within 6 months",
      estinvestmentinterest: "more than 150,000€",
      previousinvestment: "no",
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
      companyname: null,
      phonenumber: null,
      buyertype: null,
      location: null,
      purchasetimeline: null,
      estinvestmentinterest: null,
      previousinvestment: null,
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
      companyname: "companyxxxxxx",
      phonenumber: "+3212345",
      buyertype: "agent",
      location: "greece",
      purchasetimeline: "6 - 12 months",
      estinvestmentinterest: "100,000€ - 150,000€",
      previousinvestment: "yes",
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
      companyname: "McDonalds",
      phonenumber: "+32123451323232",
      buyertype: "private",
      location: "other",
      purchasetimeline: "+12 months",
      estinvestmentinterest: "50,000€ - 100,000€",
      previousinvestment: "yes",
      propertyaccess: 0,
      consultingaccess: 2,
      accessrequestdate: new Date().toJSON().slice(0, 10),
    },
    {
      id: userId5,
      username: "property456",
      firstname: "Jim",
      lastname: "Johnson",
      email: "property@456.com",
      adminaccess: 0,
      companyname: "companyxxxxxx",
      phonenumber: "+3212345",
      buyertype: "agent",
      location: "greece",
      purchasetimeline: "6 - 12 months",
      estinvestmentinterest: "100,000€ - 150,000€",
      previousinvestment: "yes",
      propertyaccess: 2,
      consultingaccess: 0,
      accessrequestdate: new Date().toJSON().slice(0, 10),
    },
  ]);

  await knex("passwords").insert([
    {
      id: 100000001,
      hashedPassword: await new LegacyScrypt().hash("password"),
      userId: userId1,
    },
    {
      id: 100000002,
      hashedPassword: await new LegacyScrypt().hash("password"),
      userId: userId2,
    },
    {
      id: 100000003,
      hashedPassword: await new LegacyScrypt().hash("password"),
      userId: userId3,
    },
    {
      id: 100000004,
      hashedPassword: await new LegacyScrypt().hash("password"),
      userId: userId4,
    },
    {
      id: 100000005,
      hashedPassword: await new LegacyScrypt().hash("password"),
      userId: userId5,
    },
  ]);
  await knex("properties").insert([
    {
      id: 100000001,
      title: "Φ 19",
      name: "Glyfada",
      image: "entrance.jpg",
      pdfid: "hc5i241tgd2wop1",
    },
    {
      id: 100000002,
      title: "Σ 14",
      name: "Voula",
      image: "final.jpg",
      pdfid: "ysdp9k7v35wtvlc",
    },

    {
      id: 100000003,
      title: "β 7",
      name: "Kavouri",
      image: "pool.jpg",
      pdfid: "jngv6mweml560ml",
    },
    {
      id: 100000004,
      title: "ΦΣ 1954",
      name: "Poole",
      image: "entrance.jpg",
      pdfid: "hc5i241tgd2wop1",
    },
    {
      id: 100000005,
      title: "ΣΣ Σ14",
      name: "Bristol",
      image: "final.jpg",
      pdfid: "ysdp9k7v35wtvlc",
    },

    {
      id: 100000006,
      title: "βΣβΣ 456",
      name: "Malvern",
      image: "pool.jpg",
      pdfid: "jngv6mweml560ml",
    },
  ]);

  await knex("investmentinterests").insert([
    {
      id: 100000001,
      interesttype: "commercial",
      userId: userId1,
    },
    {
      id: 100000002,
      interesttype: "land",
      userId: userId1,
    },

    {
      id: 100000003,
      interesttype: "residential",
      userId: userId1,
    },
    {
      id: 100000004,
      interesttype: "land",
      userId: userId3,
    },
    {
      id: 100000005,
      interesttype: "residential",
      userId: userId4,
    },
    {
      id: 100000006,
      interesttype: "private",
      userId: userId4,
    },
  ]);
  await knex("usersonproperties").insert([
    {
      id: 100000001,
      userId: userId3,
      propertyId: 100000001,
    },
    {
      id: 100000002,
      userId: userId3,
      propertyId: 100000002,
    },
    {
      id: 100000003,
      userId: userId3,
      propertyId: 100000003,
    },
    {
      id: 100000004,
      userId: userId3,
      propertyId: 100000004,
    },
    {
      id: 100000005,
      userId: userId3,
      propertyId: 100000005,
    },
    {
      id: 100000006,
      userId: userId3,
      propertyId: 100000006,
    },
    {
      id: 100000007,
      userId: userId5,
      propertyId: 100000001,
    }
  ]);
}

