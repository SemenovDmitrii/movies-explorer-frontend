import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "../../images/header_logo.svg";
import { useFormWithValidation } from "../../utils/validation";

export default function Login(props) {
  const { values, errors, isValid, handleChange } = useFormWithValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.onLogin(values.email, values.password);
  };

  return (
    <div className="login">
      <div className="login__container">
        <Link className="login__logo-link" exact to="/">
          <img className="login__logo" src={logo} alt="Лого" />
        </Link>
        <h1 className="login__title">Рады видеть!</h1>
        <form className="login__form" onSubmit={handleSubmit} noValidate>
          <fieldset className="login__input-container">
            <label className="login__label">
              <h4 className="login__input-title">E-mail</h4>
              <input
                className={`login__input ${
                  errors.email && "login__input_type_error"
                }`}
                id="login__input-email"
                type="email"
                name="email"
                value={values.email || ""}
                onChange={handleChange}
                disabled={props.isDisabledInput}
                pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
                required
              />
              <span
                className={`login__input-error ${
                  errors.email && "login__input-error_visible"
                }`}
              >
                {errors.email}
              </span>
            </label>
            <label className="login__label">
              <h4 className="login__input-title">Пароль</h4>
              <input
                className={`login__input ${
                  errors.password && "login__input_type_error"
                }`}
                id="login__input-password"
                type="password"
                name="password"
                value={values.password || ""}
                onChange={handleChange}
                disabled={props.isDisabledInput}
                required
              />
              <span
                className={`login__input-error ${
                  errors.password && "login__input-error_visible"
                }`}
              >
                {errors.password}
              </span>
            </label>
          </fieldset>
          <div className="login__button-container">
            <p
              className={`login__message ${
                props.errorMessage && "login__message_type_error"
              }`}
            >
              {props.errorMessage}
            </p>
            <button
              className={`login__button ${
                !isValid && "login__button_disabled"
              }`}
              type="submit"
              disabled={!isValid || props.isDisabledButton}
            >
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
