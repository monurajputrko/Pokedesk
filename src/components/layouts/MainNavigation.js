import mainLogo from "../../img/pokedexpnglogo.png";
import SearchBar from "../ui/SearchBar";
import PropTypes from "prop-types";

function MainNavigation({ onSearch }) {
  const handleClick = () => {
    onSearch("");
  };

  return (
    <header className="w-full h-20 flex items-center justify-center bg-purpleTheme px-10 rounded-bl-3xl rounded-br-3xl">
      <div className="container  mx-0">
        <div className="hidden items-center justify-between mx-0  md:flex md:w-full">
          <div className="flex justify-start w-1/2 ">
            <img
              src={mainLogo}
              alt="PokeDex Logo"
              draggable="false"
              className="w-150 h-40 cursor-pointer"
              onClick={handleClick}
            />
          </div>
          <div className="flex justify-end w-1/2  ">
            <SearchBar
              placeHolder="Search Pokemon by name or ID"
              onSearch={onSearch}
            />
          </div>
        </div>

        <div className="flex items-center justify-center mx-auto w-full md:hidden ">
          <div className="flex justify-center w-full ">
            <SearchBar placeHolder="Search Pokemon" onSearch={onSearch} />
          </div>
        </div>
      </div>
    </header>
  );
}

MainNavigation.propTypes = {
  onSearch: PropTypes.func,
};

export default MainNavigation;
