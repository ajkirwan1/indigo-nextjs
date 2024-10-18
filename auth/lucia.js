/** @format */

import { Lucia } from "lucia";
import { BetterSqlite3Adapter } from "@lucia-auth/adapter-sqlite";
import sql from "better-sqlite3";
import { cookies } from "next/headers";
import { cache } from "react";
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import db from "@/modules/db";
// import { webcrypto } from "crypto";
// globalThis.crypto = webcrypto as Crypto;
// const db = sql("main.db");
// const adapter = new BetterSqlite3Adapter(db, {
// 	user: "user",
// 	session: "session"
// });

const prismaadapter = new PrismaAdapter(db.session, db.user);

export const lucia = new Lucia(prismaadapter, {
	sessionCookie: {
	  attributes: {
		secure: process.env.NODE_ENV === "production",
	  },
	},
	sessionExpiresIn: new TimeSpan(30, "d"),
	getUserAttributes: (attributes) => {
	  return {
		username: attributes.username,
	  };
	},
  });

// const prismaadapter = new PrismaAdapter(db,  {
// 		sessionCookie: {
// 			attributes: {
// 				secure: process.env.NODE_ENV === "production"
// 			}
// 		},
// 		getUserAttributes: (attributes) => {
// 			return {
// 				username: attributes.username
// 			};
// 		}
// 	});

// export const lucia = new Lucia(adapter, {
// 	sessionCookie: {
// 		attributes: {
// 			secure: process.env.NODE_ENV === "production"
// 		}
// 	},
// 	getUserAttributes: (attributes) => {
// 		return {
// 			username: attributes.username
// 		};
// 	}
// });

// export const lucia = new Lucia(prismaadapter, {
//   sessionCookie: {
//     attributes: {
//       secure: process.env.NODE_ENV === "production",
//     },
//   },
//   getUserAttributes: (attributes) => {
//     return {
//       username: attributes.username,
//     };
//   },
// });

export const validateRequest = cache(async () => {
  const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;
  if (!sessionId) {
    return {
      user: null,
      session: null,
    };
  }

  const result = await lucia.validateSession(sessionId);
  // next.js throws when you attempt to set cookie when rendering page
  try {
    if (result.session && result.session.fresh) {
      const sessionCookie = lucia.createSessionCookie(result.session.id);
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      );
    }
    if (!result.session) {
      const sessionCookie = lucia.createBlankSessionCookie();
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      );
    }
  } catch {}
  return result;
});
