import React from "react";
import { Link } from "react-router-dom"; // Correct import

function Navbar() {
  const linkstyle = {
    color: "white",
    textDecoration: "none",
  };
  return (
    <nav
      style={{
        width: "100vw",
        background: "black",
        height: "60px",
        display: "flex",
        alignItems: "center",
        fontSize: "20px",
        justifyContent: "space-evenly",
      }}
    >
      <Link to="/" style={linkstyle}>
        Home
      </Link>
      <Link to="/about" style={linkstyle}>
        About
      </Link>
      <Link to="/contact" style={linkstyle}>
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
