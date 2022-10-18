import React from "react";
import "./Techs.css";

export default function Techs() {
  return (
    <section className="techs" id="techs">
      <div className="techs__container">
        <h2 className="techs__title">Технологии</h2>
        <div className="techs__info">
          <h3 className="techs__info-title">7 технологий</h3>
          <p className="techs__info-subtitle">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
        </div>
        <ul className="techs__list">
          <li className="techs__element">
            <a
              className="techs__link"
              href="https://ru.wikipedia.org/wiki/HTML"
              target="_blank"
              rel="noreferrer"
            >
              HTML
            </a>
          </li>
          <li className="techs__element">
            <a
              className="techs__link"
              href="https://ru.wikipedia.org/wiki/CSS"
              target="_blank"
              rel="noreferrer"
            >
              CSS
            </a>
          </li>
          <li className="techs__element">
            <a
              className="techs__link"
              href="https://ru.wikipedia.org/wiki/JavaScript"
              target="_blank"
              rel="noreferrer"
            >
              JS
            </a>
          </li>
          <li className="techs__element">
            <a
              className="techs__link"
              href="https://ru.reactjs.org"
              target="_blank"
              rel="noreferrer"
            >
              React
            </a>
          </li>
          <li className="techs__element">
            <a
              className="techs__link"
              href="https://git-scm.com/"
              target="_blank"
              rel="noreferrer"
            >
              Git
            </a>
          </li>
          <li className="techs__element">
            <a
              className="techs__link"
              href="https://expressjs.com/ru"
              target="_blank"
              rel="noreferrer"
            >
              Express.js
            </a>
          </li>
          <li className="techs__element">
            <a
              className="techs__link"
              href="https://www.mongodb.com"
              target="_blank"
              rel="noreferrer"
            >
              mongoDB
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
