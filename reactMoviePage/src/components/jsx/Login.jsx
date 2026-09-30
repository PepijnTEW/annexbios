import { useState } from "react";
import "../css/Login.css";

const LoginPage = ({ onLogin }) => {
  const [loginMessage, setLoginMessage] = useState("");

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const loginData = Object.fromEntries(formData.entries());
    const token = process.env.REACT_APP_ANNEX_API_KEY;
    if (token && token === loginData.token) {
      setLoginMessage("");
      onLogin();
    } else {
      setLoginMessage("onjuiste token");
    }
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
            <label className="token">token:</label>
            <input type="password" className="loginInput" name="token" />
            <button type="submit" className="loginButton">
              Inloggen
            </button>
            {loginMessage && (
              <p className="loginError" role="alert">
                {loginMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
