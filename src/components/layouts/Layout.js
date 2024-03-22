import MainNavigation from "./MainNavigation";
import PropTypes from "prop-types";

function Layout({ children, onSearch }) {
  return (
    <div>
      <MainNavigation onSearch={onSearch} />
      <main className="mx-auto my-12 w-90 max-w-40">{children}</main>
    </div>
  );
}

Layout.propTypes = {
  onSearch: PropTypes.func,
};

export default Layout;
