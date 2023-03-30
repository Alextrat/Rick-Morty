import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const RMcontext = createContext()

const Url = "https://rickandmortyapi.com/api/";

export const RMContextProvider = ({children}) => {
    const [characters, setCharacters] = useState([])
    const [locations, setLocations] = useState([])

    useEffect(()=>{
        const getCharacters = async () => {
            const charactersApi = await axios.get(`${Url}character`)
            setCharacters(charactersApi.data.results)
        }
        getCharacters()
    },[])
    useEffect(()=>{
        const getLocations = async () => {
            const locationsApi = await axios.get(`${Url}location`)
            setLocations(locationsApi.data.results)
        }
        getLocations()
    },[])

    return(
        <RMcontext.Provider value ={{characters, locations}}>
            {children}
        </RMcontext.Provider>
    )
}