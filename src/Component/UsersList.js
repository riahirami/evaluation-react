import axios, { formToJSON } from "axios";
import {React, useEffect,useState} from "react";
import {Modal,Input } from "antd";
import { useNavigate } from "react-router-dom";

const baseURL = "https://127.0.0.1:8000/api/users";

function UsersList() {
  const [user, setUser] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers(){
    axios.get(baseURL).then((response) => {
      setUser(response.data["hydra:member"]);
    });
  }

  
  const updateUser= async (id) => {
    console.warn("id= "+id)
    navigate('/edituser/'+id)
    
}

  function deleteUSer(id) {
    Modal.confirm({
      title:"Do you want to delete this user ?",
      okText:"Yes",
      okType:"danger",
      cancelText:"No",
      onOk:()=>{
    axios.delete(`https://127.0.0.1:8000/api/users/${id}`)
     .then(()=>{

       getUsers();
       navigate("/userslist");
       console.log("delete user :  " +id)
    })
  }
})

}

  if (!user) return null;
  return (
    <div className="Container-fluid">
      <h1>Users list</h1>
    <div className="col-md-4">

    </div>
    <div className="col-md-12 container" style={{ paddingTop: "50px" }}>        
     <table className="table table-striped">
          <thead className="bg-dark text-light text-center ">
            <tr>
              <th scope="col">id</th>
              <th scope="col">First name</th>
              <th scope="col">Last name</th>
              <th scope="col">Email</th>
              <th scope="col">age</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((usr) => (
              <tr className="text-center">
                <th           key={usr.id} scope="row">{usr.id}</th>
                <td>{usr.FirstName}</td>
                <td>{usr.LastName}</td>
                <td>{usr.email}</td>
                <td>{usr.age}</td>
                <td><button className="btn btn-danger" onClick={()=>deleteUSer(usr.id)}>delete</button>
                <button className="btn btn-primary text-light" onClick={()=>updateUser(usr.id)}>update</button>
</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersList ;