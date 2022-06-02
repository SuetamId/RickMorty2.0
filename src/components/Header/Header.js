import React from "react";

import { Link } from "react-router-dom";

import menuH from "../../assets/img/cardapio.png"
import "./Header.css";

export default function Header({}) {

  return (
    <>
    
      <nav className="nav">
      <Link to="/"><a className="brand">Rick&Morty</a></Link>
        <ul className="nav-menu">
          <li className="nav-item">
            {" "}
            <Link to="/">Home</Link>
          </li >
          <li className="nav-item">
            {" "}
            <Link to="/character">Personagens</Link>
          </li>
          <li className="nav-item">
            {" "}
            <Link to="/favorites">Favoritos</Link>
          </li>
        </ul> 
        <div className="nav-toggler">
          <img className="icon" src={menuH} />
       </div>
      </nav>
     
      </>
   
  );
}
