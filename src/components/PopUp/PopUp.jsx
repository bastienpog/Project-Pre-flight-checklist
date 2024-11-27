import usePopup from "./UsePopup";

const PopUp = () => {
  const { isOpen, closePopup } = usePopup();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-xl w-96 p-6 relative">
        <h2 className="text-2xl font-bold mb-4">Delete Confirmation</h2>
        <p className="text-gray-700 mb-6">
          Are you sure you want to delete this checklist ? 
        </p>

        <div className="flex justify-end space-x-3">
          <button 
            onClick={closePopup} 
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded transition"
          >
            Cancel
          </button>
          <button 
            onClick={closePopup} 
            className="px-4 py-2 bg-customRed text-white rounded transition"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp
