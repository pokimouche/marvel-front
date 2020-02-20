import React from "react";
import { Link } from "react-router-dom";

const Nav = props => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Characters</Link>
        </li>
        <li>
          <Link to="/comics">Comics</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
