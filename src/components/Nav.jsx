import { Filter, Plus, SortDesc, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = ({ categories, selectedCategories, onCategoryToggle, onClearFilters }) => {
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-customBlue border-t flex justify-between items-center px-12 py-3 xl:hidden z-50">
        <button
          onClick={() => {
            setIsFilterMenuOpen(!isFilterMenuOpen);
            setIsSortMenuOpen(false);
          }}
          className="flex flex-col items-center text-white"
        >
          <Filter size={24} />
          <span className="text-sm mt-1">Filter</span>
        </button>

        <Link to={"/Form"}>
          <button className="bg-white p-4 rounded-full flex flex-row items-center">
            <Plus size={32} className="text-customBlue" />
            <span className="ml-2 text-lg font-semibold text-customBlue">NEW</span>
          </button>
        </Link>

        <button
          onClick={() => {
            setIsSortMenuOpen(!isSortMenuOpen);
            setIsFilterMenuOpen(false);
          }}
          className="flex flex-col items-center text-white"
        >
          <SortDesc size={24} />
          <span className="text-sm mt-1">Sort</span>
        </button>
      </div>

      {isFilterMenuOpen && (
        <div className="fixed bottom-16 left-4 right-4 bg-customBlue text-white rounded-lg shadow-lg p-4 z-50 max-h-[50vh] flex flex-col">
          <div className="flex justify-between items-center mb-4 sticky top-0 bg-customBlue text-white z-10">
            <h3 className="text-lg font-semibold">Filter Options</h3>
            <button className="p-2 bg-customRed" onClick={() => setIsFilterMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col gap-4">
            {categories.map((category) => (
              <label key={category} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => onCategoryToggle(category)}
                  className="h-5 w-5"
                />
                <span className="text-white">{category}</span>
              </label>
            ))}
            {selectedCategories.length > 0 && (
            <button onClick={onClearFilters} className="text-sm bg-customRed text-white p-2 rounded">
              Clear All
            </button>)}
          </div>
        </div>
      )}

      {isSortMenuOpen && (
        <div className="fixed bottom-16 left-4 right-4 bg-customBlue text-white rounded-lg shadow-lg p-4 z-50 max-h-[50vh] flex flex-col">
          <div className="flex justify-between items-center mb-4 sticky top-0 bg-customBlue text-white z-10">
            <h3 className="text-lg font-semibold">Sort By</h3>
            <button onClick={() => setIsSortMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <div className="overflow-y-auto flex-grow space-y-3">
            <label className="flex items-center">
              <input type="radio" name="sort" className="mr-2" />
              Sort Option 1
            </label>
            <label className="flex items-center">
              <input type="radio" name="sort" className="mr-2" />
              Sort Option 2
            </label>
            <label className="flex items-center">
              <input type="radio" name="sort" className="mr-2" />
              Sort Option 3
            </label>
          </div>
          <button className="w-full bg-white text-customBlue font-semibold py-2 rounded-lg mt-4" onClick={() => setIsSortMenuOpen(false)}>
            Apply Sort
          </button>
        </div>
      )}
    </>
  );
};

export default Nav;
