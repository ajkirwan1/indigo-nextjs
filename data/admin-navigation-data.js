/** @format */
export default function GetAdminNavData() {
  const adminNavigationData = [
    {
      title: "Home",
      url: "/admin",
    },
    {
      title: "Clients",
      url: "/admin/user",
    },
    {
      title: "ACCOUNT",
      url: "/contact",
      submenu: [
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

  return adminNavigationData;
}
