"use client";

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { FaOpencart } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menus = [
    {
      menuName: "Home",
      navigateTo: "home",
    },
    {
      menuName: "Products",
      navigateTo: "products",
    },
    {
      menuName: "Pricing",
      navigateTo: "pricing",
    },
    {
      menuName: "Customers",
      navigateTo: "customers",
    },
    {
      menuName: "About",
      navigateTo: "aboutus",
    },
    {
      menuName: "FAQ",
      navigateTo: "#FAQ",
    },
    {
      menuName: "Contact",
      navigateTo: "#contactus",
    },
    {
      menuName: "Cart",
      navigateTo: "cart",
    },
  ];

  const [activePage, setActivePage] = useState("Home");

  return (
    <nav
      style={{ zIndex: 200 }}
      className={`navbar position-fixed w-100 navbar-expand-lg bg-dark navbar-dark ${
        isOpen ? "show" : ""
      }`}
    >
      <div className="container">
        <a href="#" className="navbar-brand fw-bolder">
          VK Restaurant
        </a>
        <button type="button" onClick={toggleMenu} className="navbar-toggler">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            {menus.map((menu, index) => {
              return (
                <li className="nav-item" key={index}>
                  <Link
                    href={menu.navigateTo}
                    className={`nav-link ${
                      activePage == menu.menuName ? "active" : "inactive"
                    }`}
                  >
                    {menu.menuName == "Cart" ? (
                      <div>
                        <div className="text d-block d-md-none">
                          {menu.menuName}
                        </div>
                        <div className="position-relative d-none d-md-block">
                          <FaOpencart size={18} />
                          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger mt-0">
                            4
                          </span>
                        </div>
                      </div>
                    ) : (
                      menu.menuName
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
