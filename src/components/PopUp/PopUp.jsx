import { useContext } from "react";
import usePopup from "./UsePopup";
import axios from "axios";
import  PopupContext  from "./PopUpProvider";

const PopUp = () => {
  const { isOpen, closePopup, deleteId } = usePopup();
  const { fetchChecklists } = useContext(PopupContext);

  const handleDeleteRequest = async (deleteID) => {
    try {
      const response = await axios.get(
        `https://greenvelvet.alwaysdata.net/pfc/checklist/delete?id=${deleteID}`, 
        { headers: { token: "dc9d5fc5e28fdcb51ab9b3cd5be0545a9b35eda4" } } 
      );
      console.log(response.data);
      await fetchChecklists();
    } catch (error) {
      console.error("Erreur :", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-xl w-96 p-6 relative">
        <h2 className="text-2xl font-bold mb-4">Delete Confirmation</h2>
        <p className="text-gray-700 mb-6">
          Are you sure you want to delete this checklist? 
        </p>

        <div className="flex justify-end space-x-3">
          <button 
            onClick={closePopup} 
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded transition"
          >
            Cancel
          </button>
          <button 
            onClick={() => {
              handleDeleteRequest(deleteId);
              closePopup();
            }} 
            className="px-4 py-2 bg-customRed text-white rounded transition"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;