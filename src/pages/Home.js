import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import PropTypes from "prop-types";

import BackgroundImage from "../components/ui/BackgroundImage";
import CardsContainer from "../components/ui/CardComponents/CardsContainer";
import SmallCard from "../components/ui/CardComponents/SmallCard";
import Loader from "../components/ui/Loader";
import Error from "./errors/Error";
import Pagination from "../components/ui/Pagination";

function Home({ searchTerm, openBigCard }) {
  const [page, setPage] = useState(1);

  const {
    data: pokemonData,
    isLoading,
    isError,
  } = useQuery(
    ["pokemon", searchTerm, page],
    () =>
      searchTerm
        ? Axios.get(
            `https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`
          ).then((res) => res.data)
        : Axios.get(
            `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${(page*20)}`
          ).then((res) => {
            const { results } = res.data;
            const requests = results.map((result) => Axios.get(result.url));
            return Promise.all(requests).then((pokemonResponses) =>
              pokemonResponses.map((pokemonRes) => pokemonRes.data)
            );
          }),
    {
      keepPreviousData: false,
    }
  );

  function hasHomeSprite(data) {
    if (data?.id >= 906 && data?.id <= 1008) {
      return false;
    } else {
      return true;
    }
  }

  function isPokemonAvailable(data) {
    if (data?.id >= 1009) {
      return false;
    } else {
      return true;
    }
  }

  const getHomeSprite = useMemo(
    () => (data) => data.sprites.other.home.front_default,
    []
  );

  const getArtworkSprite = useMemo(
    () => (data) => data.sprites.other["official-artwork"]["front_default"],
    []
  );

  // function handlePrevClick() {
  //   setPage((prevPage) => Math.max(prevPage - 1, 1));
  // }

  // function handleNextClick() {
  //   setPage((prevPage) => prevPage + 1);
  // }
  function handleLoadMoreClick(){
    setPage((prevPage)=>prevPage+1);
  }

  if (isLoading) {
    return (
      <BackgroundImage>
        <Loader></Loader>
      </BackgroundImage>
    );
  } else if (isError) {
    return (
      <BackgroundImage>
        <Error />
      </BackgroundImage>
    );
  } else if (searchTerm) {
    let imageValue;

    if (!isPokemonAvailable(pokemonData)) {
      return (
        <BackgroundImage>
          <Error />
        </BackgroundImage>
      );
    }

    if (hasHomeSprite(pokemonData)) {
      imageValue = getHomeSprite(pokemonData);
    } else {
      imageValue = getArtworkSprite(pokemonData);
    }

    return (
      <BackgroundImage>
        <CardsContainer>
          <SmallCard
            height={pokemonData.height}
            id={pokemonData.id}
            image={imageValue}
            key={pokemonData.id}
            name={pokemonData.species.name}
            weight={pokemonData.weight}
            openBigCard={openBigCard}
          />
        </CardsContainer>
      </BackgroundImage>
    );
  } else {
    return (
      <BackgroundImage>
        {/* <Pagination
          page={page}
          // handlePrevClick={handlePrevClick}
          // handleNextClick={handleNextClick}

        /> */}
        <CardsContainer>
          {Array.isArray(pokemonData) &&
            pokemonData.map((pokemon) => {
              let imageValue;

              if (!isPokemonAvailable(pokemon)) {
                return null;
              }

              if (hasHomeSprite(pokemon)) {
                imageValue = getHomeSprite(pokemon);
              } else {
                imageValue = getArtworkSprite(pokemon);
              }

              return (
                <SmallCard
                  height={pokemon.height}
                  id={pokemon.id}
                  image={imageValue}
                  key={pokemon.id}
                  name={pokemon.species.name}
                  weight={pokemon.weight}
                  openBigCard={openBigCard}
                />
              );
            })}
        </CardsContainer>
        <Pagination
          page={page}
          handleLoadMoreClick={handleLoadMoreClick}
        />
      </BackgroundImage>
    );
  }
}

Home.propTypes = {
  searchTerm: PropTypes.string,
  openBigCard: PropTypes.func,
};

export default Home;
