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
import gsap, { Power3 } from "gsap";

export const Home = () => {
  React.useEffect(() => {
    // card_me
    gsap.set(".card_me", { x: -100, opacity: 0 });
    gsap.to(".card_me", 1.5, { x: 0, opacity: 1, ease: Power3.easeOut });

    // card_works
    gsap.set(".card_works", { x: 100, opacity: 0 });
    gsap.to(".card_works", 1.5, { x: 0, opacity: 1, ease: Power3.easeOut });

    // card_more_about
    gsap.set(".card_more_about", { x: 100, opacity: 0 });
    gsap.to(".card_more_about", 1.5, {
      x: 0,
      opacity: 1,
      ease: Power3.easeOut,
      delay: 0.1,
    });

    // card_my-contact
    gsap.set(".card_my-contact", { x: -100, opacity: 0 });
    gsap.to(".card_my-contact", 1.5, {
      x: 0,
      opacity: 1,
      ease: Power3.easeOut,
      delay: 0.3,
    });

    // card_my-active-language
    gsap.set(".card_my-active-language", { x: 100, opacity: 0 });
    gsap.to(".card_my-active-language", 1.5, {
      x: 0,
      opacity: 1,
      ease: Power3.easeOut,
      delay: 0.3,
    });

    // card-1-left-my-plans
    gsap.set(".card-1-left-my-plans", { x: -100, opacity: 0 });
    gsap.to(".card-1-left-my-plans", 1.5, {
      x: 0,
      opacity: 1,
      ease: Power3.easeOut,
      delay: 0.7,
    });

    // card-1-left-my-blog
    gsap.set(".card-1-left-my-blog", { x: -100, opacity: 0 });
    gsap.to(".card-1-left-my-blog", 1.5, {
      x: 0,
      opacity: 1,
      ease: Power3.easeOut,
      delay: 0.6,
    });

    // TXT animation
    gsap.set(".min-description", { y: 20, opacity: 0 });
    gsap.to(".min-description", 1, {
      y: 0,
      ease: Power3.easeOut,
      delay: 0.2,
      opacity: 1,
    });

    gsap.set(".my-name-is", { y: 20, opacity: 0 });
    gsap.to(".my-name-is", 1, {
      y: 0,
      ease: Power3.easeOut,
      delay: 0.4,
      opacity: 1,
    });

    gsap.set(".description", { y: 20, opacity: 0 });
    gsap.to(".description", 1, {
      y: 0,
      ease: Power3.easeOut,
      delay: 0.5,
      opacity: 1,
    });
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

          <Link
            to="/about"
            className="card_more_about"
            id="card-mini"
            style={{ textDecoration: "none" }}
          >
            <div className="left_card_about">
              <img className="img_me" src="/signature.png" width={200} alt="" />
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

        <div className="row_bottom">
          <div className="left__cards__bottom__row">
            <div className="card_my-contact">
              <div className="icon_top">
                <Send
                  className="icon_soc"
                  size={27}
                  color="#fff"
                  strokeWidth={1.5}
                />
                <Github
                  className="icon_soc"
                  size={27}
                  color="#fff"
                  strokeWidth={1.5}
                />
                <Mail
                  className="icon_soc"
                  size={27}
                  color="#fff"
                  strokeWidth={1.5}
                />
                <Instagram
                  className="icon_soc"
                  size={27}
                  color="#fff"
                  strokeWidth={1.5}
                />
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
