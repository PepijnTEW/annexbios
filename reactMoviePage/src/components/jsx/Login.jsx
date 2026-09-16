import React from "react";
import "../css/Login.css";

const LoginPage = () => {
  return (
    <div className="my-component">
      <div className="loginPage">
        <div className="loginContainer">
          <h2 className="loginTitle">Login</h2>
          <form className="loginForm" method="post">
            <indent className="loginLabel">Gebruikers naam:</indent>
            <input type="text" className="loginInput" />
            <indent className="loginLabel">wachtwoord:</indent>
            <input type="password" className="loginInput" />
            <input type="submit" className="loginButton" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
