import PropTypes from "prop-types";

const Categories = ({ categories }) => (
  <div className="p-4 border-b">
    <h2 className="text-gray-600 mb-3">Categories :</h2>
    <div className="flex flex-wrap gap-2">
      {categories.map((category, index) => (
        <span 
          key={index}
          className="px-4 py-2 bg-customBlue text-white rounded-full text-sm"
        >
          {category}
        </span>
      ))}
    </div>
  </div>
);

Categories.propTypes = {
  categories : PropTypes.array
}

export default Categories