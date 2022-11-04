import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/layout.css";

const DefaultLayout = ({ children }) => {
  const navigate = useNavigate();
  const userMenu = [];
  const adminMenu = [
    {
      name: "Home",
      path: "/",
      icon: "ri-home-line",
    },
    {
      name: "Buses",
      path: "/admin/buses",
      icon: "ri-bus-line",
    },
    {
      name: "Users",
      path: "/admin/users",
      icon: "ri-user-line",
    },
    {
      name: "Bookings",
      path: "/admin/bookings",
      icon: "ri-file-list-line",
    },
    {
      name: "Logout",
      path: "/logout",
      icon: "ri-logout-box-line",
    },
  ];
  const menuToBeRendered = adminMenu;
  let activeRoute = window.location.pathname;
  if (window.location.pathname.includes("book-now")) {
    activeRoute = "/";
  }

  return (
    <div className="layout-parent">
      <div className="sidebar">
        <div className="d-flex flex-column gap-3 justify-content-start menu">
          {menuToBeRendered.map((item, index) => {
            return (
              <div
                className={`${
                  activeRoute === item.path && "active-menu-item"
                } menu-item`}
              >
                <i className={item.icon}></i>
                <span
                  onClick={() => {
                    navigate(item.path);
                  }}
                >
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="body">
        <div className="header">header</div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
