import React from "react";
import { useState } from "react";
import "./App.css";
import { Route, Routes, NavLink } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Admin from "./Pages/Admin";
import Profile from "./Pages/Profile";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const correctUsername = "admin";
  const correctPassword = "cs23ReactRouterAE";

  const handleLogin = (event) => {
    event.preventDefault();
    if (username === correctUsername && password === correctPassword) {
      setIsLoggedIn(true);
    } else {
      navigate("/error");
    }
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/error" element={<Error />} />
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/admin"
          element={
            <Admin isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route path="/profile/:studentId" element={<Profile />} />
      </Routes>
      <nav>
        <NavLink replace to="/" className="inactive-link" exact>
          {({ isActive }) =>
            isActive ? (
              <span className="active-link">Home</span>
            ) : (
              <span>Home</span>
            )
          }
        </NavLink>
        <NavLink replace to="/about" className="inactive-link">
          {({ isActive }) =>
            isActive ? (
              <span className="active-link">About</span>
            ) : (
              <span>About</span>
            )
          }
        </NavLink>
        <NavLink replace to="/contact" className="inactive-link">
          {({ isActive }) =>
            isActive ? (
              <span className="active-link">Contact</span>
            ) : (
              <span>Contact</span>
            )
          }
        </NavLink>
        <NavLink replace to="/profile/219" className="inactive-link">
          {({ isActive }) =>
            isActive ? (
              <span className="active-link">Profile</span>
            ) : (
              <span>Profile</span>
            )
          }
        </NavLink>
        <NavLink replace to="/admin" className="inactive-link">
          {({ isActive }) =>
            isActive ? (
              <span className="active-link">For Admin!!</span>
            ) : (
              <span>For Admin!!</span>
            )
          }
        </NavLink>
      </nav>
      {!isLoggedIn && (
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="text"
            placeholder="admin"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="cs23ReactRouterAE"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Log in</button>
        </form>
      )}
    </div>
  );
}

export default App;
