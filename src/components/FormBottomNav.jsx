import { ArrowLeft } from "lucide-react";

const FormBottomNav = ({ onBack, onSave }) => (
  <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-between items-center p-4">
    <button
      onClick={onBack}
      className="flex items-center gap-2 text-blue-700 px-4 py-2"
    >
      <ArrowLeft size={20} />
      Back home
    </button>
    <button
      onClick={onSave}
      className="bg-customBlue text-white px-8 py-2 rounded"
    >
      Save
    </button>
  </div>
);

export default FormBottomNav