import LoginPage from "./components/jsx/Login.jsx";
import Movie from "./components/jsx/Movie.jsx";
import { useState, useEffect } from "react";

import ReactDOM from "react-dom/client";
import "./index.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginPage, setShowLoginPage] = useState(true);
  const [showMoviePage, setShowMoviePage] = useState(false);

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
    </>
  );
};
export default App;
