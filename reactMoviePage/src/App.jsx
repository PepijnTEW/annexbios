import LoginPage from "./components/jsx/Login.jsx";
import Movie from "./components/jsx/Movie.jsx";
import MoviesPlaying from "./components/jsx/MoviesPlaying.jsx";
import RunTimes from "./components/jsx/RunTimes.jsx";
import { useState, useEffect } from "react";

import ReactDOM from "react-dom/client";
import "./index.css";

const App = () => {
  // comment the checklogin function and put true in the usestate below to test certain pages
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [showMoviePage, setShowMoviePage] = useState(false);
  const [moviesPlayingPage, setMoviesPlayingPage] = useState(true);
  const [runTimesPage, setrunTimesPage] = useState(true);

  useEffect(() => {
    // checklogin();
  });
  //   const checklogin = () => {
  //     if (isLoggedIn === true) {
  //       setShowMoviePage(true);
  //     } else {
  //       setShowLoginPage(true);
  //     }
  //   };
  return (
    <>
      <h1>Anex Bios</h1>
      {showLoginPage && <LoginPage />}
      {showMoviePage && <Movie />}
      {moviesPlayingPage && <MoviesPlaying />}
      {runTimesPage && <RunTimes />}
    </>
  );
};
export default App;
