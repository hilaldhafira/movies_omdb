import React, { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { getListDataHome } from "../../service/HomeService";
import { idImbdMovies, priceMovies } from "../../constant/moviesConstant";
import shoppingCartIcon from "../../assets/shopping-cart.png";
import Card from "../../components/Card/Card";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constant/routesConstant";

const Home = () => {
  let navigate = useNavigate();
  const queryClient = useQueryClient();
  let dataDummy = {
    Title: "Pulp Fiction",
    Year: "1994",
    Rated: "R",
    Released: "14 Oct 1994",
    Runtime: "154 min",
    Genre: "Crime, Drama",
    Director: "Quentin Tarantino",
    Writer: "Quentin Tarantino, Roger Avary",
    Actors: "John Travolta, Uma Thurman, Samuel L. Jackson",
    Plot: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    Language: "English, Spanish, French",
    Country: "United States",
    Awards: "Won 1 Oscar. 69 wins & 72 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "8.9/10",
      },
      {
        Source: "Rotten Tomatoes",
        Value: "92%",
      },
      {
        Source: "Metacritic",
        Value: "95/100",
      },
    ],
    Metascore: "95",
    imdbRating: "8.9",
    imdbVotes: "2,191,582",
    imdbID: "tt0110912",
    Type: "movie",
    DVD: "21 Apr 2016",
    BoxOffice: "$107,928,762",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
    Price: 20000,
  };

  const fetchDataMovies = async () => {
    let idIMDB = idImbdMovies;
    let allMoviesData = [];
    for (let index = 0; index < idIMDB.length; index++) {
      const element = idIMDB[index];
      const response = await getListDataHome({ params: { i: element } });
      if (response !== undefined) {
        allMoviesData.push({
          ...response,
          Price: priceMovies[index % priceMovies?.length],
        });
      }
    }
    queryClient.setQueryData("cachedData", allMoviesData);
  };

  useEffect(() => {
    fetchDataMovies();
  }, [queryClient]);

  const { data, isLoading, isError, isRefetchError } = useQuery("cachedData");

  const handleDetail = (value) => {
    console.log(value);
    navigate(ROUTES.DETAIL_MOVIE, {state:value});
  };

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <>
          <div className="flex gap-2">
            {data?.map((value, i) => {
              // if (i === 0) {

              // }
              return <Card goDetail={(id) => handleDetail(id)} data={value} />;
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
