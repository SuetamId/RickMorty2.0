import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

export default function Header({black}) {

  return (
    <div className="container" {...black ? "black" : ""}>
      <nav>
        <ul>
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/character">Personagens</Link>
          </li>
          <li>
            {" "}
            <Link to="/favorites">Favoritos</Link>
          </li>
          <li>
            {" "}
            <Link to="/episodes">Episodios</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
