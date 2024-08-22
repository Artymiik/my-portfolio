import { Github, Laptop, Send } from "lucide-react";
import { Navigator } from "../Navigator/Navigator";
import "./Home.sass";
import { Footer } from "../Footer/Footer";
import { Link } from "react-router-dom";

export const Home = () => {
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
          <div className="card_my-active-language">
            <div
              className="card_language_react"
              style={{
                background: "conic-gradient(#15007f 60%, transparent 0% 100%)",
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
                background: "conic-gradient(#15007f 97%, transparent 0% 100%)",
              }}
            >
              <div className="con">
                <p>Sass</p>
                <p>Знаком с самого начало (5 лет)</p>
              </div>
            </div>

            <div
              className="card_language_react"
              style={{
                background: "conic-gradient(#15007f 80%, transparent 0% 100%)",
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
                background: "conic-gradient(#15007f 30%, transparent 0% 100%)",
              }}
            >
              <div className="con">
                <p>С# Web API</p>
                <p>Изучаю и пишу 6 месяцев</p>
              </div>
            </div>
          </div>
          <div className="card_my-contact">
            <div className="icon_top">
              <Send
                className="icon_soc"
                size={25}
                color="#fff"
                strokeWidth={1.5}
              />
              <Github
                className="icon_soc"
                size={25}
                color="#fff"
                strokeWidth={1.5}
              />
            </div>
            <div className="bottom_desc">
              <p>Мои соц. сети</p>
              <p>Подписаться</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
