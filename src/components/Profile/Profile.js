import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";

export default function Profile(props) {
  return (
    <>
      <Header onOpenMenu={props.onOpenMenu} />
      <section className="profile">
        <form className="profile__form">
          <h2 className="profile__title">Привет, Дмитрий!</h2>
          <fieldset className="profile__inputs">
            <label className="profile__label">
              <input
                className="profile__input"
                type="text"
                id="profile__input-name"
                required
                placeholder="Дмитрий"
              />
              <h4 className="profile__input-title">Имя</h4>
            </label>
            <label className="profile__label">
              <input
                className="profile__input"
                type="email"
                id="profile__input-email"
                required
                placeholder="pochta@yandex.ru"
              />
              <h4 className="profile__input-title">E-mail</h4>
            </label>
            <span
              className="profile__input-type-error"
              id="profile__input-name-error profile__input-email-error"
            ></span>
          </fieldset>
          <div className="profile__edit-container profile__edit-container_enabled">
            <button type="submit" className="profile__edit-button">
              Редактировать
            </button>
            <Link className="profile__link" to="/">
              Выйти из аккаунта
            </Link>
          </div>
        </form>
      </section>
      <Menu isOpen={props.isOpen} onClose={props.onClose} />
    </>
  );
}
