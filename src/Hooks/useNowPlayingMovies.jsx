import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
  const [apiData, setApiData] = useState([]);

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
        const json = await data.json();
        setApiData(json.results);
    };

    useEffect(() => {
        getNowPlayingMovies();
    }, []);

    return {
      apiData
    }
};

export default useNowPlayingMovies;
