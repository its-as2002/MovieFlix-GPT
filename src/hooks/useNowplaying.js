import { API_OPTIONS,NOWPLAYING_API } from "../Utils/constants"
import { useEffect } from "react"
export const useNowPlaying = ()=>{


    const fetchNowPlaying =async ()=>{
        const data = await fetch(NOWPLAYING_API,API_OPTIONS);
        const json = await data.json();
        console.log(json);//correct it

    }
    useEffect(()=>{
        fetchNowPlaying();
    },[])
    
}

