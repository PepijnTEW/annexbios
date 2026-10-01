import React, { useEffect, useState } from "react";
import "../css/runTimes.css";

const apiRequest = async (endpoint = "", method = "GET", data = null) => {
  const API_URL = "https://annex.pepijntw.com/api/v1";
  const API_KEY = process.env.REACT_APP_ANNEX_API_KEY;
  const OPTIONS = {
    method: method,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  if (data) {
    OPTIONS.body = JSON.stringify(data);
  }

  const url = API_URL + endpoint;
  const response = await fetch(url, OPTIONS);

  if (!response.ok) {
    throw new Error(`ophalen mislukt:" ${response.status}`);
  }

  return response.json();
};

const formatShowtime = (showtime) => {
  const startTime = showtime.startTime ?? "";
  const endTime = showtime.endTime ?? "";
  const durationMinutes = Number.isFinite(Number(showtime.movie?.runtime))
    ? Number(showtime.movie.runtime)
    : Math.round((Date.parse(endTime) - Date.parse(startTime)) / 60000);

  const matchedLoc = LOCATIONS.find((loc) => loc.id === showtime.cinemaId);

  return {
    id: showtime.showtimeId,
    movieId: showtime.movieId,
    title: showtime.movie?.title ?? `Film ${showtime.movieId}`,
    date: startTime.slice(0, 10),
    time: startTime.slice(11, 16),
    location: matchedLoc ? matchedLoc.name : "",
    cinemaId: showtime.cinemaId ?? "",
    room: showtime.showroomId ?? "",
    duration: Number.isFinite(durationMinutes)
      ? `${String(Math.floor(durationMinutes / 60)).padStart(2, "0")}:${String(durationMinutes % 60).padStart(2, "0")}`
      : "",
  };
};

const LOCATIONS = [
  {
    id: 1,
    name: "Leerdam",
    rooms: [
      { id: 28, number: 1, label: "Leerdam 1" },
      { id: 29, number: 2, label: "Leerdam 2" },
    ],
  },
  {
    id: 2,
    name: "Maarssen",
    rooms: [
      { id: 30, number: 1, label: "Maarssen 1" },
      { id: 31, number: 2, label: "Maarssen 2" },
    ],
  },
  {
    id: 3,
    name: "Breukelen",
    rooms: [
      { id: 32, number: 1, label: "Breukelen 1" },
      { id: 33, number: 2, label: "Breukelen 2" },
    ],
  },
  {
    id: 4,
    name: "Bilthoven",
    rooms: [{ id: 34, number: 1, label: "Bilthoven 1" }],
  },
  {
    id: 5,
    name: "Montfoort",
    rooms: [
      { id: 35, number: 1, label: "Montfoort 1" },
      { id: 36, number: 2, label: "Montfoort 2" },
    ],
  },
  {
    id: 6,
    name: "Woerden",
    rooms: [
      { id: 37, number: 1, label: "Woerden 1" },
      { id: 38, number: 2, label: "Woerden 2" },
    ],
  },
  {
    id: 7,
    name: "Leidscherijn",
    rooms: [
      { id: 39, number: 1, label: "Leidscherijn 1" },
      { id: 40, number: 2, label: "Leidscherijn 2" },
    ],
  },
  {
    id: 8,
    name: "Zeist",
    rooms: [
      { id: 41, number: 1, label: "Zeist 1" },
      { id: 42, number: 2, label: "Zeist 2" },
    ],
  },
];

const getRoomLabel = (roomId) => {
  for (const loc of LOCATIONS) {
    const foundRoom = loc.rooms.find((r) => r.id === roomId);
    if (foundRoom) return foundRoom.label;
  }
};

const RunTimes = () => {
  const [editRunTimes, setEditRunTimes] = useState({
    open: false,
    title: "",
    id: "",
    date: "",
    time: "",
    location: "",
    cinemaId: "",
    room: "",
    duration: "",
  });

  const [runTimeMovies, setRunTimeMovies] = useState([]);

  useEffect(() => {
    async function loadShowtimes() {
      const showtimes = [];
      let nextUrl = "/showtimes";

      while (nextUrl) {
        const page = await apiRequest(nextUrl);
        showtimes.push(...page.data);
        nextUrl = page.links?.next;
      }
      setRunTimeMovies(showtimes.map(formatShowtime));
    }

    loadShowtimes().catch(console.error);
  }, []);

  const currentLocationObj =
    LOCATIONS.find((loc) => loc.name === editRunTimes.location) || LOCATIONS[0];

  const availableRooms = currentLocationObj ? currentLocationObj.rooms : [];

  const handleSave = async () => {
    const selectedLoc = LOCATIONS.find(
      (loc) => loc.name === editRunTimes.location,
    );

    const payload = {
      cinemaId: selectedLoc ? selectedLoc.id : Number(editRunTimes.cinemaId),
      movieId: Number(editRunTimes.movieId),
      showroomId: Number(editRunTimes.room),
      startTime: `${editRunTimes.date}T${editRunTimes.time}:00`,
    };

    try {
      await apiRequest(`/showtimes/${editRunTimes.id}`, "PATCH", payload);
      setEditRunTimes((prev) => ({ ...prev, open: false }));
      window.location.reload();
    } catch (error) {
      console.error("Opslaan mislukt:", error);
    }
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
                <div className="RTroom">{getRoomLabel(movie.room)}</div>
                <div className="RTduration">{movie.duration}</div>
                <button
                  onClick={() => {
                    setEditRunTimes({
                      open: true,
                      id: movie.id,
                      title: movie.title,
                      movieId: movie.movieId,
                      date: movie.date,
                      time: movie.time,
                      location: movie.location,
                      cinemaId: movie.cinemaId,
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
                      const newLocObj = LOCATIONS.find(
                        (loc) => loc.name === newLocation,
                      );
                      setEditRunTimes((prev) => ({
                        ...prev,
                        location: newLocation,
                        cinemaId: newLocObj ? newLocObj.id : prev.cinemaId,
                        room: newLocObj?.rooms[0]?.id || prev.room,
                      }));
                    }}
                  >
                    {LOCATIONS.map((loc) => (
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
                    {availableRooms.map((roomObj) => (
                      <option key={roomObj.id} value={roomObj.id}>
                        {roomObj.label}
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
