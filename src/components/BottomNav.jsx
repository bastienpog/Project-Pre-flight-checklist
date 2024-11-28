import { ArrowLeft, Star, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import usePopup from "./PopUp/UsePopup";

const BottomNav = (onBack) => {
  const { openPopup } = usePopup();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-between items-center p-4 xl:left-64">
      <Link to={"/"}>
        <button onClick={onBack} className="flex items-center gap-2 text-white px-4 py-2 bg-customBlue">
          <ArrowLeft size={24} />
          <span>Back home</span>
        </button>
      </Link>
      <div className="flex gap-4">
        <Link to={"/Form"}>
          <button className="text-yellow-500">
            <Star size={32} className="hover:text-customYellow" />
          </button>
        </Link>
        <button onClick={openPopup} className="text-red-500">
          <Trash2 size={32} className="hover:text-customRed" />
        </button>
      </div>
    </div>
  );
};

export default BottomNav;
