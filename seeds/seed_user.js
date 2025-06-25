/**
 * @format
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
import { generateId } from "lucia";
import bcrypt from "bcryptjs";
import cuid from "cuid";

const userId1 = generateId(15);
const userId2 = generateId(15);
const userId3 = generateId(15);
const userId4 = generateId(15);
const userId5 = generateId(15);

const pdfId1 = cuid();
const pdfId2 = cuid();
const pdfId3 = cuid();

function randomDateInLast30Days() {
  const now = new Date();
  const daysAgo = Math.floor(Math.random() * 30);
  return new Date(now.setDate(now.getDate() - daysAgo));
}

export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("passwords").del();
  await knex("users").del();
  await knex("properties").del();
  await knex("properties2").del();
  await knex("usersonproperties").del();
  await knex("usersonproperties2").del();
  await knex("userRegistration").del();
  await knex("userNew").del();
  await knex("Pdf").del();
  await knex("userPdf").del();
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
      hashedPassword: await bcrypt.hash("password", 10),
      userId: userId1,
    },
    {
      id: 100000002,
      hashedPassword: await bcrypt.hash("password", 10),
      userId: userId2,
    },
    {
      id: 100000003,
      hashedPassword: await bcrypt.hash("password", 10),
      userId: userId3,
    },
    {
      id: 100000004,
      hashedPassword: await bcrypt.hash("password", 10),
      userId: userId4,
    },
    {
      id: 100000005,
      hashedPassword: await bcrypt.hash("password", 10),
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
  await knex("properties2").insert([
    {
      id: 100000001,
      title: "Φ-19",
      location: "Glyfada",
      price: "150,000 €",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
      suscipit lacinia massa, in eleifend dui tristique at. Nulla id
      diam eget tortor congue vestibulum.`,
      imageUrl:
        "https://next-js-image-bucket.s3.eu-central-1.amazonaws.com/entrance.jpg",
      pdfUrl:
        "https://next-js-pdf-bucket.s3.eu-central-1.amazonaws.com/Karikan_Realty_%CE%A619_Project_Book.pdf",
    },
    {
      id: 100000002,
      title: "β-7",
      location: "Kavouri",
      price: "200,000 €",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
      suscipit lacinia massa, in eleifend dui tristique at. Nulla id
      diam eget tortor congue vestibulum.`,
      imageUrl:
        "https://next-js-image-bucket.s3.eu-central-1.amazonaws.com/final.jpg",
      pdfUrl:
        "https://next-js-pdf-bucket.s3.eu-central-1.amazonaws.com/Karikan_Realty_%CE%A619_Project_Book.pdf",
    },

    {
      id: 100000003,
      title: "Σ-1954",
      location: "Voula",
      price: "300,000 €",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
      suscipit lacinia massa, in eleifend dui tristique at. Nulla id
      diam eget tortor congue vestibulum.`,
      imageUrl:
        "https://next-js-image-bucket.s3.eu-central-1.amazonaws.com/pool.jpg",
      pdfUrl:
        "https://next-js-pdf-bucket.s3.eu-central-1.amazonaws.com/Karikan_Realty_%CE%A619_Project_Book.pdf",
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
  await knex("usersonproperties2").insert([
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
      userId: userId2,
      propertyId: 100000001,
    },
    {
      id: 100000005,
      userId: userId2,
      propertyId: 100000002,
    },
    {
      id: 100000006,
      userId: userId4,
      propertyId: 100000003,
    },
    {
      id: 100000007,
      userId: userId5,
      propertyId: 100000001,
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
      userId: userId5,
      propertyId: 100000001,
    },
    {
      id: 100000005,
      userId: userId5,
      propertyId: 100000002,
    },
    {
      id: 100000006,
      userId: userId4,
      propertyId: 100000003,
    },
    {
      id: 100000007,
      userId: userId5,
      propertyId: 100000001,
    },
  ]);

  const usersReg = [
    {
      id: 1001,
      name: "Nova Holdings",
      email: "nova@example.com",
      phoneNumber: "+441100000001",
      buyertype: "private",
      location: "Greece",
      purchaseTimeline: "within 6 months",
      investmentInterest: "residential",
      investmentRange: "100,000€ - 150,000€",
      previousInvestment: "no",
      registration: "accepted",
      createdAt: randomDateInLast30Days(),
      // userNewId: 1,
    },
    {
      id: 1002,
      name: "Atlas Ventures",
      email: "atlas@example.com",
      phoneNumber: "+441100000002",
      buyertype: "agent",
      location: "Spain",
      purchaseTimeline: "6 - 12 months",
      investmentInterest: "commercial",
      investmentRange: "more than 150,000€",
      previousInvestment: "yes",
      registration: "accepted",
      createdAt: randomDateInLast30Days(),
      // userNewId: 2,
    },
    {
      id: 1003,
      name: "Sunrise Group",
      email: "sunrise@example.com",
      phoneNumber: "+441100000003",
      buyertype: "private",
      location: "Portugal",
      purchaseTimeline: "+12 months",
      investmentInterest: "land",
      investmentRange: "50,000€ - 100,000€",
      previousInvestment: "no",
      registration: "accepted",
      createdAt: randomDateInLast30Days(),
      // userNewId: 3,
    },
    {
      id: 1004,
      name: "Lighthouse Ltd",
      email: "lighthouse@example.com",
      phoneNumber: "+441100000004",
      buyertype: "private",
      location: "Italy",
      purchaseTimeline: "within 6 months",
      investmentInterest: "residential",
      investmentRange: "100,000€ - 150,000€",
      previousInvestment: "yes",
      registration: "accepted",
      createdAt: randomDateInLast30Days(),
      // userNewId: 4,
    },
    {
      id: 1005,
      name: "Zenith Estates",
      email: "ajkirwan1@gmail.com",
      phoneNumber: "+441100000005",
      buyertype: "agent",
      location: "France",
      purchaseTimeline: "6 - 12 months",
      investmentInterest: "commercial",
      investmentRange: "more than 150,000€",
      previousInvestment: "yes",
      registration: "rejected",
      createdAt: randomDateInLast30Days(),
      // userNewId: null,
    },
    {
      id: 1006,
      name: "Echo Properties",
      email: "ajkirwan1@gmail.com",
      phoneNumber: "+441100000006",
      buyertype: "private",
      location: "Germany",
      purchaseTimeline: "+12 months",
      investmentInterest: "land",
      investmentRange: "50,000€ - 100,000€",
      previousInvestment: "no",
      registration: "pending",
      createdAt: randomDateInLast30Days(),
      // userNewId: null,
    },
    {
      id: 1007,
      name: "Solstice Partners",
      email: "ajkirwan1@gmail.com",
      phoneNumber: "+441100000007",
      buyertype: "private",
      location: "UK",
      purchaseTimeline: "within 6 months",
      investmentInterest: "residential",
      investmentRange: "100,000€ - 150,000€",
      previousInvestment: "yes",
      registration: "accepted",
      createdAt: randomDateInLast30Days(),
      // userNewId: null,
    },
    {
      id: 1008,
      name: "Harborfront Inc",
      email: "ajkirwan1@gmail.com",
      phoneNumber: "+441100000008",
      buyertype: "agent",
      location: "Ireland",
      purchaseTimeline: "6 - 12 months",
      investmentInterest: "commercial",
      investmentRange: "more than 150,000€",
      previousInvestment: "yes",
      registration: "rejected",
      createdAt: randomDateInLast30Days(),
      // userNewId: null,
    },
    {
      id: 1009,
      name: "Horizon Developments",
      email: "ajkirwan1@gmail.com",
      phoneNumber: "+441100000009",
      buyertype: "private",
      location: "Cyprus",
      purchaseTimeline: "+12 months",
      investmentInterest: "land",
      investmentRange: "50,000€ - 100,000€",
      previousInvestment: "no",
      registration: "pending",
      createdAt: randomDateInLast30Days(),
      // userNewId: null,
    },
    {
      id: 1010,
      name: "BluePeak Realty",
      email: "ajkirwan1@gmail.com",
      phoneNumber: "+441100000010",
      buyertype: "agent",
      location: "Netherlands",
      purchaseTimeline: "within 6 months",
      investmentInterest: "residential",
      investmentRange: "100,000€ - 150,000€",
      previousInvestment: "yes",
      registration: "pending",
      createdAt: randomDateInLast30Days(),
      // userNewId: null,
    },
  ];

  await knex("userRegistration").insert(usersReg);

  await knex("userNew").insert([
    {
      id: 1001,
      userName: "nova_user",
      userType: "client",
      hashedPassword: await bcrypt.hash("password", 10),
      registrationId: 1001,
      googleDriveFolderId: "1BTVsghq_ROyp_G5JNVPEOOfpWAcvaaYo",
      createdAt: randomDateInLast30Days(),
    },
    {
      id: 1002,
      userName: "atlas_user",
      userType: "client",
      hashedPassword: await bcrypt.hash("password", 10),
      registrationId: 1002,
      googleDriveFolderId: "1ZgJagrG5DmUaqiSD1mpn06r-AmesQIAq",
      createdAt: randomDateInLast30Days(),
    },
    {
      id: 1003,
      userName: "sunrise_user",
      userType: "client",
      hashedPassword: await bcrypt.hash("password", 10),
      registrationId: 1003,
      googleDriveFolderId: "1dVCca50QD4Z7bhJqZ6VKIVPozOEBNeur",
      createdAt: randomDateInLast30Days(),
    },
    {
      id: 1004,
      userName: "lighthouse_user",
      userType: "client",
      hashedPassword: await bcrypt.hash("password", 10),
      registrationId: 1004,
      googleDriveFolderId: "1dVCca50QD4Z7bhJqZ6VKIVPozOEBNeur",
      createdAt: randomDateInLast30Days(),
    },
    {
      id: 1005,
      userName: "zenith_user",
      userType: "client",
      hashedPassword: await bcrypt.hash("password", 10),
      registrationId: 1005,
      googleDriveFolderId: null,
      createdAt: randomDateInLast30Days(),
    },
    {
      id: 1006,
      userName: "solstice_user",
      userType: "client",
      hashedPassword: await bcrypt.hash("password", 10),
      registrationId: 1007,
      googleDriveFolderId: "1dVCca50QD4Z7bhJqZ6VKIVPozOEBNeur",
      createdAt: randomDateInLast30Days(),
    },
      {
      id: 1007,
      userName: "harborfront_user",
      userType: "client",
      hashedPassword: await bcrypt.hash("password", 10),
      registrationId: 1008,
      googleDriveFolderId: null,
      createdAt: randomDateInLast30Days(),
    },
    {
      id: 1008,
      userName: "admin123",
      userType: "admin",
      hashedPassword: await bcrypt.hash("password", 10),
      registrationId: null,
      googleDriveFolderId: null,
      createdAt: randomDateInLast30Days(),
    },
  ]);

  await knex("Pdf").insert([
    {
      id: pdfId1,
      name: "Karikan Realty",
      url: "https://next-js-pdf-bucket.s3.eu-central-1.amazonaws.com/Karikan_Realty_%CE%A619_Project_Book.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAWOOW4PVAWAYBUWGK%2F20250419%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250419T153220Z&X-Amz-Expires=3600&X-Amz-Signature=ab2a1c43f98488bbda147f7046907539d1b9d06012d12e5e86d9994720d816b6&X-Amz-SignedHeaders=host&x-id=GetObject",
    },
    {
      id: pdfId2,
      name: "Karikan Realty Enhanced",
      url: "https://next-js-pdf-bucket.s3.eu-central-1.amazonaws.com/Karikan_Realty_%CE%A619_Project_Book.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAWOOW4PVAWAYBUWGK%2F20250419%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250419T153220Z&X-Amz-Expires=3600&X-Amz-Signature=ab2a1c43f98488bbda147f7046907539d1b9d06012d12e5e86d9994720d816b6&X-Amz-SignedHeaders=host&x-id=GetObject",
    },
    {
      id: pdfId3,
      name: "Karikan Realty Budget",
      url: "https://next-js-pdf-bucket.s3.eu-central-1.amazonaws.com/Karikan_Realty_%CE%A619_Project_Book.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAWOOW4PVAWAYBUWGK%2F20250419%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250419T153220Z&X-Amz-Expires=3600&X-Amz-Signature=ab2a1c43f98488bbda147f7046907539d1b9d06012d12e5e86d9994720d816b6&X-Amz-SignedHeaders=host&x-id=GetObject",
    },
  ]);

  await knex("userPdf").insert([
    { userId: 1001, pdfId: pdfId1 },
    { userId: 1001, pdfId: pdfId2 },
    { userId: 1002, pdfId: pdfId1 },
    { userId: 1003, pdfId: pdfId3 },
    { userId: 1004, pdfId: pdfId1 },
    { userId: 1004, pdfId: pdfId2 },
    { userId: 1004, pdfId: pdfId3 },
  ]);
}
