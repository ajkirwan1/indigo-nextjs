/** @format */

import { z } from "zod";

export default function ValidateContactForm(
  companyName,
  email,
  confirmEmail,
  phoneNumber
) {

  const formSchema = z.object({
    companyName: z
      .string()
      .nonempty({ message: "A name is required" })
      .min(3, { message: "A name must be at least 3 characters long" }),

    email: z
      .string()
      .nonempty({ message: "Email address is required" })
      .email({ message: "Invalid email address" }),

      confirmEmail: z
      .string()
      .nonempty({ message: "Email address is required" })
      .email({ message: "Invalid email address" }),

    phoneNumber: z
      .string()
      .nonempty({ message: "Phone number is required" })
      .regex(/^[+]?[0-9]{1,4}[.\-\s]?[0-9]{1,4}[.\-\s]?[0-9]{1,4}$/, {
        message: "Invalid phone number format",
      }),
  }).refine((data) => data.email === data.confirmEmail, {
    message: "Passwords don't match",
    path: ["confirmPassword"] // Highlights which field has the error
  });

  const validationResult = formSchema.safeParse({
    companyName,
    email,
    confirmEmail,
    phoneNumber,
  });

  if (!validationResult.success) {
    const formFieldErrors = validationResult.error.flatten().fieldErrors;
    const transformedObject = Object.keys(formFieldErrors).reduce((acc, key) => {
        acc[key] = formFieldErrors[key][0]; // Get the first element of the array
        return acc;
      }, {});
     return transformedObject;
  }
  return validationResult;
}
