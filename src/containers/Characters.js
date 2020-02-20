import React, { useState, useEffect } from "react";
import axios from "axios";
import CharactersItemList from "../components/CharactersItemList";
import Loader from "../components/Loader";
import Paginator from "../components/Paginator";
import Search from "../components/Search";

const Characters = props => {
  const [data, setData] = useState({});
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [offset, setOffset] = useState(0);
  const limit = 100;

  const changeQuery = newOffset => {
    let queryValue = "?";

    queryValue += "limit=" + limit + "&" + "offset=" + newOffset;
    if (search !== "") {
      queryValue += "&nameStartsWith=" + search;
    }
    setIsLoading(true);
    setQuery(queryValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_DOMAIN}/characters${query}`
      );

      setData(response.data);
      console.log(response.data);
      setIsLoading(false);
      setOffset(parseInt(response.data.message.data.offset));
    };

    fetchData();
  }, [query]);

  return (
    <main className="container">
      <Search setSearch={setSearch} changeQuery={changeQuery}></Search>
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
          <CharactersItemList
            user={props.user}
            items={data.message.data.results}
          ></CharactersItemList>
        </>
      )}
    </main>
  );
};

export default Characters;
