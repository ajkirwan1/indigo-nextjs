import { z } from "zod";

export const passwordSchema = z
  .string()
  .nonempty({ message: "Password is required" })
  .min(8, { message: "Password must be at least 8 characters long" })
  .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])/,
    {
      message:
        "Password must include uppercase, lowercase, number, and special character",
    }
  );
