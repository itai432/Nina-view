import React from "react";
import { Link } from "react-router-dom";
import  "../style/Navbar.scss";

const Navbar: React.FC = () => {

  return (
    <nav className="nav">
      <ul className="ul">
        <li className="li">
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li className="li">
          <Link to="/About-Us" className="link">
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
