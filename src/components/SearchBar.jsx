import { Plus, Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="min-w-full flex flex-row mb-6">
      <div className="relative w-full">
        <input type="text" placeholder="Search by title" className="w-full px-4 py-2 border rounded-lg pr-10" />
        <Search className="absolute right-3 top-2.5" size={20} />
      </div>
      <button className="bg-customBlue flex flex-row py-2 px-6 mx-8 max-xl:hidden">
        <Plus size={32} className="text-white" />
        <span className="ml-2 text-lg font-semibold text-white">NEW</span>
      </button>
    </div>
  );
};

export default SearchBar;
