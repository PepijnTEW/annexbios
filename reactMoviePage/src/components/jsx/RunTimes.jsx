import React, { useEffect, useState } from "react";
import "../css/runTimes.css";

const API_URL = "https://annex.pepijntw.com/api/v1/showtimes";
const API_KEY = process.env.REACT_APP_ANNEX_API_KEY;
const OPTIONS_GET = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const RunTimes = () => {
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

  const [runTimeMovies, setRunTimeMovies] = useState([]);

  useEffect(() => {
    async function loadShowtimes() {
      const showtimes = [];
      let url = API_URL;

      while (url) {
        const response = await fetch(url, OPTIONS_GET);
        if (!response.ok)
          throw new Error(`ophalen mislukt:" ${response.status}`);

        const page = await response.json();
        showtimes.push(...page.data);
        url = page.links?.next;
      }

      setRunTimeMovies(
        showtimes.map((showtime) => {
          const startTime = showtime.startTime ?? "";
          const endTime = showtime.endTime ?? "";
          const durationMinutes = Math.round(
            (Date.parse(endTime) - Date.parse(startTime)) / 60000,
          );

          return {
            id: showtime.showtimeId,
            title: showtime.movie?.title ?? `Film ${showtime.movieId}`,
            date: startTime.slice(0, 10),
            time: startTime.slice(11, 16),
            location: showtime.cinemaId ?? "",
            room: showtime.showroomId ?? "",
            duration: Number.isFinite(durationMinutes)
              ? `${String(Math.floor(durationMinutes / 60)).padStart(2, "0")}:${String(durationMinutes % 60).padStart(2, "0")}`
              : "",
          };
        }),
      );
    }

    loadShowtimes().catch(console.error);
  }, []);

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
