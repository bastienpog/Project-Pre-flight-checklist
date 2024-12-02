import { Plus, X } from "lucide-react";
import PropTypes from "prop-types";

const TaskList = ({ tasks, editable = false, onUpdateTask, onRemoveTask, onAddTask }) => {
  return (
    <div className="p-4">
      {tasks.map((task, index) => (
        <div key={index} className="flex items-start gap-3 mb-3">
          <input type="checkbox" className="mt-2 h-7 w-7 rounded accent-customBlue" />
          {editable ? (
            <>
              <input
                type="text"
                value={task}
                onChange={(e) => onUpdateTask(index, e.target.value)}
                placeholder="Edit task"
                className="flex-1 border rounded p-2"
              />
              <button onClick={() => onRemoveTask(index)} className="text-customRed p-2 hover:bg-customRed hover:text-white rounded">
                <X size={20} />
              </button>
            </>
          ) : (
            <span className="flex-1 border rounded p-2">{task}</span>
          )}
        </div>
      ))}
      {editable && (
        <button onClick={onAddTask} className="w-full bg-customBlue text-white py-2 rounded mt-4 flex items-center justify-center gap-2">
          <Plus size={20} />
          Add new task
        </button>
      )}
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array,
  editable: PropTypes.bool,
  onUpdateTask: PropTypes.func,
  onRemoveTask: PropTypes.func,
  onAddTask: PropTypes.func,
};

export default TaskList;
