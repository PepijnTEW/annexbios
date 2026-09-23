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
  const [selectedLocation, setSelectedLocation] = useState("Leerdam");

  const locations = [
    "Leerdam",
    "Maarssen",
    "Breukelen",
    "Bilthoven",
    "Montfoort",
    "Woerden",
    "Leidscherijn",
    "Zeist",
  ];

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
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>

              {selectedDate && selectedTime && (
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
          </div>
        )}
      </div>
    </div>
  );
};

export default AddMovie;
