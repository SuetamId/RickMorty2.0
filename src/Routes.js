import React from "react";
import { Routes, Route } from "react-router";

import Home from "./pages/home/Home"
import Character from "./pages/character/Character"
import FavoriteCharacter from "./pages/favorites/Favorites";
 export default function mainRoutes(){

    return(
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/character" element={<Character/>} />
          <Route path="/favorites" element={<FavoriteCharacter/>} />
        </Routes>
    );
};