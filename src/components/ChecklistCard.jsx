import { SquarePen, Trash2 } from "lucide-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import usePopup from "./PopUp/UsePopup";


const ChecklistCard = ({ title, categories, description }) => {
  const { openPopup } = usePopup();
  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm">
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <div className="flex gap-2 mb-3">
        {categories.map((category, index) => (
          <span key={index} className="px-2 py-1 bg-customBlue text-white text-sm rounded">
            {category}
          </span>
        ))}
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">View task (4)</span>
        <div className="flex gap-2">
          <Link to={"/form"}>
            <button className="text-customYellow mt-2">
              <SquarePen size={32} className="hover:text-customYellow" />
            </button>
          </Link>

          <button onClick={openPopup} className="text-customRed">
            <Trash2 size={32} className="hover:text-customRed" />
          </button>
        </div>
      </div>
    </div>
  );
};

ChecklistCard.propTypes = {
  title: PropTypes.string,
  categories: PropTypes.array,
  description: PropTypes.string,
};

export default ChecklistCard;
