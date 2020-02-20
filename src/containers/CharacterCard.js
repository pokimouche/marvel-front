import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
const CharacterCard = props => {
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_DOMAIN}/characters/${id}`
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
        <>
          {data.message.data.results.map(element => {
            return (
              <section>
                <h1>{element.name}</h1>
                <ul>
                  {element.comics.items.map(comicsElement => {
                    return (
                      <li>
                        <h2>{comicsElement.name}</h2>
                      </li>
                    );
                  })}
                </ul>
              </section>
            );
          })}
        </>
      )}
    </main>
  );
};

export default CharacterCard;
