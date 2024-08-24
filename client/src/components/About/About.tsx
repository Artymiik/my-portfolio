import { Clock, LaptopMinimal } from "lucide-react";
import { Navigator } from "../Navigator/Navigator";
import "./About.sass";
import React from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/all";
import { animateAbout } from "../animations/about.animation";

export const About = () => {
  // gsap.registerPlugin(ScrollTrigger);

  React.useEffect(() => {
    animateAbout();
  }, []);

  return (
    <>
      <Navigator />

      <section id="about">
        <div id="bg"></div>

        <div id="index__about">
          <div className="elements__index__about">
            <div className="left-line">
              <div
                className="circle-start"
                style={{
                  border: "2px solid rgba(255, 255, 255, 0.3)",
                  borderRadius: "50%",
                }}
              ></div>
              <div className="line__one__index"></div>
              <LaptopMinimal
                color="rgba(255, 255, 255, 0.3)"
                size={19}
                strokeWidth={1.75}
                style={{ marginTop: "8px", marginBottom: "8px" }}
                className="laptop-icon"
              />
              <div className="line__two__index"></div>
              <Clock
                color="rgba(255, 255, 255, 0.3)"
                size={19}
                strokeWidth={1.75}
                style={{ marginTop: "8px", marginBottom: "8px" }}
                className="clock"
              />
              <div className="line__three__index"></div>
            </div>

            <div className="right-content">
              <div className="block__1">
                <div className="for__line__one">
                  <p className="title-me">
                    Моя история. Профессиональный путь в веб-разработке
                  </p>
                  <p className="description-me">
                    Я Артем и мне 17. Развиваюсь в сфере веб разработки, пишу в
                    front-end и back-end технологиях. Начать впервые писать свой
                    код я начал в 12 лет, на Python! По сей день пишу на c#.
                  </p>
                </div>

                <div className="right">
                  <img
                    src="/photo_2024-08-09_23-07-25.jpg"
                    alt=""
                    className="img-me-about-index"
                  />
                </div>
              </div>

              <div className="block__2">
                <div className="for__line__two">
                  <p className="my-start">Моё начало</p>
                  <p className="title-my-scills">
                    Я изучал Python два года, затем HTML, CSS и JavaScript
                    восемь месяцев. Мой интерес к бэкенду привел к изучению PHP,
                    Golang и C#.
                  </p>
                  <p className="scills__language">
                    <span>HTML + React</span>, <span>CSS + sass</span>, Golang,{" "}
                    <span>JS + TS</span>, Python, <span>C#</span>, PHP
                  </p>
                </div>
              </div>

              <div className="block__3">
                <div className="for__line__three">
                  <p className="free-time">Свободное время</p>
                  <p className="title-free-time">
                    В свободное время я увлекаюсь изучением новых технологий в
                    back-end и front-end.
                  </p>
                  <p className="desc-free-time">
                    Также я увлекаюсь игрой на музыкальном инструменте, что
                    помогает мне расслабиться и отвлечься от разработки.
                  </p>
                </div>

                <div className="right__bottom img-last-index">
                  <img src="/foto-me-2.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
