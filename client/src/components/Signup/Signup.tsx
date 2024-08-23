import React from "react";
import { Background } from "../Effects/Background";
import "./Signup.sass";
import { Link } from "react-router-dom";

export const Signup = () => {
  const [fields, setFields] = React.useState({
    nick: "",
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    e.preventDefault();

    const { name, value } = e.target;
    setFields({
      ...fields,
      [name]: value,
    });
  };

  const fieldsFilled = Object.values(fields).every(
    (field) => field.trim() !== ""
  );

  return (
    <>
      <Background />

      <div id="top__pannel__signin">
        <p>Добро пожаловать</p>
        <p>Отлично! Введи данные чтобы мы узнали тебя ближе.</p>
      </div>

      <div id="pannel__inputs-signup">
        <div className="input__box">
          <input
            type="text"
            name="nick"
            value={fields.nick}
            onChange={handleChange}
            required
          />
          <label>username</label>
        </div>
        <div className="input__box">
          <input
            type="email"
            name="email"
            value={fields.email}
            onChange={handleChange}
            required
          />
          <label>e-mail</label>
        </div>
        <div className="input__box">
          <input
            type="password"
            name="password"
            value={fields.password}
            onChange={handleChange}
            required
          />
          <label>password</label>
        </div>
        {/* <HandleRequest status_code={203} message="Success! This is success methods." /> */}
      </div>

      <div id="pannel__to__desc">
        <p>Для доступа к ограниченной информации, требуется авторизация!</p>
      </div>

      <div id="bottom__pannel__continue">
        <div className="elements__signin__bottom">
          <div className="left">
            <p>
              Ты уже был здесь? <Link to="/signin">Войти</Link>
            </p>
          </div>
          <div className="right">
            <button style={{ opacity: fieldsFilled ? 1 : 0.3 }}>Начать</button>
          </div>
        </div>
      </div>
    </>
  );
};
