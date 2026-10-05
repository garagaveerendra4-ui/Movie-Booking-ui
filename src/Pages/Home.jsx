import "./Home.css";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import movies from "../data/movies";
import { useState } from "react";

function Home() {

  // Stores the movie selected from a movie card
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Controls theatre selection card
  const [showTheatres, setShowTheatres] = useState(false);

  // Stores selected theatre
  const [selectedTheatre, setSelectedTheatre] = useState(null);

  // Stores selected show time
  const [selectedTime, setSelectedTime] = useState(null);

  // Stores selected seats
  const [selectedSeats, setSelectedSeats] = useState([]);


  // ================= SEATS =================

  const seats = [
    ["A1", "A2", "A3", "A4", "A5"],
    ["B1", "B2", "B3", "B4", "B5"],
    ["C1", "C2", "C3", "C4", "C5"],
    ["D1", "D2", "D3", "D4", "D5"]
  ];


  // Seats that are already occupied
  const occupiedSeats = [
    "A3",
    "B2",
    "C3",
    "D4"
  ];


  // ================= FEATURED MOVIE =================

  const featuredMovie = {
    id: "featured",
    title: "Doraemon: Castle of the Undersea Devil",
    rating: "9.4 / 10",
    genre: "Animation",
    language: "Japanese",
    image: "https://cdn.district.in/movies-assets/images/cinema/Doraemon--poster-aa150b70-6dff-11f1-9444-c504df2f3dc4.jpg",
    description:
      "Join Doraemon, Nobita, and friends as they dive into an unforgettable underwater adventure brimming with friendship, courage, and mystery beneath the waves.",
    trailer: "https://youtu.be/YuQB6-_DoXU"
  };


  return (
    <div className="home">

      {/* ================= NAVBAR ================= */}

      <Navbar />


      {/* ================= HERO SECTION ================= */}

      <section className="hero">

        <div className="hero-content">

          <p className="featured-text">
            FEATURED MOVIE
          </p>

          <h1>
            Doraemon: Castle of the Undersea Devil
          </h1>


          <div className="movie-info">

            <span>⭐ 9.4 / 10</span>

            <span>Animation</span>

            <span>Fantasy</span>

            <span>Adventure</span>

          </div>


          <p className="hero-description">

            Join Doraemon, Nobita, and friends as they
            dive into an unforgettable underwater adventure
            brimming with friendship, courage, and mystery
            beneath the waves.

          </p>


          <button
            className="book-button"
            onClick={() => setSelectedMovie(featuredMovie)}
          >
            🎟 Book Tickets
          </button>

        </div>

      </section>



      {/* ================= RECOMMENDED MOVIES ================= */}

      <section className="movies-section">

        <div className="section-header">

          <h2>
            Recommended Movies
          </h2>

        </div>


        <div className="movie-grid">

          {movies.map((movie) => (

            <MovieCard
              key={movie.id}
              movie={movie}
              onBook={setSelectedMovie}
            />

          ))}

        </div>

      </section>



      {/* =====================================================
          MOVIE DETAILS OVERLAY
         ===================================================== */}

      {selectedMovie && (

        <div className="movie-details-overlay">

          <div className="movie-details">


            {/* Close button */}

            <button
              className="close-details"
              onClick={() => setSelectedMovie(null)}
            >
              ✕
            </button>



            {/* Movie Poster */}

            <img
              src={selectedMovie.image}
              alt={selectedMovie.title}
              className="details-poster"
            />



            {/* Movie Information */}

            <div className="details-content">

              <h1>
                {selectedMovie.title}
              </h1>


              <div className="details-info">

                <span>
                  ⭐ {selectedMovie.rating}
                </span>

                <span>
                  {selectedMovie.genre}
                </span>

                <span>
                  {selectedMovie.language}
                </span>

              </div>


              <p className="details-description">
                {selectedMovie.description}
              </p>



              {/* Buttons */}

              <div className="details-buttons">


                {/* Trailer */}

                <a
                  href={selectedMovie.trailer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="trailer-button"
                >
                  ▶ Watch Trailer
                </a>



                {/* Book Tickets */}

                <button
                  className="details-book-button"
                  onClick={() => setShowTheatres(true)}
                >
                  🎟 Book Tickets
                </button>

              </div>

            </div>

          </div>

        </div>

      )}



      {/* =====================================================
          THEATRE SELECTION
         ===================================================== */}

      {showTheatres && selectedMovie && (

        <div className="theatre-overlay">

          <div className="theatre-card">


            {/* Header */}

            <div className="card-header">

              <div>

                <p className="small-title">
                  BOOK TICKETS
                </p>

                <h2>
                  {selectedMovie.title}
                </h2>

              </div>


              <button
                className="close-theatre"
                onClick={() => setShowTheatres(false)}
              >
                ✕
              </button>

            </div>



            {/* City */}

            <p className="select-text">
              Select a theatre in Kakinada
            </p>



            {/* Theatre List */}

            <div className="theatre-list">


              {/* Theatre 1 */}

              <div className="theatre-item">

                <div>

                  <h3>
                    INOX Cinemas
                  </h3>

                  <p>
                    Central Mall, Kakinada
                  </p>

                </div>


                <button
                  onClick={() => {
                    setSelectedTheatre("INOX Cinemas");
                    setSelectedTime(null);
                    setSelectedSeats([]);
                    setShowTheatres(false);
                  }}
                >
                  View Shows
                </button>

              </div>



              {/* Theatre 2 */}

              <div className="theatre-item">

                <div>

                  <h3>
                    Devi Multiplex
                  </h3>

                  <p>
                    Kakinada
                  </p>

                </div>


                <button
                  onClick={() => {
                    setSelectedTheatre("Devi Multiplex");
                    setSelectedTime(null);
                    setSelectedSeats([]);
                    setShowTheatres(false);
                  }}
                >
                  View Shows
                </button>

              </div>



              {/* Theatre 3 */}

              <div className="theatre-item">

                <div>

                  <h3>
                    Sri Priya Theatre
                  </h3>

                  <p>
                    Kakinada
                  </p>

                </div>


                <button
                  onClick={() => {
                    setSelectedTheatre("Sri Priya Theatre");
                    setSelectedTime(null);
                    setSelectedSeats([]);
                    setShowTheatres(false);
                  }}
                >
                  View Shows
                </button>

              </div>

            </div>


          </div>

        </div>

      )}



      {/* =====================================================
          SHOW TIMINGS
         ===================================================== */}

      {selectedTheatre && !selectedTime && (

        <div className="timing-overlay">

          <div className="timing-card">


            {/* Header */}

            <div className="card-header">

              <div>

                <p className="small-title">
                  SELECT SHOW TIME
                </p>

                <h2>
                  {selectedMovie.title}
                </h2>

                <p className="theatre-name">
                  📍 {selectedTheatre}
                </p>

              </div>


              <button
                className="close-theatre"
                onClick={() => {
                  setSelectedTheatre(null);
                  setSelectedTime(null);
                  setSelectedSeats([]);
                }}
              >
                ✕
              </button>

            </div>



            {/* ================= DATE ================= */}

            <div className="date-section">

              <h3>
                Select Date
              </h3>


              <div className="date-list">

                <button className="date-button active">
                  <span>03</span>
                  <small>OCT</small>
                </button>

                <button className="date-button">
                  <span>04</span>
                  <small>OCT</small>
                </button>

                <button className="date-button">
                  <span>05</span>
                  <small>OCT</small>
                </button>

              </div>

            </div>



            {/* ================= SHOW TIMINGS ================= */}

            <div className="show-section">

              <h3>
                Available Shows
              </h3>


              <div className="show-times">


                <button
                  className="show-time"
                  onClick={() => {
                    setSelectedTime("10:30 AM");
                    setSelectedSeats([]);
                  }}
                >
                  10:30 AM
                </button>


                <button
                  className="show-time"
                  onClick={() => {
                    setSelectedTime("01:30 PM");
                    setSelectedSeats([]);
                  }}
                >
                  01:30 PM
                </button>


                <button
                  className="show-time"
                  onClick={() => {
                    setSelectedTime("04:30 PM");
                    setSelectedSeats([]);
                  }}
                >
                  04:30 PM
                </button>


                <button
                  className="show-time"
                  onClick={() => {
                    setSelectedTime("07:30 PM");
                    setSelectedSeats([]);
                  }}
                >
                  07:30 PM
                </button>


                <button
                  className="show-time"
                  onClick={() => {
                    setSelectedTime("10:30 PM");
                    setSelectedSeats([]);
                  }}
                >
                  10:30 PM
                </button>


              </div>

            </div>


          </div>

        </div>

      )}



      {/* =====================================================
          SEAT SELECTION
         ===================================================== */}

      {selectedTime && selectedMovie && selectedTheatre && (

        <div className="seat-overlay">

          <div className="seat-card">


            {/* Header */}

            <div className="card-header">

              <div>

                <p className="small-title">
                  SELECT SEATS
                </p>

                <h2>
                  {selectedMovie.title}
                </h2>

                <p className="seat-theatre">
                  📍 {selectedTheatre} • {selectedTime}
                </p>

              </div>


              <button
                className="close-theatre"
                onClick={() => {
                  setSelectedTime(null);
                  setSelectedSeats([]);
                }}
              >
                ✕
              </button>

            </div>



            {/* ================= SCREEN ================= */}

            <div className="screen">
              SCREEN
            </div>



            {/* ================= SEAT LAYOUT ================= */}

            <div className="seat-layout">

              {seats.map((row) => (

                <div
                  className="seat-row"
                  key={row[0]}
                >

                  {row.map((seat) => {

                    const isOccupied =
                      occupiedSeats.includes(seat);

                    const isSelected =
                      selectedSeats.includes(seat);


                    return (

                      <button
                        key={seat}
                        disabled={isOccupied}
                        className={`seat ${
                          isOccupied
                            ? "occupied"
                            : isSelected
                            ? "selected"
                            : "available"
                        }`}


                        onClick={() => {

                          if (isSelected) {

                            setSelectedSeats(
                              selectedSeats.filter(
                                (item) => item !== seat
                              )
                            );

                          } else {

                            setSelectedSeats([
                              ...selectedSeats,
                              seat
                            ]);

                          }

                        }}
                      >

                        {seat}

                      </button>

                    );

                  })}

                </div>

              ))}

            </div>



            {/* ================= SEAT LEGEND ================= */}

            <div className="seat-legend">

              <span>
                <i className="legend-box available-box"></i>
                Available
              </span>

              <span>
                <i className="legend-box occupied-box"></i>
                Occupied
              </span>

              <span>
                <i className="legend-box selected-box"></i>
                Selected
              </span>

            </div>



            {/* ================= SEAT SUMMARY ================= */}

            <div className="seat-summary">

              <div>

                <p>
                  Selected Seats
                </p>

                <strong>

                  {selectedSeats.length === 0
                    ? "None"
                    : selectedSeats.join(", ")
                  }

                </strong>

              </div>


              <div>

                <p>
                  Total
                </p>

                <strong>
                  ₹{selectedSeats.length * 200}
                </strong>

              </div>

            </div>



            {/* ================= CONTINUE ================= */}

            <button
              className="continue-button"
              disabled={selectedSeats.length === 0}
            >
              Continue
            </button>


          </div>

        </div>

      )}


    </div>
  );
}

export default Home;    