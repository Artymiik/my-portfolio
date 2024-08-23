import { AlignJustify, UserRound, X } from "lucide-react";
import "./Navigator.sass";
import { Link } from "react-router-dom";
import React from "react";
import gsap from "gsap";

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
    title_mobile: "Проекты и работы",
    path: "/works",
  },
  {
    id: 4,
    title: "Контакты",
    title_mobile: "Социальные сети",
    path: "/contact",
  },
];

export const Navigator = () => {
  const menu = React.useRef(null);
  const menuBtnClose = React.useRef(null);

  const openMenu = () => {
    menu.current.style.display = "block";

    gsap.set(menu.current, {transform: "translate(0px, 0px)"})
    gsap.from(menu.current, {
      x: -800,
      duration: 0.3,
    });

    gsap.set(".link-0", { x: -20, opacity: 0 });
    gsap.to(".link-0", 0.2, {
      x: 0,
      opacity: 1,
      delay: 0.1,
    });
    gsap.set(".link-1", { x: -20, opacity: 0 });
    gsap.to(".link-1", 0.2, {
      x: 0,
      opacity: 1,
      delay: 0.2,
    });
    gsap.set(".link-2", { x: -20, opacity: 0 });
    gsap.to(".link-2", 0.2, {
      x: 0,
      opacity: 1,
      delay: 0.3,
    });
    gsap.set(".link-3", { x: -20, opacity: 0 });
    gsap.to(".link-3", 0.2, {
      x: 0,
      opacity: 1,
      delay: 0.4,
    });
    gsap.set(".authenticate", { x: 100, opacity: 0 });
    gsap.to(".authenticate", 0.3, {
      x: 0,
      opacity: 1,
      delay: 0.4,
    });
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

          <Link
            to="/signin"
            className="authenticate"
            style={{ textDecoration: "none" }}
          >
            <UserRound size={22} color="#cacaca" strokeWidth={1.5} />
            <p>Открыть доступ</p>
          </Link>
        </div>
      </div>
    </>
  );
};
