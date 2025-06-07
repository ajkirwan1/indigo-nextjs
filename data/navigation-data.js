/** @format */

export default function GetNavData(session) {
  const navigationData = [
    {
      title: "NEWS",
      url: "/news",
    },
    {
      title: "CASE STUDIES",
      url: "/case-studies",
    },
    {
      title: "WHO WE ARE",
      url: "/who-we-are",
    },
    {
      title: "SERVICES",
      url: "/services",
    },
    {
      title: "CONTACT US",
      url: "/contact",
    },
    {
      title: session ? "ACCOUNT_LOGGED_IN" : "ACCOUNT",
      url: "/contact",
      submenu: [
        {
          title: "REGISTER",
          url: "/register",
        },
        {
          title: "ACCOUNT",
          url: "/account",
        },
        {
          title: "SignIn",
          url: "/",
        },
        {
          title: "SignOut",
          url: "/",
        },
      ],
    },
  ];

  return navigationData;
}
