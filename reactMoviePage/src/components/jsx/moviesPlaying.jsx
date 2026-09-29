import React, { useEffect, useState } from "react";
import "../css/moviesplaying.css";
import { Checkbox, Modal } from "@mui/material";

const MoviesPlaying = () => {
  const [conformSaveModal, setConformSaveModal] = useState(false);
  const [updatedMovies, setUpdatedMovies] = useState([]);
  const [activeMovies, setActiveMovies] = useState([]);

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
        url = page.links?.next;
      }
      setActiveMovies(
        movies.map((movie) => ({
          id: movie.movieId,
          title: movie.title,
          active: movie.active,
        })),
      );
    }

    loadMovies().catch(console.error);
  }, []);

  const [showRunTimes, setShowRunTimes] = useState(true);
  const API_URL = "https://annex.pepijntw.com/api/v1/movies";
  const API_KEY = process.env.REACT_APP_ANNEX_API_KEY;
  const OPTIONS_GET = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };
  const OPTIONS_POST = {
    method: "post",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

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
