import { useState, useRef } from "react";
import PropTypes from "prop-types";
import SearchIcon from "./SearchIcon";
import miniLogo from "../../img/pokedex_mini_logo.png";

function SearchBar({ placeHolder, onSearch }) {
  const inputRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleIconClick = () => {
    inputRef.current.focus();
  };

  const handleSmallScreenClick = () => {
    onSearch("");
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSearch(searchTerm);
    }
  };

  return (
    <div className=" items-center justify-between w-96 p-2 rounded-3xl shadow-md bg-white focus-within:ring-2 focus-within:ring-yellowTheme focus-within:outline-none">
      <div className=" flex items-center justify-between w-full">
        <img
          src={miniLogo}
          alt="PokeDex Logo"
          className="w-9 h-9 hidden md:block "
          onClick={handleIconClick}
          draggable="false"
        />
        <img
          src={miniLogo}
          alt="PokeDex Logo"
          className="w-9 h-9 block md:hidden cursor-pointer"
          onClick={handleSmallScreenClick}
          draggable="false"
        />
        <input
          type="text"
          placeholder={placeHolder}
          className="mx-2 w-full outline-none bg-white text-purpleTheme"
          ref={inputRef}
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        />
        <SearchIcon onClick={handleSearch} />
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
