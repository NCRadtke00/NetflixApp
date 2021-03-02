import React from "react";
import "./Row.css";
import axios from "./axios";



function Row({title}) {


    return (
       <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map((movie) => (
                    <img
                        key={movie.id}
                        // onClick={handleClick(movie)}
                        className="row__poster"
                        src={}
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