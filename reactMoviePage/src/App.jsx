import "./App.css";
import { useEffect, useState } from "react";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard.jsx";

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

const App = () => {
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

  const handleSaveMovie = (movie) => {
    setSelectedMovie(movie);
    alert(`Film toegevoegd: ${movie.title} (${movie.release_date})`);
  };

  return (
    <div className="app">
      <h1>Anex Bios</h1>

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
            <MovieCard key={movie.id} movie={movie} onSaveMovie={handleSaveMovie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}

      
    </div>
  );
};

export default App;
