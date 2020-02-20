import React, { useState } from "react";

import axios from "axios";
import Cookies from "js-cookie";

const Login = ({ modal, setModal, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = event => {
    const newEmail = event.target.value;
    setEmail(newEmail);
  };

  const handlePassword = event => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  };

  const sendLoginForm = async event => {
    event.preventDefault();

    const response = await axios.post(
      `${process.env.REACT_APP_API_DOMAIN}/user/log_in`,
      {
        email: email,
        password: password
      }
    );

    if (response.status === 200 && response.data.token !== undefined) {
      Cookies.set("userToken", response.data.token, { expires: 2000 });
      setUser({ token: response.data.token });
      resetLoginForm();
      setModal(false);
    }

    resetLoginForm();
  };

  const resetLoginForm = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <div className={`modal-wrapper ${modal ? "visible" : ""}`} id="login-modal">
      <div className="modal">
        <a
          href="#close"
          className="close"
          onClick={event => {
            setModal(false);
          }}
        >
          <img className="close-btn" src="/close-btn.svg" alt="close-btn"></img>
        </a>

        <div className="login-form-wrapper">
          <form className="login-form">
            <div className="form-login-title">Connexion</div>
            <label htmlFor="email">Adresse email</label>
            <input
              onChange={handleEmail}
              type="email"
              id="email"
              name="email"
              value={email}
            ></input>
            <label htmlFor="password">Mot de passe</label>
            <input
              onChange={handlePassword}
              type="password"
              id="password"
              name="password"
              value={password}
            ></input>
            <button
              onClick={sendLoginForm}
              className="submit-button"
              type="submit"
            >
              Se connecter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
