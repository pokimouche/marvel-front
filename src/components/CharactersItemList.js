import React from "react";
import CharactersItem from "./CharactersItem";

const CharactersItemList = props => {
  return (
    <ul className="item-list">
      {props.items.map(element => {
        return (
          <CharactersItem
            key={element.id}
            {...element}
            user={props.user}
            favoriteData={props.favoriteData}
            setFavoriteData={props.setFavoriteData}
          ></CharactersItem>
        );
      })}
    </ul>
  );
};

export default CharactersItemList;
