import React from "react";
import { useEffect } from "react";

import { useState } from "react";
import api from "../../services/api";



const Episodes = () => {
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        api
            .get("episode")
            .then((response) => {
                setEpisodes(response.data.results);
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
                    ></input>
                </div>

                <div className="card-container">
                    {episodes.map((episodes, key) => {
                        return (
                            <section className="card" key={key}>
                                <div className="card-img-wrapper">
                                    <img src={episodes.image} />
                                </div>
                                <div className="info">
                                    <h1 className="title-movie">{episodes.name}</h1> <br />
                                    <p className="status">{episodes.air_date}</p>
                                    <p className="species">{episodes.episode}</p>
                                    <p className="location">{episodes.characters}</p>
                                   
                                </div>
                                
                                    
                            </section>
                        );
                    })}
                </div>
            </div>
       
    );
};
export default Episodes;
