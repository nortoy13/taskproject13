import React, { useState, useEffect } from "react";
import "./home.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useParams, useNavigate } from "react-router";

export default function Update() {
  const { Id } = useParams();
  const navigate = useNavigate();

  const [createForm, setCreateForm] = useState(false);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [pnumber, setPnumber] = useState("");
  const [nofOrder, setNofOrder] = useState("");
  const [user, setUser] = useState("");
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/update/" + Id)
      .then((response) => {
        setId(response.data.id);
        setName(response.data.name);
        setPnumber(response.data.pnumber);
        setNofOrder(response.data.nofOrder);
        setUser(response.data.user);
      })
      .catch((error) => console.log(error));
  }, [orders]);
  async function update(e) {
    e.preventDefault();
    axios
      .put("http://localhost:8000/updateOrder/" + Id, { id, name, nofOrder, user, pnumber })
      .then((result) => {
        console.log(result);
        navigate("/home");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="home">
      <div className="createForm">
        <form action="post">
          <div className="form-header">
            <h5>Все водители</h5>
            <FontAwesomeIcon
              onClick={() => {
                setCreateForm(!createForm);
              }}
              icon={faXmark}
            />
          </div>
          <div className="frow">
            <label htmlFor="">ID водителя</label>
            <input
              onChange={(e) => {
                setId(e.target.value);
              }}
              type="text"
              value={id}
            />
          </div>
          <div className="frow">
            <label htmlFor="">ФИО водителя</label>
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              value={name}
            />
          </div>
          <div className="frow">
            <label htmlFor="">Сумма вне города</label>
            <input onChange={(e) => {}} type="text" />
          </div>
          <div className="frow">
            <label htmlFor="">Все заказы</label>
            <input
              onChange={(e) => {
                setNofOrder(e.target.value);
              }}
              type="text"
              value={nofOrder}
            />
          </div>
          <div className="frow">
            <label htmlFor="">Тип пользователя</label>
            <input
              onChange={(e) => {
                setUser(e.target.value);
              }}
              type="text"
              value={user}
            />
          </div>
          <div className="frow">
            <label htmlFor="">Номер телефона</label>
            <input
              onChange={(e) => {
                setPnumber(e.target.value);
              }}
              type="text"
              value={pnumber}
            />
          </div>
        </form>
        <div className="btns">
          <button onClick={() => {}} className="cancel">
            Отменить
          </button>
          <button onClick={update} className="save">
            Сохранить
          </button>
        </div>
      </div>
    </div>
  );
}
