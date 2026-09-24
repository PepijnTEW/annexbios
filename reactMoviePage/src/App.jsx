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
  const [activePage, setActivePage] = useState("Home");

  useEffect(() => {
    // checklogin();
  }, [isLoggedIn]);
  const checklogin = () => {
    if (isLoggedIn === true) {
      setActivePage("Home");
    } else {
      setActivePage("Login");
    }
  };
  return (
    <div className="pageLayout">
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      <main className="pageContent">
        <h1>Anex Bios</h1>
        {activePage === "LoginPage" && <LoginPage />}
        {activePage === "Home" && <Movie />}
        {activePage === "Films" && <MoviesPlaying />}
        {activePage === "Showtimes" && <RunTimes />}
        {activePage === "Add movie" && <AddMovie />}
      </main>
    </div>
  );
};
export default App;
