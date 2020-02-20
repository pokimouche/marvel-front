import React from "react";
import axios from "axios";

const Favorite = ({ user, category, itemId }) => {
  const addFavorite = async event => {
    const formData = new FormData();

    formData.append("favoriteId", itemId);
    formData.append("category", category);

    const response = await axios.post(
      `${process.env.REACT_APP_API_DOMAIN}/favorite/create`,
      formData,
      {
        headers: {
          Authorization: "Bearer " + user.token,
          "Content-Type": "multipart/form-data"
        }
      }
    );
  };

  const deleteFavorite = async event => {
    const formData = new FormData();

    formData.append("favoriteId", itemId);
    formData.append("category", category);

    const response = await axios.post(
      `${process.env.REACT_APP_API_DOMAIN}/favorite/delete`,
      formData,
      {
        headers: {
          Authorization: "Bearer " + user.token,
          "Content-Type": "multipart/form-data"
        }
      }
    );
  };

  return (
    <>
      {user !== undefined && user !== null ? (
        <div className="favorite-btn" onClick={addFavorite}>
          <img src="/favorite-true.svg" alt="favorite"></img>
        </div>
      ) : null}
    </>
  );
};

export default Favorite;
