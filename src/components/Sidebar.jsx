const Sidebar = ({ categories, selectedCategories, onCategoryToggle, onClearFilters }) => {
  return (
    <div className="bg-customBlue fixed left-0 top-0 w-64 h-full p-4 text-white max-xl:hidden">
      <div className="mt-28">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Filter :</h2>
          {selectedCategories.length > 0 && (
            <button onClick={onClearFilters} className="text-sm bg-customRed text-white p-2 rounded">
              Clear All
            </button>
          )}
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
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
