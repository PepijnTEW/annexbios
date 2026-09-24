import React, { useState } from "react";
import "../css/addMovie.css";

const AddMovie = () => {
  const [movieOption, setMovieOption] = useState([
    { title: "fightclub", id: 101 },
    { title: "hailmary", id: 100 },
    { title: "thematrix", id: 102 },
    { title: "fightclub", id: 101 },
    { title: "hailmary", id: 100 },
    { title: "thematrix", id: 102 },
    { title: "fightclub", id: 101 },
    { title: "hailmary", id: 100 },
    { title: "thematrix", id: 102 },
    { title: "fightclub", id: 101 },
    { title: "hailmary", id: 100 },
    { title: "thematrix", id: 102 },
    { title: "fightclub", id: 101 },
    { title: "hailmary", id: 100 },
    { title: "thematrix", id: 102 },
    { title: "fightclub", id: 101 },
    { title: "hailmary", id: 100 },
    { title: "thematrix", id: 102 },
    { title: "fightclub", id: 101 },
    { title: "hailmary", id: 100 },
    { title: "thematrix", id: 102 },
    { title: "fightclub", id: 101 },
    { title: "hailmary", id: 100 },
    { title: "thematrix", id: 102 },
    { title: "fightclub", id: 101 },
    { title: "hailmary", id: 100 },
    { title: "thematrix", id: 102 },
  ]);
  const [addMovieStep, setAddMovieStep] = useState(1);
  const [pickedMovie, setPickedMovie] = useState("");
  const [pickedId, setPickedId] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
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

  const sendData = (
    movieTitle,
    movieId,
    movieDate,
    movieTime,
    movieLocation,
    roomName,
  ) => {};

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
