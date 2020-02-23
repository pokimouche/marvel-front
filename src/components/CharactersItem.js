import React from "react";
import { Link } from "react-router-dom";
import Favorite from "./Favorite";

const CharactersItem = ({
  id,
  name,
  description,
  thumbnail,
  user,
  favoriteData,
  setFavoriteData
}) => {
  const category = "characters";
  return (
    <li className="item-wrapper">
      <Link className="item-link" to={`/characters/${id}`}>
        <img
          className="small-thumbnail"
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt={`${name}-img`}
        ></img>
        <div className="item-content">
          <h2 className="item-title">{name}</h2>
          <p className="item-description>">{description}</p>
        </div>
      </Link>
      <Favorite
        itemId={id}
        category={category}
        user={user}
        favoriteData={favoriteData}
        setFavoriteData={setFavoriteData}
      ></Favorite>
    </li>
  );
};

export default CharactersItem;
