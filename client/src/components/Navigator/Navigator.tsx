import {
  AlignJustify,
  Github,
  Instagram,
  Send,
  UserRound,
  X,
} from "lucide-react";
import "./Navigator.sass";
import { Link } from "react-router-dom";
import React from "react";
import gsap from "gsap";
import { animateNavigator } from "../animations/navigator.animation";

const links = [
  {
    id: 1,
    title: "Главная",
    title_mobile: "Главная",
    path: "/",
  },
  {
    id: 2,
    title: "Обо мне",
    title_mobile: "Моя история",
    path: "/about",
  },
  {
    id: 3,
    title: "Работы",
    title_mobile: "Работы и Проекты",
    path: "/works",
  },
  {
    id: 4,
    title: "Сообщение",
    title_mobile: "Сообщение",
    path: "/message",
  },
];

export const Navigator = () => {
  const menu = React.useRef(null);
  const menuBtnClose = React.useRef(null);

  const openMenu = () => {
    animateNavigator(menu);
  };

  const closeMenu = () => {
    gsap.to(menu.current, {
      x: -800,
      duration: 0.5,
      display: "none",
    });
  };

  return (
    <>
      <div id="Navigator">
        <div className="left-nav">
          <p className="logo">Artemiik</p>
        </div>
        <div className="center-nav">
          {links.map((item) => (
            <Link to={item.path} key={item.id} className="links">
              {item.title}
            </Link>
          ))}
        </div>
        <div className="right-nav">
          <Link to="/signin" className="txt-btn">
            <UserRound size={19} strokeWidth={1.5} />
          </Link>
        </div>
        <div className="menu-right" onClick={openMenu}>
          <AlignJustify size={22} strokeWidth={1.5} color="#fff" />
        </div>
      </div>

      <div id="Navigator__mobile" ref={menu}>
        <X
          className="close-btn"
          ref={menuBtnClose}
          onClick={closeMenu}
          size={25}
          strokeWidth={1.5}
          color="#fff"
        />

        <div className="elements__nav__mobile">
          {links.map((item, index) => (
            <Link
              to={item.path}
              key={item.id}
              className={`links link-${index}`}
            >
              {item.title_mobile}
            </Link>
          ))}
          <div className="line"></div>

          <p className="resource-github">
            Код и ресурсы этого сайта, можно найти в моём{" "}
            <Link
              to="https://github.com/Artymiik/my-portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </Link>
          </p>

          <div className="contact__nav">
            <Link
              to="https://github.com/Artymiik"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github
                className="icon_soc"
                size={25}
                color="#5b5b5b"
                strokeWidth={1.5}
              />
            </Link>
            <Link
              to="https://www.instagram.com/artem.iik"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram
                className="icon_soc"
                size={25}
                color="#5b5b5b"
                strokeWidth={1.5}
              />
            </Link>
            <Link
              to="https://t.me/artem_iik"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Send
                className="icon_soc"
                size={25}
                color="#5b5b5b"
                strokeWidth={1.5}
              />
            </Link>
          </div>

          <Link
            to="/signin"
            className="authenticate"
            style={{ textDecoration: "none" }}
          >
            <div className="line-bottom"></div>
            <div className="content">
              <p>Войти в систему</p>
              <UserRound size={22} color="#cacaca" strokeWidth={1.5} />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
