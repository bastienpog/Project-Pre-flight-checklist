import PropTypes from "prop-types";

const Info = ({ title, description, tasksDone, totalTasks, status }) => (
  <div>
    <div className="flex bg-customBlue text-white p-6">
      <div className="flex-1">
        <h1 className="text-2xl font-semibold mb-3">{title}</h1>
        <p className="text-m">{description}</p>
      </div>
    </div>
    <div className="bg-white p-4 border-b">
      <div className="mb-2 flex flex-row">
        <div>Status : {status}</div>
        <div className="w-4 h-4 rounded-full bg-customYellow ml-4 mt-1"></div>
      </div>
      <div>
        <div className="mb-2">
          Task done : {tasksDone} task done / {totalTasks} task
        </div>
      </div>
    </div>
  </div>
);

Info.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  tasksDone: PropTypes.number,
  totalTasks: PropTypes.number,
  status: PropTypes.string,
};

export default Info;
