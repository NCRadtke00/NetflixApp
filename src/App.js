import React from "react";
import './App.css';
import Row from "./Row";
<<<<<<< HEAD
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";


function App() {
  return (
    <div className="app">
      <Nav />
      <Banner/>
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      {/* footer */}
=======

function App() {
  return (
    <div className="App">
      <Row title="Netflix Originals"/>
      <Row title="Trending Now"/>
      <Row title="Top Rated"/>
      <Row title="Action Movies"/>


>>>>>>> main
    </div>
  );
}

export default App;
