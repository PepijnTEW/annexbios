import React from "react";
import { useState } from "react";
import "../css/Login.css";

const LoginPage = () => {
  const [logindata, setLoginData] = useState({});
  const handleSubmitLogin = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    axios.post("http://example.com/api/endpoint", formData).then((response) => {
      setLoginData(formData);
    });
  };
  return (
    <div className="my-component">
      <div className="loginPage">
        <div className="loginContainer">
          <h2 className="loginTitle">Login</h2>
          <form
            className="loginForm"
            method="post"
            onSubmit={handleSubmitLogin}
          >
            <label className="loginLabel">Gebruikers naam:</label>
            <input type="text" className="loginInput" name="username" />
            <label className="loginLabel">wachtwoord:</label>
            <input type="password" className="loginInput" name="password" />
            <input type="submit" className="loginButton" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
