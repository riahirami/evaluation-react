import axios from "axios";
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Modal } from "antd";
const baseURL = "https://127.0.0.1:8000/api/users/";

function EditUsers(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Age: 0,
  });

  useEffect(() => {
    axios.get("https://127.0.0.1:8000/api/users/"+id).then((res) => {
      setData(res.data);
      console.log("ok user : "+id)
      
    });
  }, []);

  function submit(e) {
    e.preventDefault();
    
    axios.put(`https://127.0.0.1:8000/api/users/${id}`, data)
    .then((res) => {
        Modal.success({
          title: "User " +data.FirstName+ " updated ",
          okText: "Ok",
          okType: "success",
          onOk: () => {
            
            navigate("/userslist");
          },
        });
      });
    console.warn("updating ....");
    
  }

  function handle(e) {
    
    const newData = { ...data };
     
     newData[e.target.id] = e.target.value;
     newData["Age"] = parseInt(e.target.value);
    setData(newData);
  }

  return (
    <>
      <div className="col-md-4"></div>
      <h1> Update user</h1>
      <div className="col-md-8 offset-md-2" style={{ paddingTop: "100px" }}>
        <form onSubmit={(e) => submit(e)}>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form6Example3">
              firstName
            </label>
            <input
              type="text"
              id="FirstName"
              className="form-control"
              onChange={(e) => handle(e)}
              value={data.FirstName}
            />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form6Example4">
              lastName
            </label>
            <input
              className="form-control"
              type="text"
              id="LastName"
              onChange={(e) => handle(e)}
              value={data.LastName}
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
              value={data.Email}
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
              value={data.Age}
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block mb-4">
            Edit user
          </button>
        </form>
      </div>
    </>
  );
}

export default EditUsers;
