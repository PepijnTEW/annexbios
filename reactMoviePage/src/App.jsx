import LoginPage from "./components/jsx/Login.jsx";
import Movie from "./components/jsx/Movie.jsx";
import MoviesPlaying from "./components/jsx/moviesPlaying.jsx";
import RunTimes from "./components/jsx/runTimes.jsx";
import AddMovie from "./components/jsx/addMovie.jsx";
import Navbar from "./components/jsx/navbar.jsx";
import { useState, useEffect } from "react";

import ReactDOM from "react-dom/client";
import "./index.css";

const App = () => {
  // comment the checklogin function and put true in the usestate below to test certain pages
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [showMoviePage, setShowMoviePage] = useState(false);
  const [moviesPlayingPage, setMoviesPlayingPage] = useState(false);
  const [runTimesPage, setrunTimesPage] = useState(false);
  const [showAddmovie, setShowAddmovie] = useState(true);

  useEffect(() => {
    // checklogin();
  });
  const checklogin = () => {
    if (isLoggedIn === true) {
      setShowMoviePage(true);
    } else {
      setShowLoginPage(true);
    }
  };
  return (
    <div className="pageLayout">
      <Navbar />

      <main className="pageContent">
        <h1>Anex Bios</h1>
        {showLoginPage && <LoginPage />}
        {showMoviePage && <Movie />}
        {moviesPlayingPage && <MoviesPlaying />}
        {runTimesPage && <RunTimes />}
        {showAddmovie && <AddMovie />}
      </main>
    </div>
  );
};
export default App;
