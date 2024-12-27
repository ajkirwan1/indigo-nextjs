import db from "@/modules/db";

export async function GetPendingUsers() {


    const existingUsers = await db.user.findMany({
        select: {
          id: true,
          firstname: true,
          lastname: true,
          email: true,
          propertyaccess: true,
          consultingaccess: true,
          accessrequestdate: true,
        },
      });

      return existingUsers
}

