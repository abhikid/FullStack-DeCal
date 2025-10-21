import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>React Website</h2>
      <div className="links">
        <Link to="/home">Home</Link>
        <Link to="/nothome">NotHome</Link>
      </div>
    </nav>
  );
};

export default Navbar;