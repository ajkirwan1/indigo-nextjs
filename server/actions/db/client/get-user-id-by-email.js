'use server'

import db from "@/modules/db";
import { createErrorResponse } from "@/utils/errors/error-response";

export async function GetUserNewIdByEmail(email) {
  try {
    const userNew = await db.userNew.findFirst({
      where: {
        registration: {
          email: email,
        },
      },
      select: {
        id: true,
      },
    });

    console.log(userNew, "USERDETAILS")

    if (!userNew) {
      console.error(`[GetUserNewIdByEmail] USER_NOT_FOUND: No UserNew record for email "${email}"`);
      return createErrorResponse("USER_NOT_FOUND", "UserNew not found for the provided email.");
    }

    return {
      success: true,
      userId: userNew.id,
    };
  } catch (error) {
    console.error(`[GetUserNewIdByEmail] DB_ERROR: Failed to fetch UserNew ID for email "${email}"`, error);
    return createErrorResponse("DB_ERROR", "An error occurred fetching the user ID.");
  }
}
