/** @format */

import { z } from "zod";

export default function ValidateNewUserSignup(
  userName,
  email,
  password,
  passwordConfirm
) {
  const formSchema = z
    .object({
      userName: z
        .string()
        .nonempty({ message: "A username is required" })
        .min(3, { message: "A username must be at least 3 characters long" }),

      email: z
        .string()
        .nonempty({ message: "Email address is required" })
        .email({ message: "Invalid email address" }),

      password: z
        .string()
        .nonempty({ message: "Password is required" })
        .min(8, { message: "A password must be at least 8 characters long" }),

      passwordConfirm: z
        .string()
        .nonempty({ message: "Password is required" })
        .min(8, { message: "A password must be at least 8 characters long" }),
    })
    .refine((data) => data.password === data.passwordConfirm, {
      message: "Passwords don't match",
      path: ["passwordConfirm"], // Highlights which field has the error
    });

  const validationResult = formSchema.safeParse({
    userName,
    email,
    password,
    passwordConfirm,
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
    return transformedObject;
  }
  return validationResult;
}
