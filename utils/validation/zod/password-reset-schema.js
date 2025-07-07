import { z } from "zod";
import { passwordSchema } from "./password-schema";// Your reusable password schema

const resetPasswordSchema = z
  .object({
    current: passwordSchema.min(1, "Current password is required"),
    newPass: passwordSchema,
    confirm: z.string().min(1, "Please confirm your new password"),
  })
  .refine((data) => data.newPass === data.confirm, {
    message: "Passwords do not match",
    path: ["confirm"],
  });
