import React from "react";
import { Link } from "react-router-dom";

const Nav = props => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">PERSONNAGES</Link>
        </li>
        <li>
          <Link to="/comics">COMICS</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
