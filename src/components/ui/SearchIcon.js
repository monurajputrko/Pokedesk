import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchIcon({ onClick }) {
  return (
    <FontAwesomeIcon
      icon={faSearch}
      className="text-gray-800 mr-2"
      size="lg"
      onClick={onClick}
    />
  );
}

export default SearchIcon;
