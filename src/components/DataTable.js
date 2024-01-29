import React from "react";
import { Table } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import tablepng from "../image/tablepng.png";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencil, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Pagination } from "react-bootstrap";
import "./dataTable.css";
import { Link } from "react-router-dom";
import axios from "axios";

function DataTable({ tableData }) {
  function handleDelete(id) {
    axios
      .delete("http://localhost:8000/deleteData/" + id)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
    tableData = [];
  }
  return (
    <div className="tableSection">
      <div className="tableCon">
        <Table
          style={{ borderRadius: "5px!important" }}
          className="tablecontainer"
          striped
          bordered
          hover
        >
          <thead>
            <tr>
              <th>№</th>
              <th>ID водителя</th>
              <th>ФИО водителя</th>
              <th>Номер телефона</th>
              <th>Все заказы</th>
              <th>Тип пользователя</th>
              <th>Дата создание</th>
              <th>
                <img className="tablepng" src={tablepng} alt="" />
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData &&
              tableData.map((data) => (
                <tr key={data._id}>
                  <td>{tableData.indexOf(data) + 1}</td>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.pnumber}</td>
                  <td>{data.nofOrder}</td>
                  <td>{data.user}</td>
                  <td>{moment(data.createdAt).format("D.MM.YYYY, HH:mm")}</td>
                  <td>
                    <DropdownButton
                      className="dropbtn"
                      key={"start"}
                      id={`dropdown-button-drop-start`}
                      drop={"start"}
                      variant="none"
                      title={
                        <span className="delete">
                          <FontAwesomeIcon icon={faTrash} />
                        </span>
                      }
                    >
                      <Dropdown.Item className="linktbn" eventKey="1">
                        <Link
                          style={{ textDecoration: "none", color: "black", fontSize: "14px" }}
                          to={`/update/${data._id}`}
                        >
                          <span className="deletebuts editbtn">
                            <FontAwesomeIcon icon={faPencil} />
                          </span>{" "}
                          Редактировать
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="2" onClick={(e) => handleDelete(data._id)}>
                        <Link style={{ textDecoration: "none", color: "black", fontSize: "14px" }}>
                          <span className="deletebuts deletebtn">
                            <FontAwesomeIcon icon={faXmark} />
                          </span>{" "}
                          Удалить
                        </Link>
                      </Dropdown.Item>
                    </DropdownButton>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
      <div className="paginationRow">
        <Pagination>
          <Pagination.Prev />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Item>{4}</Pagination.Item>
          <Pagination.Item>{5}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>{86}</Pagination.Item>
          <Pagination.Next />
        </Pagination>
      </div>
    </div>
  );
}

export default DataTable;
