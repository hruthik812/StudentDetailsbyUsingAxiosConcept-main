import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div > <img  src="https://img.freepik.com/premium-vector/university-logo-template-vector-illustration_20448-522.jpg?semt=ais_hybrid" width="50" height="50" /></div>
      <Link to="/">Insert</Link>
      <span>|</span>
      <Link to="/getall">Get All</Link>
      <span>|</span>
      <Link to="/get-one">Get One</Link>
      <span>|</span>
      <Link to="/update">Update</Link>
      <span>|</span>
      <Link to="/delete">Delete</Link>
    </nav>
  );
};

export default Navbar;
