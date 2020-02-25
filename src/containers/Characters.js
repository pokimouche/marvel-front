import React from "react";
import Category from "../components/Category";

const Characters = props => {
  const categoryAttributes = {
    id: "id",
    name: "name",
    description: "description",
    thumbnail: "thumbnail",
    querySearch: "nameStartsWith",
    itemTextLink: "Voir les comics"
  };

  return (
    <Category
      category="characters"
      categoryAttributes={categoryAttributes}
      setFavoriteData={props.setFavoriteData}
      favoriteData={props.favoriteData}
      user={props.user}
    ></Category>
  );
};

export default Characters;
