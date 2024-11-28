import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const FormBottomNav = ({ onBack, onSave }) => (
  <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-between items-center p-4 xl:left-64">
    <Link to={"/"}>
      <button onClick={onBack} className="flex items-center gap-2 text-customBlue border px-4 py-2">
        <ArrowLeft size={20} />
        Back home
      </button>
    </Link>
    <Link to={"/"}>
      <button onClick={onSave} className="bg-customBlue text-white px-8 py-2 rounded">
        Save
      </button>
    </Link>
  </div>
);

export default FormBottomNav;
