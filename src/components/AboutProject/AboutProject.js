import React from "react";
import "./AboutProject.css";

export default function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <ul className="about-project__article">
        <li className="about-project__element">
          <h3 className="about-project__element_title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__element_subtitle">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="about-project__element">
          <h3 className="about-project__element_title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__element_subtitle">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <ul className="about-project__time-list">
        <li className="about-project__time-element about-project__time-small">
          1 неделя
        </li>
        <li className="about-project__time-element about-project__time-big">
          4 недели
        </li>
        <li className="about-project__time-element about-project__time-direction">
          Back-end
        </li>
        <li className="about-project__time-element about-project__time-direction">
          Front-end
        </li>
      </ul>
    </section>
  );
}
