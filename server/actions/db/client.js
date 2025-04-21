/** @format */

import db from "@/modules/db";

export async function getUser(id) {
  try {
    const registration = await db.userRegistration.findFirst({
      where: { id },
    });
    
    if (!registration) {
      // Handle not found
      return null;
    }
    
    if (registration.registration === "accepted") {
      // Fetch with related usersNew.id
      const userPdfLinks = await db.userNew.findFirst({
        where: {
          registrationId: id,
        },
        select: {
          pdfLinks: {
            include: {
              pdf: {
                select: {
                  id: true,
                  name: true,
                  url: true,
                },
              },
            },
          },
        },
      });

      const pdfs = userPdfLinks?.pdfLinks.map(link => link.pdf) || [];
      const result = {
        ...registration,
        pdfs
      }
      return result

    }
    
    return registration;
  } catch (error) {
    console.log(error)
    return { dbFetchError: "An error occured fetching the user information." };
  }
}
