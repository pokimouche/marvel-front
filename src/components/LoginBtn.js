import React from "react";
import Cookies from "js-cookie";

const LoginBtn = ({ setModal, setUser, user }) => {
  const logOut = () => {
    setUser(null);

    Cookies.remove("userToken");
  };
  return (
    <>
      {user === null ? (
        <button
          onClick={event => {
            setModal(true);
          }}
          className="login-btn"
        >
          Se connecter
        </button>
      ) : (
        <button onClick={logOut} className="login-btn">
          <span>Se déconnecter</span>
        </button>
      )}
    </>
  );
};

export default LoginBtn;
