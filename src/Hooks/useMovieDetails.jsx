import { useEffect, useState } from "react"
import { API_OPTIONS } from "../utils/constants"


const useMovieDetails = (id) =>{
    const [movieDetails, setMovieDetails] =useState(null)
    console.log("ID",id)
    
    useEffect(()=>{
        fetchMovieDetails()
    },[])

    const fetchMovieDetails = async()=>{
        try {
            const data = await fetch('https://api.themoviedb.org/3/movie/'+id+'?language=en-US', API_OPTIONS)
            const json = await data.json()
            setMovieDetails(json)
            console.log("details",json)
        } catch (error) {
            console.log(error)
        }
    }

    return {movieDetails}
}

export default useMovieDetails;