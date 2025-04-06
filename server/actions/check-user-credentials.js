/** @format */
"use server";

function validateRegistration(firstName, lastName, companyName, phoneNumber) {
  let errors = [];
  if (
    typeof firstName !== "string" ||
    firstName.length < 3 ||
    firstName.length > 31
  ) {
    errors.push({ errorType: "firstName", message: "Invalid firstName" });
  }
  if (
    typeof lastName !== "string" ||
    lastName.length < 3 ||
    lastName.length > 31
  ) {
    errors.push({ errorType: "lastName", message: "Invalid lastName" });
  }
  if (
    typeof companyName !== "string" ||
    companyName.length < 3 ||
    companyName.length > 31
  ) {
    errors.push({ errorType: "companyName", message: "Invalid companyName" });
  }

  if (
    typeof phoneNumber !== "string" ||
    phoneNumber.length < 3 ||
    phoneNumber.length > 31
  ) {
    errors.push({ errorType: "phoneNumber", message: "Invalid phoneNumber" });
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
