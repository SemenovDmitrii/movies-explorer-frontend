import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "../../images/header_logo.svg";

export default function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <Link className="login__logo-link" exact to="/">
          <img className="login__logo" src={logo} alt="Лого" />
        </Link>
        <h1 className="login__title">Рады видеть!</h1>
        <form className="login__form" action="">
          <fieldset className="login__input-container">
            <label className="login__label">
              <h4 className="login__input-title">E-mail</h4>
              <input
                className="login__input"
                id="login__input-email"
                type="email"
                required
              />
            </label>
            <label className="login__label">
              <h4 className="login__input-title">Пароль</h4>
              <input
                className="login__input"
                id="login__input-password"
                type="password"
                required
              />
              <span
                className="login__input-error login__input-error_visible"
                id="login__input-email-error login__input-password"
              >
                Что-то пошло не так...
              </span>
            </label>
          </fieldset>
          <div className="login__button-container">
            <button type="button" className="login__button">
              Войти
            </button>
            <p className="login__reg-link">
              Ещё не зарегистрированы?
              <Link className="login__link" to="/signup">
                Регистрация
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
