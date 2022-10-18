import React from "react";
import "./AboutMe.css";
import avatar from "../../images/avatar.jpg";

export default function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <article className="about-me__info">
        <div>
          <h3 className="about-me__name">Дмитрий</h3>
          <p className="about-me__direction">Фронтенд-разработчик, 31 год</p>
          <p className="about-me__history">
            Я родился в Пермском крае, сейчас живу в Москве. Закончил ИжГТУ
            имени М.Т. Калашникова, специальность и направление подготовки
            «Конструкторско-технологическое обеспечение машиностроительных
            производств». В 2021 году решил сменить направление в работе и
            образовании на программирование, так как давно это хотел. Прошел
            курс по веб-разработке и хочу связать свою дальнейшую карьеру с этим
            направлением.
          </p>
          <a
            className="about-me__link"
            href="https://github.com/SemenovDmitrii"
            rel="noreferrer"
            target="_blank"
          >
            Github
          </a>
        </div>
        <img className="about-me__photo" src={avatar} alt="Фото" />
      </article>
    </section>
  );
}
