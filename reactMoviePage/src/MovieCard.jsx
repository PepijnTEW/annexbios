import React from "react";
const MovieCard = ({ movie, onSaveMovie }) => {
  const releaseYear = movie.release_date ? movie.release_date.slice(0, 4) : "Unknown";

  return (
    <div className="movie">
      <div>
        <p>{releaseYear}</p>
      </div>

      <div>
        <img
          src={
            movie.poster_path !== "null"
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://placehold.co/400x600?text=No+Image"
          }
          alt={movie.title}
        />
      </div>

      <div>
        <span>{movie.vote_average.toFixed(1)}</span>
        <h3>{movie.title}</h3>
        <button className="add-button" type="button" onClick={() => onSaveMovie(movie)}>
          Toevoegen
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
