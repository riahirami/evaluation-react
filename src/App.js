import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,Route, Routes, Switch } from "react-router-dom";

import Navbar from "./Component/navbar";
import UsersList from "./Component/UsersList";
import AddUser from "./Component/AddUser";
import HomeComponent from "./Component/home";
import EditUsers from "./Component/editUsers";

function App() {
  return (
    <div className="Container-fluid">
      <Navbar />
       
      
        <Routes>
          <Route path="/" element={<HomeComponent/>} />
          <Route path="/home" element={<HomeComponent/>} />
          <Route path="/userslist" element={<UsersList/>} />
          <Route path="/adduser" element={<AddUser/>} />
          <Route path="/edituser/:id" element={<EditUsers/>} />
        </Routes>
      

    </div>
  );
}

export default App;
