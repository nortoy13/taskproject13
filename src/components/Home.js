import React, { useState, useEffect } from "react";
import "./home.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faBusinessTime } from "@fortawesome/free-solid-svg-icons";
import DataTable from "./DataTable";
import Form from "./Form";

export default function Home() {
  const [createForm, setCreateForm] = useState(false);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [pnumber, setPnumber] = useState("");
  const [nofOrder, setNofOrder] = useState("");
  const [user, setUser] = useState("");
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/orders")
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => console.log(error));
  }, [orders]);

  async function create(e) {
    e.preventDefault();
    if (id && name && nofOrder && user && pnumber) {
      axios
        .post("http://localhost:8000/home", { id, name, nofOrder, user, pnumber })
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
      setCreateForm(false);
    }
  }

  return (
    <div className="home">
      <div className="left">
        <div className="navtop">
          <h4 className="logo">TASK PROJECT</h4>{" "}
          <button className="arrow">
            <FontAwesomeIcon icon={faAnglesLeft} />
          </button>
        </div>
        <div className="leftBottom">
          <p className="menuLink">
            <span>
              <FontAwesomeIcon icon={faBusinessTime} />
            </span>{" "}
            Все заказы
          </p>
        </div>
      </div>
      <div className="right">
        <div className="navrighttop">
          <div className="navbar">
            <h5 className="heading">Все водители</h5>
            <button onClick={() => setCreateForm(!createForm)} className="createBtn">
              {" "}
              <span className="plusIcon"> + </span> <span className="btnText">Добавить</span>
            </button>
          </div>
        </div>
        <div className="rightbottom">
          <DataTable tableData={orders} />
        </div>
      </div>

      {createForm && (
        <Form
          setCreateForm={setCreateForm}
          createForm={createForm}
          setId={setId}
          setName={setName}
          setUser={setUser}
          setPnumber={setPnumber}
          setNofOrder={setNofOrder}
          create={create}
        />
      )}
    </div>
  );
}
