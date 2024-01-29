import React, { useState } from "react";
import "./loginPage.css";
import { useNavigate, Link } from "react-router-dom";
import bg from "../image/bg.png";
import axios from "axios";

const LoginPage = () => {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/", {
          email,
          password,
        })
        .then((res) => {
          if (res.data == "exist") {
            history("/home", { state: { id: email } });
          } else if (res.data == "notexist") {
            alert("user is not registered");
          }
        })
        .catch((e) => {
          alert("wrong details: ");
          console.log(e);
        });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="lpage">
      <div className="background">
        <img className="bgImage" src={bg} alt="" />
      </div>
      <div className="form">
        <form className="loginform" action="POST">
          <h1 className="heading">Вход в систему</h1>
          <label htmlFor="">Логин</label>
          <input
            className="logininput"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name=""
            placeholder="Введите логин"
          />
          <label htmlFor="">Пароль</label>
          <input
            className="logininput"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            name=""
            placeholder="Введите пароль"
          />
          <button onClick={submit} className="w-100 submitBtn">
            Войти
          </button>
          <br />
          or <Link to="/signup">регистрироваться аккаунт</Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
