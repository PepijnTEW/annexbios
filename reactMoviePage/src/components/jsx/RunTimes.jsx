import React, { useState } from "react";
import "../css/runTimes.css";
import { Modal } from "@mui/material";

const RunTimes = () => {
  const [addMovieMedal, setAddMovieMedal] = useState(false);
  const [runTimeMovies, setRunTimeMovies] = useState([
    {
      title: "Hail mary",
      id: 101,
      date: "21-09-2026",
      time: "22:00",
      location: "Amersfoort",
      room: 2,
      duration: "01:03",
    },
    {
      title: "fightclub",
      id: 102,
      date: "21-10-2026",
      time: "20:00",
      location: "Utrecht",
      room: 1,
      duration: "01:50",
    },
  ]);
  return (
    <>
      <div className="app">
        <h2>Afspeel tijden en locatie</h2>

        <div className="RTcontainer">
          <div className="RTcard">
            <div className="RTtitle">Titel</div>
            <div className="RTid">Id</div>
            <div className="RTdate">Datum</div>
            <div className="RTtime">Tijd</div>
            <div className="RTlocation">Vesteging</div>
            <div className="RTroom">Zaal</div>
            <div className="RTduration">Duur</div>
          </div>
          <div className="RTrowBorder"></div>
          {runTimeMovies.map((movie) => (
            <React.Fragment key={movie.id}>
              <div className="RTcard">
                <div className="RTtitle">{movie.title}</div>
                <div className="RTid">{movie.id}</div>
                <div className="RTdate">{movie.date}</div>
                <div className="RTtime">{movie.time}</div>
                <div className="RTlocation">{movie.location}</div>
                <div className="RTroom">{movie.room}</div>
                <div className="RTduration">{movie.duration}</div>
              </div>
              <div className="RTrowBorder"></div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default RunTimes;
