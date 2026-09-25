import React, { useState } from "react";
import "../css/runTimes.css";
import { Modal } from "@mui/material";

const RunTimes = () => {
  const [addMovieMedal, setAddMovieMedal] = useState(false);
  const [editRunTimes, setEditRunTimes] = useState({
    open: false,
    title: "",
    id: "",
    date: "",
    time: "",
    location: "",
    room: "",
    duration: "",
  });

  const [locations, setLocations] = useState([
    { name: "Leerdam", roomCount: 2 },
    { name: "Maarssen", roomCount: 2 },
    { name: "Breukelen", roomCount: 2 },
    { name: "Bilthoven", roomCount: 2 },
    { name: "Montfoort", roomCount: 2 },
    { name: "Woerden", roomCount: 2 },
    { name: "Leidscherijn", roomCount: 2 },
    { name: "Zeist", roomCount: 2 },
  ]);

  const [runTimeMovies, setRunTimeMovies] = useState([
    {
      title: "Hail mary",
      id: 101,
      date: "2026-09-21",
      time: "22:00",
      location: "Leerdam",
      room: 2,
      duration: "01:03",
    },
    {
      title: "fightclub",
      id: 102,
      date: "2026-10-21",
      time: "20:00",
      location: "Maarssen",
      room: 1,
      duration: "01:50",
    },
  ]);

  // Bepaal de momenteel geselecteerde vestiging en de beschikbare zalen
  const currentLocationObj =
    locations.find((loc) => loc.name === editRunTimes.location) || locations[0];

  const availableRooms = Array.from(
    { length: currentLocationObj ? currentLocationObj.roomCount : 0 },
    (_, i) => i + 1,
  );

  const handleSave = () => {
    setRunTimeMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === editRunTimes.id
          ? {
              ...movie,
              date: editRunTimes.date,
              time: editRunTimes.time,
              location: editRunTimes.location,
              room: Number(editRunTimes.room),
            }
          : movie,
      ),
    );
    setEditRunTimes((prev) => ({ ...prev, open: false }));
    console.log(
      "date:",
      editRunTimes.date,
      "location:",
      editRunTimes.location,
      "room:",
      editRunTimes.room,
      "time:",
      editRunTimes.time,
      "title:",
      editRunTimes.title,
    );
  };

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
            <div className="RTlocation">Vestiging</div>
            <div className="RTroom">Zaal</div>
            <div className="RTduration">Duur</div>
            <div className="RTmodify">Bewerken</div>
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
                <button
                  onClick={() => {
                    setEditRunTimes({
                      open: true,
                      id: movie.id,
                      title: movie.title,
                      date: movie.date,
                      time: movie.time,
                      location: movie.location,
                      room: movie.room,
                      duration: movie.duration,
                    });
                  }}
                >
                  Selecteer
                </button>
              </div>
              <div className="RTrowBorder"></div>
            </React.Fragment>
          ))}
        </div>

        {editRunTimes.open && (
          <div className="RTmodalOverlay">
            <div className="RTmodalCard">
              <h3>Film bewerken</h3>

              <div className="RTmodalForm">
                <label>
                  Datum
                  <input
                    type="date"
                    value={editRunTimes.date}
                    onChange={(e) =>
                      setEditRunTimes((prev) => ({
                        ...prev,
                        date: e.target.value,
                      }))
                    }
                  />
                </label>

                <label>
                  Tijd
                  <input
                    type="time"
                    value={editRunTimes.time}
                    onChange={(e) =>
                      setEditRunTimes((prev) => ({
                        ...prev,
                        time: e.target.value,
                      }))
                    }
                  />
                </label>

                <label htmlFor="movieLocation">
                  Vestiging
                  <select
                    id="movieLocation"
                    value={editRunTimes.location}
                    onChange={(e) => {
                      const newLocation = e.target.value;
                      const newLocObj = locations.find(
                        (loc) => loc.name === newLocation,
                      );
                      setEditRunTimes((prev) => ({
                        ...prev,
                        location: newLocation,
                        // Zet zaal op 1 als de gekozen zaal hoger is dan roomCount van de nieuwe vestiging
                        room:
                          prev.room > (newLocObj?.roomCount || 1)
                            ? 1
                            : prev.room,
                      }));
                    }}
                  >
                    {locations.map((loc) => (
                      <option key={loc.name} value={loc.name}>
                        {loc.name}
                      </option>
                    ))}
                  </select>
                </label>

                <label htmlFor="movieRoom">
                  Zaal
                  <select
                    id="movieRoom"
                    value={editRunTimes.room}
                    onChange={(e) =>
                      setEditRunTimes((prev) => ({
                        ...prev,
                        room: Number(e.target.value),
                      }))
                    }
                  >
                    {availableRooms.map((roomNum) => (
                      <option key={roomNum} value={roomNum}>
                        Zaal {roomNum}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="RTmodalActions">
                <button
                  type="button"
                  className="RTsecondaryButton"
                  onClick={() =>
                    setEditRunTimes((prev) => ({
                      ...prev,
                      open: false,
                    }))
                  }
                >
                  Sluiten
                </button>

                <button
                  type="button"
                  className="RTprimaryButton"
                  onClick={handleSave}
                >
                  Opslaan
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default RunTimes;
