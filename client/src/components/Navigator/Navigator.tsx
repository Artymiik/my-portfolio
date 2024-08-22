import "./Navigator.sass";
import { Link } from "react-router-dom";

const links = [
  {
    id: 1,
    title: "Главная",
    path: "/",
  },
  {
    id: 2,
    title: "Обо мне",
    path: "/about",
  },
  {
    id: 3,
    title: "Работы",
    path: "/works",
  },
  {
    id: 4,
    title: "Контакты",
    path: "/contact",
  },
];

export const Navigator = () => {
  return (
    <>
      <div id="Navigator">
        <div className="left-nav">
          <p>Artemiik</p>
        </div>
        <div className="center-nav">
          {links.map((item) => (
            <Link
              to={item.path}
              key={item.id}
              className="links"
              // style={{ color: location.pathname === item.path ? "#fff" : "#4f4f4f" }}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="right-nav">
          <Link to="/form" className="txt-btn">
            Связь со мной
          </Link>
        </div>
      </div>
    </>
  );
};
