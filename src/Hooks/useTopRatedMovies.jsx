import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTopRatedMovies = () => {
  const [topRatedMovie, setTopRatedMovies] = useState([]);

  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
        const json = await data.json();
        console.log("popular",json.results)
        setTopRatedMovies(json.results);
    };

    useEffect(() => {
        getNowPlayingMovies();
    }, []);

    return {
      topRatedMovie
    }
};

export default useTopRatedMovies;
