import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/header_logo.svg";
import Navigation from "../Navigation/Navigation";
import "./Header.css";
import Token from "../../utils/Token";


function Header() {
  const loggedIn = Token.get();
  const { pathname } = useLocation();
  return (
    <header className="header">
      <Link to="/"
        className={
          pathname === "/"
            ? "header__logo-link_active"
            : "header__logo-link"
        }
      >
        <img src={logo} alt="Логотип" className="header__logo" />
      </Link>
      <Navigation loggedIn={loggedIn} />
    </header>
  );
}

export default Header;
