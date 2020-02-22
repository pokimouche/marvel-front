import React from "react";
import ComicsItem from "./ComicsItem";

const ComicsItemList = props => {
  return (
    <ul className="item-list">
      {props.items.map(element => {
        return (
          <ComicsItem
            key={element.id}
            {...element}
            user={props.user}
            favoriteData={props.favoriteData}
            setFavoriteData={props.setFavoriteData}
          ></ComicsItem>
        );
      })}
    </ul>
  );
};

export default ComicsItemList;
