import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
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
  const [favoriteData, setFavoriteData] = useState({
    characters: [],
    comics: []
  });

  useEffect(() => {
    const fetchData = async () => {
      if (user !== null) {
        const response = await axios.get(
          `${process.env.REACT_APP_API_DOMAIN}/favorites`,
          {
            headers: {
              Authorization: "Bearer " + user.token,
              "Content-Type": "multipart/form-data"
            }
          }
        );

        const favoriteArray = response.data.reduce(
          (object, element) => {
            object[element.category].push(element.favoriteId);
            return object;
          },
          { characters: [], comics: [] }
        );

        setFavoriteData(favoriteArray);
      } else {
        setFavoriteData({ characters: [], comics: [] });
      }
    };
    fetchData();
  }, [user]);

  console.log("utilisateur", user, "favorites", favoriteData);

  return (
    <Router>
      <Header setModal={setModal} user={user} setUser={setUser}></Header>

      <Switch>
        <Route path="/account/creation">
          <AccountCreation user={user} setUser={setUser}></AccountCreation>
        </Route>
        <Route path="/comics">
          <Comics
            user={user}
            setFavoriteData={setFavoriteData}
            favoriteData={favoriteData}
          ></Comics>
        </Route>

        <Route path="/comic/:id">
          <ComicCard></ComicCard>
        </Route>
        <Route path="/characters/:id">
          <CharacterCard></CharacterCard>
        </Route>
        <Route path="/">
          <Characters
            setFavoriteData={setFavoriteData}
            favoriteData={favoriteData}
            user={user}
          ></Characters>
        </Route>
      </Switch>

      <Footer></Footer>
      <Login modal={modal} setModal={setModal} setUser={setUser}></Login>
    </Router>
  );
}

export default App;
