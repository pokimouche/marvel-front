import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemList from "./ItemList";
import Loader from "./Loader";
import Paginator from "./Paginator";
import Search from "./Search";

const Category = props => {
  const [data, setData] = useState({});
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [offset, setOffset] = useState(0);
  const limit = 100;

  const changeQuery = newOffset => {
    let queryValue = "?";
    queryValue += "limit=" + limit + "&offset=" + newOffset;
    if (search !== "") {
      queryValue += "&" + props.categoryAttributes.querySearch + "=" + search;
    }
    setIsLoading(true);
    setQuery(queryValue);
  };
  const dataUrl = `${process.env.REACT_APP_API_DOMAIN}/${props.category}${query}`;
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(dataUrl);
      setData(response.data);
      setIsLoading(false);
      setOffset(parseInt(response.data.message.data.offset));
    };

    fetchData();
  }, [dataUrl]);

  return (
    <main className="container">
      <Search
        setSearch={setSearch}
        search={search}
        changeQuery={changeQuery}
      ></Search>
      {isLoading === true ? (
        <Loader></Loader>
      ) : (
        <>
          <Paginator
            totalItem={data.message.data.total}
            limit={limit}
            offset={offset}
            search={search}
            setQuery={setQuery}
            changeQuery={changeQuery}
          ></Paginator>
          <ItemList
            categoryAttributes={props.categoryAttributes}
            favoriteData={props.favoriteData}
            setFavoriteData={props.setFavoriteData}
            user={props.user}
            items={data.message.data.results}
            category={props.category}
          ></ItemList>
        </>
      )}
    </main>
  );
};

export default Category;
