import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "./axios";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
          const request = await axios.get(fetchUrl);
          setMovies(request.data.results); 
          return request; 
        }
        fetchData();
      }, [fetchUrl]);

    return (
       <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map((movie) => (
                    <img
                        key={movie.id}
                        // onClick={handleClick(movie)}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${base_url}${ isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        // this src code allows me to have the netflix originals show the poster, while the rest show a backdrop img
                        alt={movie.name}
                    />
                ))}
            </div>
        </div>
    );
}

export default Row;
//can only have 1 default in a component, but can have multiple exports