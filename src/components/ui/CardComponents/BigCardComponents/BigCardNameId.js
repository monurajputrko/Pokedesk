import { PropTypes } from "prop-types";

function BigCardNameId({ name, id }) {
  return (
    <div className=" flex items-center justify-center">
      <h1 className="text-3xl capitalize font-bold text-gray-800 xl:text-5xl">
        {name}
      </h1>
      {/* <h1 className="text-xl capitalize ml-4 text-gray-800 xl:text-3xl">
        #{id.toString().padStart(4, "0")}
      </h1> */}
    </div>
  );
}

BigCardNameId.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default BigCardNameId;
