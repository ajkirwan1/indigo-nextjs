/** @format */

export default function GetNavData() {
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
      title: "ACCOUNT",
      url: "/contact",
      submenu: [
        {
          title: "REGSITER",
          url: "/register",
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
