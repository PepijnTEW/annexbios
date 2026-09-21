import React, { useState } from "react";
import "../css/moviesplaying.css";
import { Checkbox, Modal } from "@mui/material";

const MoviesPlaying = () => {
  const [conformSaveModal, setConformSaveModal] = useState(false);
  const [updatedMovies, setUpdatedMovies] = useState([]);
  const [activeMovies, setActiveMovies] = useState([
    // hier moet de film data worden ingeladen
    { title: "fightclub", id: 101, active: true },
    { title: "hailmary", id: 100, active: true },
    { title: "thematrix", id: 102, active: true },
  ]);

  // Bepaalt of het vinkje op het scherm AAN of UIT staat
  const isMovieChecked = (movie) => {
    const changedMovie = updatedMovies.find((m) => m.id === movie.id);
    return changedMovie ? changedMovie.active : movie.active;
  };

  const handleCheckboxChange = (event, movieTitle, movieId) => {
    const isChecked = event.target.checked;
    const movieAction = { title: movieTitle, id: movieId, active: isChecked };

    setUpdatedMovies((prev) => {
      const exists = prev.some((movie) => movie.id === movieId);

      if (exists) {
        return prev.filter((movie) => movie.id !== movieId);
      } else {
        return [...prev, movieAction];
      }
    });
  };

  return (
    <>
      <div className="app">
        <h2 id="movies-playing">Draaiende films</h2>

        <div className="PMcontainer">
          <div className="PMcard">
            <div className="PMtitle">Titel</div>
            <div className="PMid">Film ID</div>
            <p>enabled</p>
          </div>
          <div className="PMrowBorder"></div>

          {activeMovies.map((movie) => (
            <React.Fragment key={movie.id}>
              <div className="PMcard">
                <div className="PMtitle">{movie.title}</div>
                <div className="PMid">{movie.id}</div>
                <Checkbox
                  checked={isMovieChecked(movie)}
                  onChange={(e) =>
                    handleCheckboxChange(e, movie.title, movie.id)
                  }
                />
              </div>
              <div className="PMrowBorder"></div>
            </React.Fragment>
          ))}
        </div>

        {updatedMovies.length > 0 && (
          <button
            className="PMsaveButton"
            onClick={() => setConformSaveModal(true)}
          >
            Save
          </button>
        )}

        <Modal
          className="PMmodal"
          open={conformSaveModal}
          onClose={() => setConformSaveModal(false)}
        >
          <div className="PMmodal-content">
            <p>Are you sure you want to save these changes?</p>
            <button
              className="PMmodal-button"
              onClick={() => {
                setConformSaveModal(false);
                console.log("Changes saved:", updatedMovies);

                setActiveMovies((prev) =>
                  prev.map((movie) => {
                    const update = updatedMovies.find((u) => u.id === movie.id);
                    return update ? { ...movie, active: update.active } : movie;
                  }),
                );

                setUpdatedMovies([]);
              }}
            >
              Confirm
            </button>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default MoviesPlaying;
