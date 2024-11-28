import PropTypes from "prop-types";

const TaskList = ({ tasks }) => (
  <div className="p-4">
    {tasks.map((task, index) => (
      <div key={index} className="flex items-start gap-3 mb-3">
        <input type="checkbox" className="mt-2 h-7 w-7 rounded accent-customBlue" />
        <span className="flex-1 border rounded p-2">{task}</span>
      </div>
    ))}
  </div>
);

TaskList.propTypes = {
  tasks: PropTypes.array,
};

export default TaskList;
