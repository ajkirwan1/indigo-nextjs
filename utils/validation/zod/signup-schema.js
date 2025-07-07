import { z } from "zod";
import { passwordSchema } from "./path-to-password-schema";

export const signupSchema = z
  .object({
    userName: z
      .string()
      .nonempty({ message: "A username is required" })
      .min(3, { message: "A username must be at least 3 characters long" }),

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
