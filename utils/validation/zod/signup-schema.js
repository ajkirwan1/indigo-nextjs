import { z } from "zod";
import { passwordSchema } from "./path-to-password-schema";
import { userNameSchema } from "./user-name-schema";

export const signupSchema = z
  .object({
    userName: userNameSchema,

    email: z
      .string()
      .nonempty({ message: "Email address is required" })
      .email({ message: "Invalid email address" }),

    password: passwordSchema,

    passwordConfirm: z
      .string()
      .nonempty({ message: "Please confirm your password" }),
  })
  .superRefine(({ password, passwordConfirm }, ctx) => {
    if (password !== passwordConfirm) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["passwordConfirm"],
        message: "Passwords don't match",
      });
    }
  });
