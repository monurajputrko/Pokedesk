import { PropTypes } from "prop-types";

function Backdrop({ closeBigCard, children }) {
  return (
    <div
      className="fixed z-10 bg-black bg-opacity-75 w-full h-screen top-0 left-0"
      onClick={closeBigCard}
    >
      {children}
    </div>
  );
}

Backdrop.propTypes = {
  closeBigCard: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Backdrop;
