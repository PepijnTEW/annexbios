import "../css/Movie.css";
import { useState } from "react";
import SearchIcon from "../assets/search.svg";
import MovieCard from "./MovieCard.jsx";
import { Button, Modal, Box, Typography } from "@mui/material";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const API_URL = `https://api.themoviedb.org/3/search/movie`;

const API_URL_POST_MOVIES = "https://annex.pepijntw.com/api/v1/movies";
const API_URL_POST_ACTORS = "https://annex.pepijntw.com/api/v1/actors";
const API_KEY_POST = process.env.REACT_APP_ANNEX_API_KEY;
const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [saveError, setSaveError] = useState("");

  const searchMovies = async () => {
    const API_SEARCH = API_URL + `?query=${searchTerm}`;
    const response = await fetch(API_SEARCH, OPTIONS);
    const data = await response.json();

    setMovies(data.results);
    setSelectedMovie(null);
  };

  const handleSaveMovie = async (movie) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movie.id}?append_to_response=credits`,
      OPTIONS,
    );
    const detailedData = await response.json();
    setSelectedMovie(detailedData);
  };

  const sendMovie = async (movieToSave) => {
    setSaveError("");
    const cast = (movieToSave.credits?.cast ?? []).slice(0, 3);
    const movieData = {
      title: movieToSave.title,
      description: movieToSave.overview,
      releaseDate: movieToSave.release_date,
      imdRating: movieToSave.vote_average,
      posterPath: "https://image.tmdb.org/t/p/w500" + movieToSave.poster_path,
      language: movieToSave.original_language,
      runtime: movieToSave.runtime,
      active: false,
      actors: cast.map((actor) => actor.id),
      genres: (movieToSave.genres ?? []).map((genre) => genre.id),
    };

    try {
      await Promise.all(
        cast.map(async (actor) => {
          const actorResponse = await fetch(API_URL_POST_ACTORS, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${API_KEY_POST}`,
            },
            body: JSON.stringify({ actorId: actor.id, name: actor.name }),
          });

          if (!actorResponse.ok) {
            const details = (await actorResponse.text()).slice(0, 300);
            throw new Error(
              `Actor ${actor.name} (${actor.id}) could not be saved: ${actorResponse.status} ${details}`,
            );
          }
        }),
      );

      const response = await fetch(API_URL_POST_MOVIES, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY_POST}`,
        },
        body: JSON.stringify(movieData),
      });

      if (!response.ok) {
        const details = (await response.text()).slice(0, 300);
        throw new Error(`Movie could not be saved: ${response.status} ${details}`);
      }

    } catch (error) {
      console.error("Error saving movie and cast:", error);
      setSaveError(error.message);
    }
  };

  const handleClose = () => setSelectedMovie(null);
  const handleConfirm = () => {
    if (!selectedMovie) return;

    const movieToSave = selectedMovie;
    handleClose();
    void sendMovie(movieToSave);
  };

  return (
    <div className="app">
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {saveError && <p role="alert">Opslaan mislukt: {saveError}</p>}

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onSaveMovie={handleSaveMovie}
            />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
      <Modal open={selectedMovie !== null} onClose={handleClose}>
        <Box className="modal-box">
          {selectedMovie && (
            <>
              <Typography variant="h6">{selectedMovie.title}</Typography>
              <Typography variant="body1">{selectedMovie.overview}</Typography>
              <Typography variant="body2">
                Release Date: {selectedMovie.release_date}
              </Typography>
              <Typography variant="body2">
                Rating: {selectedMovie.vote_average}
              </Typography>
              <Typography variant="body2">
                Language: {selectedMovie.original_language}
              </Typography>
              <Typography variant="body2">
                Runtime: {selectedMovie.runtime} minutes
              </Typography>
              <Typography variant="body2">
                Genres: {(selectedMovie.genres ?? []).map((genre) => genre.name).join(", ")}
              </Typography>
              <Typography variant="body2">
                Actors:{" "}
                {(selectedMovie.credits?.cast ?? [])
                  .slice(0, 3)
                  .map((actor) => actor.name)
                  .join(", ")}
              </Typography>
              <Button onClick={handleClose}>Close</Button>
              <Button onClick={handleConfirm}>Confirm</Button>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default Movie;
