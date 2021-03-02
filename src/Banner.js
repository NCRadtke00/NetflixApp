import React, { useState, useEffects, useEffect} from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./requests";

function Banner() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
    }, []);


    return (
        <header >
        </header>
     
    );
}

export default Banner
