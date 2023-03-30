import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const RMcontext = createContext()

const Url = "https://rickandmortyapi.com/api/";

export const RMContextProvider = ({children}) => {
    const [characters, setCharacters] = useState([])
    const [locations, setLocations] = useState([])
    const [episodes, setEpisodes] = useState([])

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
    useEffect(()=>{
        const getEpisodes = async () => {
            const chaptersApi = await axios.get(`${Url}episode`)
            setEpisodes(chaptersApi.data.results)
        }
        getEpisodes()
    },[])

    return(
        <RMcontext.Provider value ={{characters, locations, episodes}}>
            {children}
        </RMcontext.Provider>
    )
}