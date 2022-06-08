import React from "react";
import { Link } from "react-router-dom";

import Fundo from "../../assets/img/RickMortyFundo.jpg"
import "./Home.css"


export default function Home() {
  return (
    <div>
      <div className="img-wrapper">
        <img src={Fundo} />
      </div>
      <div className="img-wrapper-mobile">
      </div>
      <div className="banner">
        <h1>Rick And Morty</h1>
        <p>Descubra seus personagens favoritos</p>
        <button> <Link to="/character">Ver Personagens </Link></button>
      </div>
    </div>
  )
}
