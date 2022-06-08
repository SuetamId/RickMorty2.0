import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import api from "../../services/api";

import "./Character.css";

const Character = () => {
  const [character, setCharacter] = useState([]);
  const [info, setInfo] = useState({});
  const [search, setSearch] = useState([]);

  useEffect(() => {
    api
      .get("character")
      .then((response) => {
        setCharacter(response.data.results);
        setInfo(response.data.info);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container-character">
      <div className="character-search">
        <input
          className="character-search-input"
          type="text"
          placeholder="Pesquise aqui..."
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </div>
      <div className="card-container">
        {character
          .filter((value) => {
            if (search == "") {
              return value;
            } else if (
              value.name.toLowerCase().includes(search.toLowerCase())
            ) {
              return value;
            }
          })
          .map((character, key) => {
            return (
              <>
                <section className="card" key={key}>
                  <div className="card-img-wrapper">
                    <img src={character.image} />
                  </div>
                  <div className="btn-fovorite">
                    <button class="bi bi-suit-heart">o</button></div>
                  <div className="info">
                    <h1 className="title">{character.name}</h1> <br />
                    <p className="status">{character.status}</p>
                    <p className="species">{character.species}</p>
                    <p className="location">{character.location.name}</p>
                  </div>
                </section>
              </>
            );
          })}
      </div>
    </div>
  );
};
export default Character;
