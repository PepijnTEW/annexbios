import "../css/Movie.css";
import { useState } from "react";
import SearchIcon from "../assets/search.svg";
import MovieCard from "./MovieCard.jsx";
import { Button, Modal, Box, Typography } from "@mui/material";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MmQzOTk4NWNkMmM2OGZlYzZiNjdkNzczODFiMjg5ZSIsIm5iZiI6MTc4OTEyMjMyMC4wNzEsInN1YiI6IjZhYTNkNzEwYjUzZGQwZTIxZTRhNmEzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wKNzl3RyxuDxHvTZydd_BOO6g8AX68sioOSNyM_4hLY";
const API_URL = `https://api.themoviedb.org/3/search/movie`;

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

  const searchMovies = async () => {
    const API_SEARCH = API_URL + `?query=${searchTerm}`;
    const response = await fetch(API_SEARCH, OPTIONS);
    const data = await response.json();

    setMovies(data.results);
    setSelectedMovie(null);
  };

  const handleSaveMovie = async (movie) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movie.id}`,
      OPTIONS,
    );
    const detailedData = await response.json();
    setSelectedMovie(detailedData);
  };

  const sendMovie = async () => {
    const movieData = {
      title: selectedMovie.title,
      overview: selectedMovie.overview,
      releaseDate: selectedMovie.release_date,
      rating: selectedMovie.vote_average,
      posterPath: selectedMovie.poster_path,
      language: selectedMovie.original_language,
      runtime: selectedMovie.runtime,
    };
    console.log(movieData);
    handleClose();
  };

  const handleClose = () => setSelectedMovie(null);

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
                Runtime: {selectedMovie.id}
              </Typography>
              <Button onClick={handleClose}>Close</Button>
              <Button onClick={sendMovie}>Confirm</Button>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default Movie;
