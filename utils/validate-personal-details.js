/** @format */

export default function ValidatePersonalDetails(data) {

  const {userName, firstName, lastName, email} = data

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
    password.length < 6 ||
    password.length > 31
  ) {
    errors.push({ errorType: "firstname", message: "Invalid firstname" });
  }

  if (
    typeof lastName !== "string" ||
    password.length < 6 ||
    password.length > 31
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

  if (errors.length > 0) {
    return { errors };
  }
}
