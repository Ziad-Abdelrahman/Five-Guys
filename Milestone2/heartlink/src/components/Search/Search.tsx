import { BsSearchHeart } from "react-icons/bs";

interface SearchProps {
  handleSearch: (written: string) => void;
}

function Search({ handleSearch }: SearchProps) {
  return (
    <div className="searchBoxContent">
      <BsSearchHeart className="searchIcon" />

      <div className="input">
        <input
          placeholder="Type to search..."
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
    </div>
  );
}
export default Search;
