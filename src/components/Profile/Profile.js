import React, { useContext } from "react";
import "./Profile.css";
import Header from "../Header/Header";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../utils/validation";

function Profile({ onEditProfile, onSignOut, isWaitingResponse }) {
  const currentUser = useContext(CurrentUserContext);
  const { values, setValues, handleChange, errors, isValid } =
    useFormWithValidation(currentUser);

  React.useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [currentUser]);

  return (
    <>
      <Header />
      <section className="profile">
        <form className="profile__form">
          <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
          <fieldset className="profile__inputs">
            <label className="profile__label">
              <input
                className="profile__input"
                type="text"
                name="name"
                minLength="2"
                maxLength="30"
                value={values.name || ""}
                onInput={handleChange}
                required
              />
              <h4 className="profile__input-title">Имя</h4>
              <span className="profile__input-error">{errors.name}</span>
            </label>
            <label className="profile__label">
              <input
                className="profile__input"
                name="email"
                type="email"
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$"
                value={values.email || ""}
                onInput={handleChange}
              />
              <h4 className="profile__input-title">E-mail</h4>
              <span className="profile__input-error">{errors.email}</span>
            </label>
          </fieldset>
          <div className="profile__edit-container profile__edit-container_enabled">
            <button
              type="button"
              onClick={() => onEditProfile(values)}
              className="profile__edit-button"
              disabled={
                isWaitingResponse ||
                !isValid ||
                (currentUser.name === values.name &&
                  currentUser.email === values.email)
              }
            >
              Редактировать
            </button>
            <button className="profile__link" onClick={onSignOut}>
              Выйти из аккаунта
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Profile;
