import React from "react";
import "./Promo.css";
import promo_logo from "../../images/promo_logo.svg";

export default function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <article className="promo__info">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <p className="promo__subtitle">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <a
            className="promo__link"
            href="https://practicum.yandex.ru/web/"
            rel="noreferrer"
            target="_blank"
          >
            Узнать больше
          </a>
        </article>
        <img className="promo__image-logo" src={promo_logo} alt="WEB" />
      </div>
    </section>
  );
}
