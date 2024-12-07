import { Plus, Search } from "lucide-react";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <div className="min-w-full flex flex-row mb-6">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={handleSearch}
          className="w-full px-4 py-2 border rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
      </div>
      <Link to={"/Form"}>
        <button className="bg-customBlue flex flex-row py-2 px-6 mx-8 max-xl:hidden ">
          <Plus size={32} className="text-white" />
          <span className="ml-2 text-lg font-semibold text-white">NEW</span>
        </button>
      </Link>
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func,
};
export default SearchBar;
