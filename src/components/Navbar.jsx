import { useState } from "react";

function Navbar() {

  const [showCity, setShowCity] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        🎬 MovieBook
      </div>


      {/* Navigation Links */}
      <div className="nav-links">

        <a href="#">Home</a>
        <a href="#">Movies</a>
        <a href="#">Theatres</a>

      </div>


      {/* Right Side */}
      <div className="nav-actions">

        {/* City */}
        <button
          className="city-button"
          onClick={() => setShowCity(!showCity)}
        >
          📍 Kakinada
        </button>

        {/* Profile */}
        <button
          className="profile-button"
          onClick={() => setShowLogin(true)}
        >
          👤
        </button>

      </div>


      
      {showCity && (
        <div className="city-card">

          <div className="card-header">
            <h3>Select City</h3>

            <button onClick={() => setShowCity(false)}>
              ✕
            </button>
          </div>

          <input
            type="text"
            placeholder="Search city..."
          />

          <button>Kakinada</button>
          <button>Visakhapatnam</button>
          <button>Vijayawada</button>
          <button>Hyderabad</button>
          <button>Chennai</button>

        </div>
      )}


      {/* Login Card */}
      {showLogin && (
        <div className="login-card">

          <div className="card-header">

            <h3>Sign In</h3>

            <button onClick={() => setShowLogin(false)}>
              ✕
            </button>

          </div>

          <input
            type="text"
            placeholder="Email or Mobile"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button className="signin-button">
            Sign In
          </button>

          <p>
            New user? <span>Create Account</span>
          </p>

        </div>
      )}

    </nav>
  );
}

export default Navbar;