import { PropTypes } from "prop-types";
import styles from "./BigCardTypes.module.css";

function BigCardTypes({ types }) {
  return (
    <div className="mt-0 xl:mt-4">
      <p className="text-lg xl:text-2xl text-purpleTheme justify-center xl:text-start mb-2">
        Type
      </p>
      <div className="flex space-x-2 justify-center xl:justify-start">
        {types.map((type, index) => (
          <div
            key={index}
            className={`rounded-3xl text-sm xl:text-md p-2 ${
              styles[`bg-${type.type.name}`]
            }`}
            style={{ width: "120px", height: "40px" }}
          >
            <p className="capitalize">{type.type.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

BigCardTypes.propTypes = {
  types: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BigCardTypes;
