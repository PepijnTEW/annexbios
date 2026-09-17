import LoginPage from "./components/jsx/Login.jsx";
import Movie from "./components/jsx/Movie.jsx";
import MoviesPlaying from "./components/jsx/moviesPlaying.jsx";
import { useState, useEffect } from "react";

import ReactDOM from "react-dom/client";
import "./index.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [showMoviePage, setShowMoviePage] = useState(false);
  const [moviesPlayingPage, setMoviesPlayingPage] = useState(true);

  useEffect(() => {
    checklogin();
  });
  const checklogin = () => {
    if (isLoggedIn === true) {
      setShowMoviePage(true);
    } else {
      setShowLoginPage(true);
    }
  };
  return (
    <>
      <h1>Anex Bios</h1>

      {showLoginPage && <LoginPage />}
      {showMoviePage && <Movie />}
      {moviesPlayingPage && <MoviesPlaying />}
    </>
  );
};
export default App;
