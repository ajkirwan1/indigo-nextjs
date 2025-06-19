/** @format */

import { z } from "zod";

export default function ValidateLogin(credentials) {
  const username = credentials.get("username");
  const password = credentials.get("password");
  const formSchema = z.object({
    username: z
      .string()
      .nonempty({ message: "A username is required" })
      .min(3, { message: "Username must be at least 3 characters long" }),

    password: z
      .string()
      .nonempty({ message: "A password is required" })
      .min(3, { message: "Password is at least 3 characters long" }),
  });

  const validationResult = formSchema.safeParse({
    username,
    password,
  });

  if (!validationResult.success) {
    const formFieldErrors = validationResult.error.flatten().fieldErrors;
    const transformedObject = Object.keys(formFieldErrors).reduce(
      (acc, key) => {
        acc[key] = formFieldErrors[key][0]; // Get the first element of the array
        return acc;
      },
      {}
    );
    return { validationErrors: transformedObject };
  }
  return validationResult;
}
