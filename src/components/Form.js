import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Form({
  setCreateForm,
  createForm,
  setId,
  setUser,
  setName,
  setNofOrder,
  setPnumber,
  create,
}) {
  return (
    <div>
      <div className="createForm">
        <form action="post">
          <div className="form-header">
            <h5>Все водители</h5>
            <FontAwesomeIcon
              style={{ cursor: "pointer" }}
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
            />
          </div>
          <div className="frow">
            <label htmlFor="">ФИО водителя</label>
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
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
            />
          </div>
          <div className="frow">
            <label htmlFor="">Тип пользователя</label>
            <input
              onChange={(e) => {
                setUser(e.target.value);
              }}
              type="text"
            />
          </div>
          <div className="frow">
            <label htmlFor="">Номер телефона</label>
            <input
              onChange={(e) => {
                setPnumber(e.target.value);
              }}
              type="number"
            />
          </div>
        </form>
        <div className="btns">
          <button onClick={() => {}} className="cancel">
            Отменить
          </button>
          <button onClick={(e) => create(e)} className="save">
            Сохранить
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
