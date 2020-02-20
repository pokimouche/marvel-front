import React from "react";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

const AccountCreation = props => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = event => {
    const newEmail = event.target.value;
    setEmail(newEmail);
  };

  const handleUserName = event => {
    const newUserName = event.target.value;
    setUserName(newUserName);
  };

  const handlePassword = event => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  };

  const resetCreationForm = () => {
    setEmail("");
    setPassword("");
    setUserName("");
  };

  const sendAccountForm = async event => {
    event.preventDefault();

    const response = await axios.post(
      `${process.env.REACT_APP_API_DOMAIN}/user/sign_up`,
      {
        email: email,
        username: userName,
        password: password
      }
    );

    if (response.status === 200 && response.data.token !== undefined) {
      props.setUser(response.data.token);
      Cookies.set("userToken", props.user, { expires: 2000 });
      resetCreationForm();
      history.push("/");
    }
    console.log(response.data);
  };

  return (
    <main className="container">
      <div className="account-creation-wrapper">
        <div className="account-form-creation">
          <p className="account-form-creation-title">Créer un compte</p>
          <form>
            <label htmlFor="username">
              Pseudo <span>*</span>
            </label>
            <input
              onChange={handleUserName}
              id="username"
              type="text"
              name="username"
              value={userName}
            ></input>
            <label htmlFor="sign-up-email">
              Adresse email <span>*</span>
            </label>
            <input
              onChange={handleEmail}
              id="sign-up-email"
              type="email"
              name="email"
              value={email}
            ></input>

            <label htmlFor="sign-up-password">
              Mot de passe <span>*</span>
            </label>
            <input
              onChange={handlePassword}
              type="password"
              id="sign-up-password"
              name="password"
              value={password}
            ></input>

            <button
              onClick={sendAccountForm}
              className="submit-button"
              type="submit"
            >
              Créer mon Compte
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AccountCreation;
