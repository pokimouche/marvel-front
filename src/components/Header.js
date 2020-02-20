import React from "react";
import Nav from "./Nav";
import LoginBtn from "./LoginBtn";
import SignUpBtn from "./SignUpBtn";

const Header = ({ setModal, setUser, user }) => {
  return (
    <header>
      <div className="container header-wrapper">
        <div className="header-left">
          <img className="logo" src="/logo-marvel.svg" alt="logo"></img>
          <Nav></Nav>
        </div>
        <div className="header-right">
          <LoginBtn
            user={user}
            setUser={setUser}
            setModal={setModal}
          ></LoginBtn>
          <SignUpBtn></SignUpBtn>
        </div>
      </div>
    </header>
  );
};

export default Header;
