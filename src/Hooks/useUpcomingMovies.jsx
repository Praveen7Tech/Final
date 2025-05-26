import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useUpComingMovies = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
        const json = await data.json();
        console.log("popular",json.results)
        setUpcomingMovies(json.results);
    };

    useEffect(() => {
        getNowPlayingMovies();
    }, []);

    return {
      upcomingMovies
    }
};

export default useUpComingMovies;
