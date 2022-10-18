import React from "react";
import { Route, Switch, Link, NavLink } from "react-router-dom";
import logo from "../../images/header_logo.svg";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header(props) {
  return (
    <header className="header">
      <NavLink
        className="header__logo-link"
        activeClassName="header__logo-link_active"
        exact
        to="/"
      >
        <img className="header__logo" src={logo} alt="Логотип" />
      </NavLink>
      <Switch>
        <Route exact path="/">
          <ul className="header__navtab">
            <li className="header__navtab-element">
              <Link className="header__sing-up" to="/signup">
                Регистрация
              </Link>
            </li>
            <li className="header__navtab-element">
              <Link className="header__sign-in" to="/signin">
                Войти
              </Link>
            </li>
          </ul>
        </Route>
        <Route path={["/movies", "/saved-movies", "/profile"]}>
          <div className="header__navigation">
            <Navigation />
          </div>
          <button
            type="button"
            className="header__menu-button"
            onClick={props.onOpenMenu}
          />
        </Route>
      </Switch>
    </header>
  );
}

export default Header;
