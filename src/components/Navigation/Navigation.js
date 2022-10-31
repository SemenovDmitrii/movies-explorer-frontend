import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navigation.css";

export default function Navigation({ loggedIn }) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { pathname } = useLocation();
  const handleOpenMenu = () => {
    setIsOpenMenu(true);
  };
  const handleCloseMenu = () => {
    setIsOpenMenu(false);
  };
  return (
    <>
      <nav className="navigation">
        {!loggedIn ? (
          <ul className="header__navtab">
            <li className="header__navtab-element">
              <Link className="header__singup" to="/signup">
                Регистрация
              </Link>
            </li>
            <li className="header__navtab-element">
              <Link className="header__signin" to="/signin">
                Войти
              </Link>
            </li>
          </ul>
        ) : (
          <>
            <div className="header__navigation">
              <ul className="navigation__list">
                <li className="navigation__element navigation__element_container-move">
                  <ul className="movies-navigation">
                    <li className="movies-navigation__element">
                      <NavLink
                        to="/movies"
                        className={
                          pathname === "/movies"
                            ? "movies-navigation__link_active-hed"
                            : "movies-navigation__link"
                        }
                        onClick={handleCloseMenu}
                      >
                        Фильмы
                      </NavLink>
                    </li>
                    <li className="movies-navigation__element">
                      <NavLink
                        to="/saved-movies"
                        className={
                          pathname === "/saved-movies"
                            ? "movies-navigation__link_active-hed"
                            : "movies-navigation__link"
                        }
                        onClick={handleCloseMenu}
                      >
                        Сохранённые фильмы
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="navigation__element">
                  <NavLink
                    to="/profile"
                    className="navigation__profile-button"
                    onClick={handleCloseMenu}
                  >
                    Аккаунт
                    <button className="navigation__profile-icon" />
                  </NavLink>
                </li>
              </ul>
            </div>
            <button
              type="button"
              className="header__menu-button"
              onClick={handleOpenMenu}
            />
          </>
        )}
      </nav>
      <section className={`menu ${isOpenMenu ? `menu_opened` : ` `}`}>
        <div className="menu__container">
          <button
            type="button"
            className="menu__close-button"
            onClick={handleCloseMenu}
          ></button>
          <ul className="navigation__list">
            <li className="navigation__element navigation__element_menu">
              <ul className="movies-navigation">
                <li className="movies-navigation__element movies-navigation__element_place_menu">
                  <Link
                    to="/"
                    className="movies-navigation__link"
                    onClick={handleCloseMenu}
                  >
                    Главная
                  </Link>
                </li>
                <li className="movies-navigation__element">
                  <NavLink
                    to="/movies"
                    className={
                      pathname === "/movies"
                        ? "movies-navigation__link_active"
                        : "movies-navigation__link"
                    }
                    onClick={handleCloseMenu}
                  >
                    Фильмы
                  </NavLink>
                </li>
                <li className="movies-navigation__element">
                  <NavLink
                    to="/saved-movies"
                    className={
                      pathname === "/saved-movies"
                        ? "movies-navigation__link_active"
                        : "movies-navigation__link"
                    }
                    onClick={handleCloseMenu}
                  >
                    Сохранённые фильмы
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="navigation__element">
              <NavLink
                to="/profile"
                className="navigation__profile-button"
                onClick={handleCloseMenu}
              >
                Аккаунт
                <button className="navigation__profile-icon" />
              </NavLink>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
