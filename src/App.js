import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cookies from "js-cookie";
import "./css/reset.css";
import "./App.css";
import Characters from "./containers/Characters";
import CharacterCard from "./containers/CharacterCard";
import ComicCard from "./containers/ComicCard";
import Comics from "./containers/Comics";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AccountCreation from "./containers/AccountCreation";
import LoginBtn from "./components/LoginBtn";
import Login from "./components/Login";

function App() {
  const tokenFromCookie = Cookies.get("userToken");
  console.log(tokenFromCookie, "cookie");
  let newState;
  if (tokenFromCookie !== undefined) {
    newState = { token: tokenFromCookie };
  } else {
    newState = null;
  }

  const [modal, setModal] = useState(false);

  const [user, setUser] = useState(newState);
  console.log(user, "utilisateur");

  return (
    <Router>
      <Header setModal={setModal} user={user} setUser={setUser}></Header>

      <Switch>
        <Route path="/account/creation">
          <AccountCreation user={user} setUser={setUser}></AccountCreation>
        </Route>
        <Route path="/comics">
          <Comics user={user}></Comics>
        </Route>

        <Route path="/comic/:id">
          <ComicCard></ComicCard>
        </Route>
        <Route path="/character/:id">
          <CharacterCard></CharacterCard>
        </Route>
        <Route path="/">
          <Characters user={user}></Characters>
        </Route>
      </Switch>

      <Footer></Footer>
      <Login modal={modal} setModal={setModal} setUser={setUser}></Login>
    </Router>
  );
}

export default App;
