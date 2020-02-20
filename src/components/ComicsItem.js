import React from "react";
import { Link } from "react-router-dom";
import Favorite from "./Favorite";

const ComicsItem = ({ id, title, description, thumbnail, user }) => {
  const category = "comics";
  console.log(title);
  return (
    <li className="item-wrapper">
      <Link className="item-link" to={`/comics/${id}`}>
        <img
          className="small-thumbnail"
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt={`${title}-img`}
        ></img>
        <div className="item-content">
          <h2 className="item-title">{title}</h2>
          <p className="item-description>">{description}</p>
        </div>
      </Link>
      <Favorite itemId={id} category={category} user={user}></Favorite>
    </li>
  );
};

export default ComicsItem;
