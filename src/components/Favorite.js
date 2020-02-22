import React from "react";
import axios from "axios";

const Favorite = ({
  user,
  category,
  itemId,
  favoriteData,
  setFavoriteData
}) => {
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
    console.log("status", response.status);
    if (response.status === 200) {
      const newFavoriteData = { ...favoriteData };
      newFavoriteData[category].push(itemId);
      console.log(newFavoriteData);

      setFavoriteData(newFavoriteData);
    }
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
    if (response.status === 200) {
      const newFavoriteData = { ...favoriteData };

      newFavoriteData[category].splice(
        newFavoriteData[category].indexOf(itemId),
        1
      );
      console.log(response);
      setFavoriteData(newFavoriteData);
    }
  };
  // console.log(
  //   "test-index",
  //   favoriteData[category].indexOf(itemId),
  //   "itemId",
  //   itemId
  // );
  return (
    <>
      {user !== undefined && user !== null ? (
        <>
          {favoriteData[category].indexOf(itemId) !== -1 ? (
            <div className="favorite-btn" onClick={deleteFavorite}>
              <img src="/favorite-true.svg" alt="favorite"></img>
            </div>
          ) : (
            <div className="favorite-btn" onClick={addFavorite}>
              <img src="/favorite-false.svg" alt="favorite"></img>
            </div>
          )}
        </>
      ) : null}
    </>
  );
};

export default Favorite;
