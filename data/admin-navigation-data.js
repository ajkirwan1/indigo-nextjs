/** @format */
"use client";
export const adminNavigationData = [
  {
    title: "Home",
    url: "/admin",
  },
  {
    title: "Clients",
    url: "/admin/user",
  },
  {
    title: "Properties",
    url: "properties",
    submenu: [
      {
        title: "All properties",
        url: "/admin/properties",
      },
      {
        title: "Add properties",
        url: "/admin/properties/add-property",
      },
    ],
  },
  // {
  //   title: "Add consulting",
  //   url: "/admin/add-consulting",
  // },
  // {
  //   title: "Upload",
  //   url: "/upload",
  //   submenu: [
  //     {
  //       title: "image",
  //       url: "/admin/upload/image",
  //     },
  //     {
  //       title: "pdf",
  //       url: "/admin/upload/pdf",
  //     },
  //   ],
  // },
  {
    title: "Logout",
    url: "/logout",
  },
];
