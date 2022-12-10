import React, { FC } from "react";

const NavBar: FC = () => {
  return (
    <nav>
      <div className="nav-wrapper px1">
        <a href="/" className="brand-logo">
          React TS
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <a href="/">To do</a>
          </li>
          <li>
            <a href="/">Info</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
