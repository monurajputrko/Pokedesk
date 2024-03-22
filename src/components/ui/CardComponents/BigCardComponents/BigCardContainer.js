import { PropTypes } from "prop-types";

function BigCardContainer({ children, closeBigCard }) {
  return (
    <div
      onClick={closeBigCard}
      className="shadow-md rounded-3xl bg-grayTheme p-2 xl:p-8 text-center z-10 fixed top-20 left-1/2 transform -translate-x-1/2 overflow-auto"
    >
      {children}
    </div>
  );
}

BigCardContainer.propTypes = {
  children: PropTypes.node.isRequired,
  closeBigCard: PropTypes.func.isRequired,
};

export default BigCardContainer;
