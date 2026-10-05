function MovieCard({ movie, onBook }) {

  return (

    <div className="movie-card">

      <img
        src={movie.image}
        alt={movie.title}
        className="movie-poster"
      />


      <div className="movie-card-content">

        <h3>
          {movie.title}
        </h3>


        <p className="rating">
          ⭐ {movie.rating}
        </p>


        <p className="movie-meta">
          {movie.genre} • {movie.language}
        </p>


        <button
          className="book-button"
          onClick={() => onBook(movie)}
        >
          Book Now
        </button>

      </div>

    </div>

  );
}

export default MovieCard;