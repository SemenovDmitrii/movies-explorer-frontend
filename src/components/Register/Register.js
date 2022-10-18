import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import logo from "../../images/header_logo.svg";

export default function Register() {
  return (
    <div className="register">
      <div className="register__container">
        <Link className="register__logo-link" exact to="/">
          <img className="register__logo" src={logo} alt="Лого" />
        </Link>
        <h1 className="register__title">Добро пожаловать!</h1>
        <form className="register__form" action="">
          <fieldset className="register__input-container">
            <label className="register__label">
              <h4 className="register__input-title">Имя</h4>
              <input
                className="register__input register__input_error"
                id="register__input-name"
                type="text"
                required
              />
            </label>
            <label className="register__label">
              <h4 className="register__input-title">E-mail</h4>
              <input
                className="register__input register__input_error"
                id="register__input-email"
                type="email"
                required
              />
            </label>
            <label className="register__label">
              <h4 className="register__input-title">Пароль</h4>
              <input
                className="register__input register__input_error register__input_type_error"
                id="register__input-password"
                type="password"
                required
              />
              <span
                className="register__input-error register__input-error_visible"
                id="register__input-name-error register__input-email-error register__input-password-error"
              >
                Что-то пошло не так...
              </span>
            </label>
          </fieldset>
          <div className="register__button-container">
            <button type="submit" className="register__button">
              Зарегистрироваться
            </button>
            <p className="register__auth-link">
              Уже зарегистрированы?
              <Link className="register__link" to="/signin">
                Войти
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
