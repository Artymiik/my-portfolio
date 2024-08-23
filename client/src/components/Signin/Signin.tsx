import { Link } from "react-router-dom";
import "./Signin.sass";
import { Background } from "../Effects/Background";
import React from "react";
import { HandleRequest } from "../HandleRequest/HandleRequest";

export const Signin = () => {
  const [fields, setFields] = React.useState({
    nick: "",
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
        <p>Давай продолжим</p>
        <p>Отлично! Сейчас введи свой ник и пароль.</p>
      </div>

      <div id="pannel__inputs">
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
              Нет в системе? <Link to="/signup">Начать</Link>
            </p>
          </div>
          <div className="right">
            <button style={{ opacity: fieldsFilled ? 1 : 0.3 }}>Войти</button>
          </div>
        </div>
      </div>
    </>
  );
};
