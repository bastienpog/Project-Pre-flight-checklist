import { ArrowLeft, SquarePen, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import usePopup from "./PopUp/UsePopup";

const BottomNav = ({ onSave, form }) => {
  const { openPopup } = usePopup();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-between items-center p-4 xl:left-64">
      <Link to={"/"}>
        <button className="flex items-center gap-2 text-white px-4 py-2 bg-customBlue">
          <ArrowLeft size={24} />
          <span>Back home</span>
        </button>
      </Link>
      <div className="flex gap-4">
        {!form && (
          <>
            <Link to={"/Form"}>
              <button className="text-yellow-500">
                <SquarePen size={32} className="hover:text-customYellow mt-2" />
              </button>
            </Link>
            <button onClick={openPopup} className="text-red-500">
              <Trash2 size={32} className="hover:text-customRed" />
            </button>
          </>
        )}
        {form && (
          <div>
            <Link to={"/"}>
              <button onClick={onSave} className="bg-customBlue text-white px-8 py-2 rounded">
                Save
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default BottomNav;
