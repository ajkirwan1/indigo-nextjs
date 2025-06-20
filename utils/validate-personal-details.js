import { z } from "zod";

const personalDetailsSchema = z.object({
  userName: z
    .string()
    .min(2, { message: "Username must be at least 2 characters long" })
    .max(50),
  firstName: z
    .string()
    .min(1, { message: "First name is required" })
    .max(50),
  email: z
    .string()
    .email({ message: "Invalid email address" }),
  phoneNumber: z
    .string()
    .min(5, { message: "Phone number must be at least 5 digits" })
    .max(20)
    .regex(/^[\d+\-\s()]+$/, { message: "Invalid phone number format" }),
});

/**
 * Validates personal details using Zod schema.
 * @param {Object} data - The personal details form data
 * @returns {Object} - { valid: true } or { errors: [{ errorType, message }] }
 */
export default function ValidatePersonalDetails(data) {
  const result = personalDetailsSchema.safeParse(data);

  if (!result.success) {
    const errors = result.error.errors.map((err) => ({
      errorType: err.path[0],
      message: err.message,
    }));
    return { errors };
  }

  return { valid: true };
}
