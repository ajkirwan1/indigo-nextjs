/** @format */

import { z } from "zod";
import { userNameSchema } from "./zod/user-name-schema";
import { passwordSchema } from "./zod/password-schema";

export default function ValidateNewUserSignup(
  userName,
  email,
  password,
  passwordConfirm
) {
  const formSchema = z
    .object({
      userName: userNameSchema,
      email: z
        .string()
        .nonempty({ message: "Email address is required" })
        .email({ message: "Invalid email address" }),

      password: passwordSchema,

      passwordConfirm: passwordSchema,
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
