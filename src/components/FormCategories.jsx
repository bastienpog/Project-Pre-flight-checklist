import { useState } from "react";
import PropTypes from "prop-types";
import {Plus, X } from 'lucide-react';
const FormCategories = ({ categories, onAddCategory, onRemoveCategory }) => {
  const [showInput, setShowInput] = useState(false);
  const [newCategory, setNewCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newCategory.trim()) {
      onAddCategory(newCategory.trim());
      setNewCategory('');
      setShowInput(false);
    }
  };

  return (
    <div className="p-4 bg-white">
      <h2 className="mb-3">Categories :</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        {categories.map((category, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-customBlue text-white rounded-full text-sm flex items-center gap-2"
          >
            {category}
            <button
              onClick={() => onRemoveCategory(index)}
              className="hover:bg-customRed rounded-full p-1"
            >
              <X size={14} />
            </button>
          </span>
        ))}
      </div>

      {showInput ? (
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="flex gap-2">
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
              className="bg-customBlue text-white px-4 rounded hover:bg-blue-800"
            >
              Add
            </button>
            <button
              type="button"
              onClick={() => {
                setShowInput(false);
                setNewCategory('');
              }}
              className="border border-gray-300 px-4 rounded hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <button
          onClick={() => setShowInput(true)}
          className="w-full bg-customBlue text-white py-2 rounded flex items-center justify-center gap-2 hover:bg-blue-800"
        >
          <Plus size={20} />
          New category
        </button>
      )}
    </div>
  );
};

FormCategories.propTypes = {
  categories : PropTypes.array
}

export default FormCategories