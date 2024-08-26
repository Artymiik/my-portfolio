import {
  Github,
  Instagram,
  Laptop,
  Mail,
  PencilLine,
  Send,
} from "lucide-react";
import { Navigator } from "../Navigator/Navigator";
import "./Home.sass";
import { Link } from "react-router-dom";
import React from "react";
import { animateHome } from "../animations/home.animation";

export const Home = () => {
  React.useEffect(() => {
    animateHome();
  }, []);

  return (
    <>
      <Navigator />

      <div id="home_section">
        <div className="row_top">
          <div className="card_me">
            <div className="left_card_me">
              <img
                className="img_me"
                src="/photo_2024-08-09_23-07-25.jpg"
                width={200}
                alt=""
              />
            </div>
            <div className="right_card_me">
              <p className="min-description">веб разработчик</p>
              <p className="my-name-is">Артём Власов</p>
              <p className="description">
                Я занимаюсь веб разработкой, проживаю в Перми
              </p>
            </div>
          </div>

          <div className="flex__mobile">
            <Link
              to="/about"
              className="card_more_about"
              id="card-mini"
              style={{ textDecoration: "none" }}
            >
              <div className="left_card_about">
                <img
                  className="img_me"
                  src="/signature.png"
                  width={200}
                  alt=""
                />
              </div>
              <div className="right_card_about">
                <p className="min-description">больше обо мне</p>
                <p className="title">Достижения</p>
              </div>
            </Link>

            <Link
              to="/works"
              className="card_works"
              id="card-mini"
              style={{ textDecoration: "none" }}
            >
              <div className="left_card_works">
                <Laptop className="laptop" size={57} strokeWidth={1.5} />
              </div>
              <div className="right_card_works">
                <p className="min-description">открыть</p>
                <p className="title">Проекты</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="row_bottom">
          <div className="left__cards__bottom__row">
            <div className="card_my-contact">
              <div className="icon_top">
                <Link
                  to="https://t.me/artem_iik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-icon-c"
                >
                  <Send
                    className="icon_soc"
                    size={27}
                    strokeWidth={1.5}
                  />
                </Link>
                <Link
                  to="https://github.com/Artymiik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-icon-c"
                >
                  <Github
                    className="icon_soc"
                    size={27}
                    strokeWidth={1.5}
                  />
                </Link>
                <Link
                  to="https://artemvlasiv1909@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-icon-c"
                >
                  <Mail
                    className="icon_soc"
                    size={27}
                    strokeWidth={1.5}
                  />
                </Link>
                <Link
                  to="https://www.instagram.com/artem.iik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-icon-c"
                >
                  <Instagram
                    className="icon_soc"
                    size={27}
                    strokeWidth={1.5}
                  />
                </Link>
              </div>
              <div className="bottom_desc">
                <p>Мои соц. сети</p>
                <p>Подписаться</p>
              </div>
            </div>

            <div className="section-bottom-left-cards">
              <Link
                to="/plans"
                className="card-1-left-my-plans"
                id="card-mini"
                style={{ textDecoration: "none" }}
              >
                <div className="left_card_plans">
                  <p>
                    Мои близкие <br />
                    <span>цели и планы</span>
                  </p>
                </div>
                <div className="right_card_plans">
                  <p className="min-description">цели и планы</p>
                  <p className="title">Смотреть</p>
                </div>
              </Link>

              <Link
                to="/blog"
                className="card-1-left-my-blog"
                id="card-mini"
                style={{ textDecoration: "none" }}
              >
                <div className="left_card_plans">
                  <PencilLine className="laptop" size={57} strokeWidth={1.5} />
                </div>
                <div className="right_card_plans">
                  <p className="min-description">мои посты</p>
                  <p className="title">Мой блог</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="card_my-active-language">
            <div className="top-card-language">
              <div
                className="card_language_react"
                style={{
                  background:
                    "conic-gradient(rgb(127 119 0) 60%, transparent 0% 100%)",
                }}
              >
                <div className="con">
                  <p>React</p>
                  <p>Знаком с React 2 года</p>
                </div>
              </div>

              <div
                className="card_language_react"
                style={{
                  background:
                    "conic-gradient(rgb(127 119 0) 97%, transparent 0% 100%)",
                }}
              >
                <div className="con">
                  <p>Sass</p>
                  <p>Знаком с самого начало (5 лет)</p>
                </div>
              </div>
            </div>

            <div className="bottom-card-language">
              <div
                className="card_language_react"
                style={{
                  background:
                    "conic-gradient(rgb(127 119 0) 80%, transparent 0% 100%)",
                }}
              >
                <div className="con">
                  <p>JS</p>
                  <p>Все продолжаю изучать, (3 года)</p>
                </div>
              </div>

              <div
                className="card_language_react"
                style={{
                  background:
                    "conic-gradient(rgb(127 119 0) 30%, transparent 0% 100%)",
                }}
              >
                <div className="con">
                  <p>С# Web API</p>
                  <p>Изучаю и пишу 6 месяцев</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
