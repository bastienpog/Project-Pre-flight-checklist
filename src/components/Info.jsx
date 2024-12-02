import PropTypes from "prop-types";

const Info = ({ title, description, tasksDone, totalTasks, status, editable = false, onTitleChange, onDescriptionChange }) => {
  if (editable) {
    return (
      <div>
        <div className="bg-customBlue p-6 xl:p-3">
          <input
            type="text"
            placeholder="Add a title"
            value={title}
            onChange={onTitleChange}
            className="w-full bg-transparent border border-white rounded p-2 mb-4 placeholder-white text-white"
          />
          <textarea
            placeholder="Add a description"
            value={description}
            onChange={onDescriptionChange}
            className="w-full bg-transparent border border-white rounded p-2 h-24 resize-none xl:h-40 placeholder-white text-white"
          />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex bg-customBlue text-white p-6 xl:p-2 xl:mb-6">
        <div className="flex-1">
          <h1 className="text-2xl font-semibold mb-3">{title}</h1>
          <p>{description}</p>
        </div>
      </div>
      <div className="bg-white p-4 border-b xl:bg-customBlue xl:p-2 xl:mb-4">
        <div className="mb-2 flex flex-row">
          <div className="xl:flex xl:flex-col">
            <span className="font-semibold xl:mb-2">Status : </span>
            {status}
          </div>
        </div>
        <div>
          <div className="mb-2 xl:flex xl:flex-col xl:mb-4">
            <span className="font-semibold xl:mb-2">Task done : </span>
            {tasksDone} task done / {totalTasks} task
          </div>
        </div>
      </div>
    </div>
  );
};

Info.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  tasksDone: PropTypes.number,
  totalTasks: PropTypes.number,
  status: PropTypes.string,
  editable: PropTypes.bool,
  onTitleChange: PropTypes.func,
  onDescriptionChange: PropTypes.func,
};

export default Info;
