import react from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      {/* year */}
      <div>
        <p>{movie.Year}</p>
      </div>

      {/* poster */}
      <div>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "http://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
      </div>

      {/* title */}
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
