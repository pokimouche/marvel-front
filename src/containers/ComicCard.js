import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import ItemList from "../components/ItemList";

const ComicCard = props => {
  const categoryAttributes = {
    id: "id",
    name: "title",
    description: "description",
    thumbnail: "thumbnail",
    querySearch: "titleStartsWith",
    itemTextLink: "Voir les personnages"
  };
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_DOMAIN}/comics/${id}/characters`
      );

      setData(response.data);
      console.log(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <main className="container">
      {isLoading === true ? (
        <Loader></Loader>
      ) : (
        <ItemList
          categoryAttributes={categoryAttributes}
          favoriteData={props.favoriteData}
          setFavoriteData={props.setFavoriteData}
          user={props.user}
          items={data.message.data.results}
          category="characters"
        ></ItemList>
      )}
    </main>
  );
};

export default ComicCard;
