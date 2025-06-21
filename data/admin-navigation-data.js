/** @format */
export default function GetAdminNavData() {
  const adminNavigationData = [
    {
      title: "ADMIN HOME",
      url: "/admin",
    },
    {
      title: "ALL CLIENTS",
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
