import React, { useState } from "react";
import "./loginPage.css";
import { useNavigate, Link } from "react-router-dom";
import bg from "../image/bg.png";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();
  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/signup", {
          email,
          password,
        })
        .then((res) => {
          if (res.data == "exist") {
            alert("user already exist");
          } else if (res.data == "notexist") {
            history("/home", { state: { id: email } });
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
        <form action="POST">
          <h1 className="heading">Вход в систему</h1>
          <label htmlFor="">Email</label>
          <input
            className="logininput"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="login"
            placeholder="Введите email"
          />
          <label htmlFor="">Пароль</label>
          <input
            className="logininput"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            name="password"
            placeholder="Введите пароль"
          />
          <button onClick={submit} className="w-100 submitBtn">
            Pегистрироваться аккаунт
          </button>
          <br />
          or <Link to="/">bход в систему</Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
