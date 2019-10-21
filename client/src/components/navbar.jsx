import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
  constructor() {
    super()
    this.openFunction = () => {
      document.getElementById("menu").classList.add("menu__show")
      document.getElementById("mainbox").classList.add("mainbox__show")
    }

    this.closeFunction = () => {
      document.getElementById("menu").classList.remove("menu__show");
      document.getElementById("mainbox").classList.remove("mainbox__show")
    }
  }
  render() {
    return (
      <nav>
        <div id="mainbox" onClick={this.openFunction}>&#9776;</div>
        <div id="menu" className="sidemenu">
          <a className="closebtn" onClick={this.closeFunction}>&times;</a>
          <div className="logo">
          <a href="https://lifesports.org"><img width="250" height="36" src="https://lifesports.org/wp-content/uploads/cropped-lifesports-logo-final-white.png"></img></a>
          </div>
          <NavLink className="nav-link" exact={true} activeClassName="active" to="/" onClick={this.closeFunction}>Student Logs<span className="sr-only">(current)</span></NavLink>
          <NavLink className="nav-link" activeClassName="active" to="/create" onClick={this.closeFunction}>Excercise Form</NavLink>
          <NavLink className="nav-link" activeClassName="active" to="/user" onClick={this.closeFunction}>New Student</NavLink>
        </div>
      </nav>

      //

      // <nav>
      //   <Link to="/" className="">LifeSports</Link>
      //   <div className="link_container">
      //     <Link to="/" className="nav-link">Exercises</Link>
      //     <Link to="/create" className="nav-link">Post New Workout</Link>
      //     <Link to="/user" className="nav-link">Create User</Link>
      //   </div>
      // </nav>
    )
  }
}
export default Navbar