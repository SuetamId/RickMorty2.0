import React from "react";

import { Link } from "react-router-dom";
import { useState } from "react";

import menuH from "../../assets/img/cardapio.png";
import "./Header.css";

export default function Header({}) {
  const [active, setActive] = useState("nav-menu");
  const navToggler = () => {
    active === "nav-menu"
      ? setActive("nav-menu nav-active")
      : setActive("nav-menu");
  };
  return (
    <>
      <nav className="nav">
        <Link to="/">
          <a className="brand">Rick&Morty</a>
        </Link>
        <ul className={active}>
          <li className="nav-item">
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            {" "}
            <Link to="/character">Personagens</Link>
          </li>
          <li className="nav-item">
            {" "}
            <Link to="/favorites">Favoritos</Link>
          </li>
        </ul>
        <div onClick={navToggler} className="navToggler">
          <img className="icon" src={menuH} />
        </div>
      </nav>
    </>
  );
}
