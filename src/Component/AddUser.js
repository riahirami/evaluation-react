import React, { Component, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";


function AddUser() {
  const url = "https://127.0.0.1:8000/api/users";
  const [dataUser, setDataUser] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Age: "",
  });
  const navigate = useNavigate();

  function submit(e) {
    e.preventDefault();
    axios
      .post(url, {
        FirstName: dataUser.FirstName,
        LastName: dataUser.LastName,
        Age: parseInt(dataUser.Age),
        Email: dataUser.Email,
      })
      .then((res) => {
        console.log(" User added ");
      })
      .then((res) => {
        Modal.success({
          title: "User added ",
          okText: "Ok",
          okType: "success",
          onOk: () => {
            
            navigate("/userslist");
          },
        });
      })
      
  }
  function handle(e) {
    const newData = { ...dataUser };
    newData[e.target.id] = e.target.value;
    setDataUser(newData);
    console.warn(dataUser);
  }

  return (
    <>
    <div className="col-md-4">

    </div>
      <h1> Add user</h1>
    <div className="col-md-12 container" style={{ paddingTop: "50px" }}>
      <form onSubmit={(e) => submit(e)}>
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form6Example3">
            First Name
          </label>
          <input
            type="text"
            id="FirstName"
            className="form-control"
            onChange={(e) => handle(e)}
            value={dataUser.FirstName}
          />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form6Example4">
            Last Name
          </label>
          <input
            className="form-control"
            type="text"
            id="LastName"
            onChange={(e) => handle(e)}
            value={dataUser.LastName}
          />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form6Example3">
            Email
          </label>
          <input
            type="text"
            id="Email"
            className="form-control"
            onChange={(e) => handle(e)}
            value={dataUser.Email}
          />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form6Example3">
            Age
          </label>
          <input
            type="number"
            id="Age"
            className="form-control"
            onChange={(e) => handle(e)}
            value={dataUser.Age}
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4">
          Add user
        </button>
      </form>
    </div>

        </>

  );
}

export default AddUser;
