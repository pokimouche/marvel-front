import React from "react";
import Category from "../components/Category";

const Comics = props => {
  const categoryAttributes = {
    id: "id",
    name: "title",
    description: "description",
    thumbnail: "thumbnail",
    querySearch: "titleStartsWith",
    itemTextLink: "Voir les personnages"
  };

  return (
    <Category
      category="comics"
      categoryAttributes={categoryAttributes}
      setFavoriteData={props.setFavoriteData}
      favoriteData={props.favoriteData}
      user={props.user}
    ></Category>
  );
};

export default Comics;
