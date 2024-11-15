/** @format */
"use server";

function validateRegistration(firstName, lastName, companyName, phoneNumber) {
  let errors = [];
  if (
    typeof firstName !== "string" ||
    firstName.length < 3 ||
    firstName.length > 31
  ) {
    errors.push("Invalid first name");
  }
  if (
    typeof lastName !== "string" ||
    lastName.length < 3 ||
    lastName.length > 31
  ) {
    errors.push("Invalid last name");
  }
  if (
    typeof companyName !== "string" ||
    companyName.length < 3 ||
    companyName.length > 31
  ) {
    errors.push("Invalid company name");
  }

  if (
    typeof phoneNumber !== "string" ||
    phoneNumber.length < 3 ||
    phoneNumber.length > 31
  ) {
    errors.push("Invalid phone number");
  }

  return { errors };
}

export async function CheckUserCredentials(
  firstName,
  lastName,
  companyName,
  phoneNumber
) {
  const validatedRegistration = validateRegistration(
    firstName,
    lastName,
    companyName,
    phoneNumber
  );

  return validatedRegistration;
}
