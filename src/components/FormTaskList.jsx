import FormTask from "./FormTask"
import { Plus } from "lucide-react";
import PropTypes from "prop-types";
const FormTaskList = ({ tasks, onUpdateTask, onRemoveTask, onAddTask }) => (
  <div className="p-4">
    {tasks.map((task, index) => (
      <FormTask
        key={index}
        task={task}
        onTaskChange={(e) => onUpdateTask(index, e.target.value)}
        onRemoveTask={() => onRemoveTask(index)}
      />
    ))}
    <button
      onClick={onAddTask}
      className="w-full bg-customBlue text-white py-2 rounded mt-4 flex items-center justify-center gap-2 "
    >
      <Plus size={20} />
      Add new task
    </button>
  </div>
);

FormTaskList.propTypes = {
  tasks : PropTypes.array
}

export default FormTaskList