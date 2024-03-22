import { PropTypes } from "prop-types";

function BigCardButton({ name }) {
  return (
    <div className="h-min mt-2 xl:mt-8 ">
      <button
        onClick={() =>
          window.open(
            `https://bulbapedia.bulbagarden.net/wiki/${name}_(Pok%C3%A9mon)`,
            "_blank"
          )
        }
        className="capitalize rounded-3xl p-2 text-sm xl:text-md bg-purpleTheme text-yellowTheme shadow-2xl cursor-pointer hover:bg-purple-900 xl:w-full"
        style={{ width: "200px", height: "50px" }}
      >
        Visit {name}'s Wiki!
      </button>
    </div>
  );
}

BigCardButton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default BigCardButton;
