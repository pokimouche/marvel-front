import React from "react";
import Item from "./Item";
const ItemList = props => {
  return (
    <ul className="item-list">
      {props.items.map(element => {
        return (
          <Item
            key={element.id}
            itemAttributes={element}
            categoryAttributes={props.categoryAttributes}
            user={props.user}
            favoriteData={props.favoriteData}
            setFavoriteData={props.setFavoriteData}
            category={props.category}
          ></Item>
        );
      })}
    </ul>
  );
};

export default ItemList;
