import React from "react";

const MovieCard = ({ movie, onSaveMovie }) => {
  const releaseYear = movie.release_date
    ? movie.release_date.slice(0, 4)
    : "Unknown";

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://placehold.co/400x600?text=No+Image";

  return (
    <div className="movie">
      <div>
        <p>{releaseYear}</p>
      </div>

      <div>
        <img
          src={posterUrl}
          alt={movie.title}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/400x600?text=No+Image";
          }}
        />
      </div>

      <div>
        <span>
          {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
        </span>
        <h3>{movie.title}</h3>
        <button
          className="add-button"
          type="button"
          onClick={() => onSaveMovie(movie)}
        >
          Toevoegen
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
