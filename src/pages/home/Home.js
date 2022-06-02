import React from "react";
import { Link } from "react-router-dom";

import Fundo from "../../assets/img/RickMortyFundo.jpg"
import "./Home.css"
export default function Home () {
    return(
      <>
      <div className="img-wrapper">
        <img src={Fundo}/>
      </div>
        <div className="banner">
        <h1>Rick And Morty</h1>
        <p>Descubra seus personagens favoritos</p>
        <p>E desfrute dos melhores epsodios</p>
        <button> <Link to="/episodes">Ver Episodios </Link></button>
      </div>
      </>
    )
}
