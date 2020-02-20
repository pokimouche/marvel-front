import React from "react";
import { Link } from "react-router-dom";
import Favorite from "./Favorite";

const CharactersItem = ({ id, name, description, thumbnail, user }) => {
  const category = "characters";
  return (
    <li className="item-wrapper">
      <Link className="item-link" to={`/character/${id}`}>
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
      <Favorite itemId={id} category={category} user={user}></Favorite>
    </li>
  );
};

export default CharactersItem;
