const Sidebar = () => {
  return (
    <div className="bg-customBlue fixed left-0 top-0 w-64 h-full p-4 text-white max-xl:hidden">
        <div className="mt-40 mb-4 ml-4 flex flex-col">
          <h2 className="text-2xl mb-4">Filter</h2>
          <label className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            Filter Option 1
          </label>
          <label className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            Filter Option 2
          </label>
          <label className="flex items-center mb-2">
            <input type="checkbox" className="mr-2 acc" />
            Filter Option 3
          </label>
        </div>
        <div className="flex flex-col ml-4 ">
          <h2 className="text-2xl mb-6">Sort</h2>
          <label className="flex items-center mb-2">
            <input type="radio" className="mr-2" />
            Sort Option 1
          </label>
          <label className="flex items-center mb-2">
            <input type="radio" className="mr-2" />
            Sort Option 2
          </label>
          <label className="flex items-center mb-2">
            <input type="radio" className="mr-2 acc" />
            Sort Option 3
          </label>
        </div>
    </div>
  );
};

export default Sidebar;
