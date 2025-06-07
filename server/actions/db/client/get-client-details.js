import db from "@/modules/db";

export async function GetClientDetails(userId) {
  try {
    const [user] = await db.$transaction([
      db.userNew.findUnique({
        where: { id: userId },
        select: {
          userName: true,
          registration: {
            select: {
              name: true,
              email: true,
              phoneNumber: true,
            },
          },
        },
      }),
    ]);

    if (!user) {
      return { dbFetchError: "User not found." };
    }

    return {
      userName: user.userName,
      name: user.registration?.name ?? null,
      email: user.registration?.email ?? null,
      phoneNumber: user.registration?.phoneNumber ?? null,
    };
  } catch (error) {
    console.error("Error fetching client details:", error);
    return { dbFetchError: "An error occurred fetching the user information." };
  }
}
