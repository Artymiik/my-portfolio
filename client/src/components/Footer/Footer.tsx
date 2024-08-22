import { Link } from "react-router-dom";
import "./Footer.sass";

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

export const Footer = () => {
  return (
    <>
      <div id="footer">
        <p>Artemiik</p>
        {links.map((item) => (
          <Link to={item.path} key={item.id} className="links">
            {item.title}
          </Link>
        ))}
      </div>
    </>
  );
};
