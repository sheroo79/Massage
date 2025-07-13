import React from "react";
import Sidebar from "../../ClientPages/Sidebar";
import { Outlet } from "react-router-dom";

function AdminLayout({role}) {
  const menuMap = {
    admin: [
      { label: "Dashboard", path: "/admin" },
      { label: "Calendar", path: "/admin/calendar" },
      { label: "Users", path: "/admin/users" },
      { label: "Services", path: "/admin/serviceProviders" },
    ],
    service_provider: [
      { label: "Dashboard", path: "/service" },
      { label: "Calendar", path: "/service/calendar" },
      { label: "Services", path: "/service/services" },
    ],
  };
  const menu = menuMap[role];
  return (
    <>
      <div className="flex">
        <Sidebar menuItem={menu} />
        <Outlet />
      </div>
    </>
  );
}

export default AdminLayout;
