import { useContext } from "react";
import { createContext, useState } from "react";

const CharacterContext = createContext();
const INITIAL_FAV_STATE = ["personagens favoritos"]


const CharacterProvider = ({ children }) => {

    const [favCharacter, setFavCharacter] = useState(INITIAL_FAV_STATE)

    const contextValue = {
        favCharacter,
    }

    return (<CharacterContext.Provider value={{ contextValue }}>{children}
    </CharacterContext.Provider>)
}
export const useFav = () => useContext(CharacterContext)

export default CharacterProvider;
