import { X } from 'lucide-react';
import PropTypes from "prop-types"

const FormTask = ({ task, onTaskChange, onRemoveTask, isNew = false }) => (
  <div className="flex items-start gap-3 mb-3">
    <input type="checkbox" className="mt-2 h-8 w-8 accent-customBlue" />
    <input
      type="text"
      value={task}
      onChange={onTaskChange}
      placeholder={isNew ? "Add a text" : ""}
      className="flex-1 border rounded p-2"
    />
    <button
      onClick={onRemoveTask}
      className="text-customRed p-2 hover:bg-customRed hover:text-white rounded"
    >
      <X size={20} />
    </button>
  </div>
  )

  FormTask.propTypes = {
    task : PropTypes.string
  }


  export default FormTask