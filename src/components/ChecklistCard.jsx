import { SquarePen, Trash2 } from "lucide-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import usePopup from "./PopUp/UsePopup";

const ChecklistCard = ({ title, categories, id, description }) => {
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
        <Link to={`/Checklist?id=${id}`}>
          <span className="text-sm  bg-gray-100 p-3 rounded">View task </span>
        </Link>
        <div className="flex gap-2">
          <Link to={`/form?id=${id}`}>
            <button className="text-customYellow mt-2">
              <SquarePen size={32} className="hover:text-customYellow" />
            </button>
          </Link>

          <button onClick={() => openPopup(id)} className="text-customRed">
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
  id: PropTypes.number,
};

export default ChecklistCard;
