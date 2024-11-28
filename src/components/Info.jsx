import PropTypes from "prop-types";

const Info = ({ title, description, tasksDone, totalTasks, status }) => (
  <div>
    <div className="flex bg-customBlue text-white p-6 xl:p-2 xl:mb-6">
      <div className="flex-1">
        <h1 className="text-2xl font-semibold mb-3">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
    <div className="bg-white p-4 border-b xl:bg-customBlue xl:p-2 xl:mb-4">
      <div className="mb-2 flex flex-row">
        <div className="xl:flex xl:flex-col"><span className="font-semibold xl:mb-2">Status : </span>{status}</div>
      </div>
      <div>
        <div className="mb-2 xl:flex xl:flex-col xl:mb-4">
        <span className="font-semibold xl:mb-2">Task done :</span>{tasksDone} task done / {totalTasks} task
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
