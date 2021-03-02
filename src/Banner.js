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
    function truncate(str, n){
        return str?.length > n ? str.substr(0, n -1) + "..." : str;
    }

    return (
        <header >
        </header>
     
    );
}

export default Banner
