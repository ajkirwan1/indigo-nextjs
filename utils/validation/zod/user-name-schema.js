import { z } from "zod";

export const userNameSchema = z
  .string()
  .nonempty({ message: "Username is required" })
  .min(3, { message: "Username must be at least 3 characters long" })
  .max(30, { message: "Username must be at most 30 characters long" })
  .regex(/^[a-zA-Z0-9_]+$/, {
    message:
      "Username can only contain letters, numbers, and underscores",
  });
