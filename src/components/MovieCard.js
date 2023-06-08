import React from "react";

function MovieCard({
  title,
  posterSrc = "https://flxt.tmsimg.com/assets/p16852_p_v8_ad.jpg",
  genres,
}) {
  return (
    <div className="movie-card">
      <img src={posterSrc} alt={title} />
      <h2>{title}</h2>
      <small>{genres.join(", ")}</small>
    </div>
  );
}

export default MovieCard;