import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  function Navbar() {
 
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" >
        <Link className="nav-link" to="home">
                  Home 
                </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="userslist">
                  Users list 
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="adduser">
                  Add user 
                </Link>
              </li>
            
              
            </ul>
          </div>
        </nav>
      </div>
    );
  }


export default Navbar;
