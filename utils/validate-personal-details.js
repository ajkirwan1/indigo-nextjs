/** @format */

export default function ValidatePersonalDetails(data) {
  const { userName, firstName, lastName, email, companyName, phoneNumber  } = data;

  let errors = [];

  if (
    typeof userName !== "string" ||
    userName.length < 6 ||
    userName.length > 31
  ) {
    errors.push({ errorType: "username", message: "Invalid username" });
  }

  if (
    typeof firstName !== "string" ||
    firstName.length < 1 ||
    firstName.length > 31
  ) {
    errors.push({ errorType: "firstname", message: "Invalid firstname" });
  }

  if (
    typeof lastName !== "string" ||
    lastName.length < 1 ||
    lastName.length > 31
  ) {
    errors.push({ errorType: "lastname", message: "Invalid lastname" });
  }

  if (
    typeof email !== "string" ||
    email.length < 6 ||
    email.length > 25 ||
    !email.includes("@") ||
    !email.includes(".")
  ) {
    errors.push({ errorType: "email", message: "Invalid email" });
  }

  if (
    typeof companyName !== "string" ||
    companyName.length < 1 ||
    companyName.length > 31
  ) {
    errors.push({ errorType: "companyname", message: "Invalid company name" });
  }

  if (
    typeof phoneNumber !== "string" ||
    phoneNumber.length < 6 ||
    phoneNumber.length > 31
  ) {
    errors.push({ errorType: "phonenumber", message: "Invalid phone number" });
  }

  if (errors.length > 0) {
    return { errors };
  }
}
