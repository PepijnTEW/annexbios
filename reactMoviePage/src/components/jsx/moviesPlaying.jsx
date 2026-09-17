import { useState } from "react";
import "../css/moviesplaying.css";
import { Checkbox } from "@mui/material";
const MoviesPlaying = () => {
  return (
    <>
      <h2 id="movies-playing">Movies playing</h2>
      <div className="app">
        <div className="PMcontainer">
          <div className="PMcard">
            <div className="PMtitle">Movie Title</div>
            <div className="PMid">Movie ID</div>
            <p>enabled</p>
          </div>
          <div className="PMrowBorder"></div>
          <div className="PMcard">
            <div className="PMtitle">Fight Club</div>
            <div className="PMid">101</div>
            <Checkbox></Checkbox>
          </div>
          <div className="PMrowBorder"></div>
          <div className="PMcard">
            <div className="PMtitle">Hail Mary</div>
            <div className="PMid">100</div>
            <Checkbox></Checkbox>
          </div>
          <div className="PMrowBorder"></div>
        </div>
      </div>
    </>
  );
};
export default MoviesPlaying;
