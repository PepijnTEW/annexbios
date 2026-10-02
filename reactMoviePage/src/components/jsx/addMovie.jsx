import React, { useState, useEffect } from "react";
import "../css/addMovie.css";

const AddMovie = () => {
  const [movieOption, setMovieOption] = useState([]);
  useEffect(() => {
    async function loadMovies() {
      const movies = [];
      let url = API_URL;

      while (url) {
        const response = await fetch(url, OPTIONS_GET);
        if (!response.ok)
          throw new Error(`ophalen mislukt:" ${response.status}`);

        const page = await response.json();
        movies.push(...page.data);
        url = page.links?.next ? new URL(page.links.next, url).href : null;
      }
      const activeMoviesOnly = movies.filter((movie) => movie.active === true);

      setMovieOption(
        activeMoviesOnly.map((movie) => ({
          id: movie.movieId,
          title: movie.title,
          active: movie.active,
        })),
      );
    }

    loadMovies().catch(console.error);
  }, []);

  const API_URL = "https://annex.pepijntw.com/api/v1/movies";
  const API_KEY = process.env.REACT_APP_ANNEX_API_KEY;
  const OPTIONS_GET = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  const [addMovieStep, setAddMovieStep] = useState(1);
  const [pickedMovie, setPickedMovie] = useState("");
  const [pickedId, setPickedId] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [locations, setLocations] = useState([
    { name: "Leerdam", roomCount: 2 },
    { name: "Maarssen", roomCount: 2 },
    { name: "Breukelen", roomCount: 2 },
    { name: "Bilthoven", roomCount: 1 },
    { name: "Montfoort", roomCount: 2 },
    { name: "Woerden", roomCount: 2 },
    { name: "Leidscherijn", roomCount: 2 },
    { name: "Zeist", roomCount: 2 },
  ]);
  const [selectedLocation, setSelectedLocation] = useState("Leerdam");
  const [roomOption, setRoomOption] = useState(
    Array.from({ length: 4 }, (_, index) => ({
      name: `Zaal ${index + 1}`,
      id: index + 1,
    })),
  );
  const [pickedRoom, setPickedRoom] = useState("");

  const updateRoomsForLocation = (locationName) => {
    const selectedLocationData = locations.find(
      (location) => location.name === locationName,
    );

    const count = selectedLocationData ? selectedLocationData.roomCount : 1;

    setRoomOption(
      Array.from({ length: count }, (_, index) => ({
        name: `Zaal ${index + 1}`,
        id: index + 1,
      })),
    );

    setPickedRoom("");
  };

  const sendData = async (
    movieTitle,
    movieId,
    movieDate,
    movieTime,
    movieLocation,
    roomName,
  ) => {
    const API_URL_POST = "https://annex.pepijntw.com/api/v1/showtimes";

    const startTime = `${movieDate}T${movieTime}:00`;
    const endDate = new Date(`${startTime}Z`);
    endDate.setUTCHours(endDate.getUTCHours() + 2);
    const endTime = endDate.toISOString().slice(0, 19);

    const roomId = getRoomId(movieLocation, roomName);
    const cinemaId = getCinemaId(movieLocation);

    const OPTIONS = {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        movieId: Number(movieId),
        showroomId: Number(roomId),
        cinemaId: Number(cinemaId),
        startTime: startTime,
        endTime: endTime,
      }),
    };

    try {
      const response = await fetch(API_URL_POST, OPTIONS);
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          `Toevoegen mislukt (${response.status}): ${JSON.stringify(errorData.errors || errorData.message || response.statusText)}`,
        );
      }
      const result = await response.json();
      console.log("Showtime succesvol toegevoegd:", result);
      alert("Filmvoorstelling succesvol toegevoegd!");
    } catch (error) {
      console.error("Fout bij versturen:", error);
      alert(error.message);
    }
  };

  // Optional helper function if your locations map to specific cinema IDs
  const getCinemaId = (locationName) => {
    const cinemaMapping = {
      Leerdam: 1,
      Maarssen: 2,
      Breukelen: 3,
      Bilthoven: 4,
      Montfoort: 5,
      Woerden: 6,
      Leidscherijn: 7,
      Zeist: 8,
    };
    return cinemaMapping[locationName] || 1;
  };

  const getRoomId = (locationName, roomName) => {
    const roomNumber = roomName.replace("Zaal ", "").trim();
    const mapping = {
      Leerdam: { 1: 28, 2: 29 },
      Maarssen: { 1: 30, 2: 31 },
      Breukelen: { 1: 32, 2: 33 },
      Bilthoven: { 1: 34 },
      Montfoort: { 1: 35, 2: 36 },
      Woerden: { 1: 37, 2: 38 },
      Leidscherijn: { 1: 39, 2: 40 },
      Zeist: { 1: 41, 2: 42 },
    };

    return mapping[locationName]?.[roomNumber] || null;
  };

  return (
    <div>
      <h2>Voeg een film toe</h2>
      <div className="addMovieContainer">
        {addMovieStep === 1 && (
          <div className="chooseMovieContainer">
            <div className="chooseMovieCard">
              <div className="movieTitle">Titel</div>
              <div className="movieId">ID</div>
              <div className="movieChoose">Kies</div>
            </div>

            <div className="AMrowBorder"></div>

            {movieOption.map((movie) => (
              <React.Fragment key={movie.id}>
                <div className="chooseMovieCard">
                  <div className="movieTitle">{movie.title}</div>
                  <div className="movieId">{movie.id}</div>
                  <div className="movieChoose">
                    <button
                      onClick={() => {
                        setPickedMovie(movie.title);
                        setPickedId(movie.id);
                        setAddMovieStep(2);
                      }}
                    >
                      Selecteer
                    </button>
                  </div>
                </div>
                <div className="AMrowBorder"></div>
              </React.Fragment>
            ))}
          </div>
        )}

        {addMovieStep === 2 && (
          <div className="pickedMovieSummary">
            <h3>
              Je hebt de film{" "}
              <span className="pickedMovieName">{pickedMovie}</span> gekozen met
              een ID van <span className="pickedMovieId">{pickedId}</span>
            </h3>

            <form className="movieDetailsForm">
              <div className="formRow">
                <label htmlFor="movieDate">Datum</label>
                <input
                  id="movieDate"
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
              </div>

              <div className="formRow">
                <label htmlFor="movieTime">Tijd</label>
                <input
                  id="movieTime"
                  type="time"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                />
              </div>

              <div className="formRow">
                <label htmlFor="movieLocation">Vestiging</label>
                <select
                  id="movieLocation"
                  value={selectedLocation}
                  onChange={(e) => {
                    setSelectedLocation(e.target.value);
                    updateRoomsForLocation(e.target.value);
                  }}
                >
                  {locations.map((location) => (
                    <option key={location.name} value={location.name}>
                      {location.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="formRow">
                <label htmlFor="pickedRoom">Zaal</label>
                <select
                  id="pickedRoom"
                  value={pickedRoom}
                  onChange={(e) => setPickedRoom(e.target.value)}
                >
                  <option value="">Kies een zaal</option>
                  {roomOption.map((room) => (
                    <option key={room.id} value={room.name}>
                      {room.name}
                    </option>
                  ))}
                </select>
              </div>

              {selectedDate && selectedTime && pickedRoom && (
                <button
                  type="button"
                  className="saveButton"
                  onClick={() => setAddMovieStep(3)}
                >
                  Opslaan
                </button>
              )}
            </form>
          </div>
        )}

        {addMovieStep === 3 && (
          <div className="confirmationSummary">
            <h3>Bevestiging</h3>

            <div className="confirmationRow">
              <span className="confirmationLabel">Film:</span>
              <span className="confirmationValue">{pickedMovie}</span>
            </div>

            <div className="confirmationRow">
              <span className="confirmationLabel">ID:</span>
              <span className="confirmationValue">{pickedId}</span>
            </div>

            <div className="confirmationRow">
              <span className="confirmationLabel">Datum:</span>
              <span className="confirmationValue">{selectedDate}</span>
            </div>

            <div className="confirmationRow">
              <span className="confirmationLabel">Tijd:</span>
              <span className="confirmationValue">{selectedTime}</span>
            </div>

            <div className="confirmationRow">
              <span className="confirmationLabel">Vestiging:</span>
              <span className="confirmationValue">{selectedLocation}</span>
            </div>

            <div className="confirmationRow">
              <span className="confirmationLabel">Zaal:</span>
              <span className="confirmationValue">{pickedRoom}</span>
            </div>

            <button
              type="button"
              className="sendButton"
              onClick={() => {
                sendData(
                  pickedMovie,
                  pickedId,
                  selectedDate,
                  selectedTime,
                  selectedLocation,
                  pickedRoom,
                );
                setAddMovieStep(1);
              }}
            >
              Confirm
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddMovie;
