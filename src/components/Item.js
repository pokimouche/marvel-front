import React from "react";
import { Link } from "react-router-dom";
import Favorite from "./Favorite";

const Item = ({
  itemAttributes,
  categoryAttributes,
  category,
  user,
  favoriteData,
  setFavoriteData
}) => {
  return (
    <li className="item-wrapper">
      <div className="item-content-wrapper">
        <img
          className="small-thumbnail"
          src={`${itemAttributes[categoryAttributes.thumbnail].path}.${
            itemAttributes[categoryAttributes.thumbnail].extension
          }`}
          alt={`${itemAttributes[categoryAttributes.name]}-img`}
        ></img>
        <div className="item-content">
          <h2 className="item-title">
            {itemAttributes[categoryAttributes.name]}
          </h2>
          <p className="item-description">
            {itemAttributes[categoryAttributes.description]}
          </p>
        </div>
        <Link
          className="item-link"
          to={`/${category}/${itemAttributes[categoryAttributes.id]}`}
        >
          {categoryAttributes.itemTextLink}
        </Link>

        <Favorite
          itemId={itemAttributes[categoryAttributes.id]}
          category={category}
          user={user}
          favoriteData={favoriteData}
          setFavoriteData={setFavoriteData}
        ></Favorite>
      </div>
    </li>
  );
};

export default Item;
