import { PropTypes } from "prop-types";
import { useQuery } from "@tanstack/react-query";
import Error from "../../../pages/errors/Error";
import Axios from "axios";
import BigCardContainer from "./BigCardComponents/BigCardContainer";
import BigCardNameId from "./BigCardComponents/BigCardNameId";
import BigCardCharacteristics from "./BigCardComponents/BigCardCharacteristics";
import BigCardTypes from "./BigCardComponents/BigCardTypes";
import BigCardButton from "./BigCardComponents/BigCardButton";

function BigCard({ closeBigCard, id, image }) {
  const { isLoading, isError, data } = useQuery(["pokemon", id], () =>
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => res.data)
  );

  if (isLoading) {
    return (
      <div
        onClick={closeBigCard}
        className="shadow-md rounded-md bg-grayTheme p-4 text-center min-w-min z-10 fixed top-20 left-1/2 transform -translate-x-1/2"
      >
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div
        onClick={closeBigCard}
        className="shadow-md rounded-md bg-grayTheme p-4 text-center min-w-min z-10 fixed top-20 left-1/2 transform -translate-x-1/2"
      >
        <Error></Error>
      </div>
    );
  }

  return (
    <BigCardContainer closeBigCard={closeBigCard}>
      <BigCardNameId id={id} name={data.species.name} />
      <BigCardCharacteristics
        abilities={data.abilities}
        height={data.height}
        image={image}
        weight={data.weight}
      />
      <BigCardTypes types={data.types} />
      <BigCardButton name={data.species.name} />
    </BigCardContainer>
  );
}

BigCard.propTypes = {
  closeBigCard: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default BigCard;
