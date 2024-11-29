import { useState } from "react";
import PropTypes from "prop-types";
import { Plus, X } from 'lucide-react';

const Categories = ({ 
  categories, 
  editable = false, 
  onAddCategory, 
  onRemoveCategory 
}) => {
  const [showInput, setShowInput] = useState(false);
  const [newCategory, setNewCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newCategory.trim() && onAddCategory) {
      onAddCategory(newCategory.trim());
      setNewCategory('');
      setShowInput(false);
    }
  };

  return (
    <div className="p-4 border-b xl:border-customBlue xl:p-2 bg-white xl:bg-customBlue">
      <h2 className="font-semibold mb-3 xl:text-white">Categories :</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        {categories.map((category, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-customBlue text-white rounded-full text-sm flex items-center gap-2 xl:bg-white xl:text-customBlue"
          >
            {category}
            {editable && onRemoveCategory && (
              <button
                onClick={() => onRemoveCategory(index)}
                className="hover:bg-customRed rounded-full p-1"
              >
                <X size={14} />
              </button>
            )}
          </span>
        ))}
      </div>

      {editable && (
        <>
          {showInput ? (
            <form onSubmit={handleSubmit} className="mb-4">
              <div className="flex xl:flex-col gap-2">
                <input
                  type="text"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  placeholder="Enter category name"
                  className="flex-1 border rounded p-2"
                  autoFocus
                />
                <button
                  type="submit"
                  className="bg-customBlue text-white px-4 rounded xl:bg-white xl:text-customBlue"
                >
                  Add
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowInput(false);
                    setNewCategory('');
                  }}
                  className="border px-4 rounded xl:bg-white xl:text-customBlue"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <button
              onClick={() => setShowInput(true)}
              className="w-full bg-customBlue text-white py-2 rounded flex items-center justify-center gap-2 xl:bg-white xl:text-customBlue"
            >
              <Plus size={20} />
              New category
            </button>
          )}
        </>
      )}
    </div>
  );
};

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  editable: PropTypes.bool,
  onAddCategory: PropTypes.func,
  onRemoveCategory: PropTypes.func
};

export default Categories;