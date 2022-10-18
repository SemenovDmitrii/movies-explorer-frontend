import React from "react";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__link-list">
        <li className="portfolio__link-element">
          <a
            className="portfolio__link"
            href="https://semenovdmitrii.github.io/how-to-learn/"
            rel="noreferrer"
            target="_blank"
          >
            Статичный сайт
            <div className="portfolio__arrow">↗</div>
          </a>
        </li>
        <li className="portfolio__link-element">
          <a
            className="portfolio__link"
            href="https://semenovdmitrii.github.io/russian-travel/"
            rel="noreferrer"
            target="_blank"
          >
            Адаптивный сайт
            <div className="portfolio__arrow">↗</div>
          </a>
        </li>
        <li className="portfolio__link-element">
          <a
            className="portfolio__link"
            href="https://github.com/SemenovDmitrii/react-mesto-api-full"
            rel="noreferrer"
            target="_blank"
          >
            Одностраничное приложение
            <div className="portfolio__arrow">↗</div>
          </a>
        </li>
      </ul>
    </section>
  );
}
