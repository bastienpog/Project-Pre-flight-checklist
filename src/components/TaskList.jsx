import PropTypes from "prop-types";

const TaskList = ({ tasks }) => (
  <div className="p-4">
    {tasks.map((task, index) => (
      <div key={index} className="flex items-start gap-3 mb-3">
        <input type="checkbox" className="mt-1 h-5 w-5 rounded" />
        <span>{task}</span>
      </div>
    ))}
  </div>
);

TaskList.propTypes = {
  tasks: PropTypes.array,
};

export default TaskList;
