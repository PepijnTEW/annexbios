import React from "react";
const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.release_date}</p>
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
      </div>
    </div>
  );
};

export default MovieCard;
