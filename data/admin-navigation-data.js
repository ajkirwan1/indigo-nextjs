/** @format */
"use client";
export const adminNavigationData = [
  {
    title: "Clients",
    url: "/admin",
  },
  {
    title: "Add property",
    url: "/admin/properties/add-property",
  },
  // {
  //   title: "Add consulting",
  //   url: "/admin/add-consulting",
  // },
  {
    title: "Upload",
    url: "/upload",
    submenu: [
      {
        title: "image",
        url: "/admin/upload/image",
      },
      {
        title: "pdf",
        url: "/admin/upload/pdf",
      },
    ],
  },
  {
    title: "Logout",
    url: "/logout",
  },
];
