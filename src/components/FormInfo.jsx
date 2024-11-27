import PropTypes from "prop-types";

const FormInfo = ({ title, description, onTitleChange, onDescriptionChange}) => (
  <div className="bg-customBlue p-6">
    <input
      type="text"
      placeholder="Add a title"
      value={title}
      onChange={onTitleChange}
      className="w-full bg-transparent border border-white/30 rounded p-2 mb-4 placeholder-black/70"
    />
    <textarea
      placeholder="Add a description"
      value={description}
      onChange={onDescriptionChange}
      className="w-full bg-transparent border border-white/30 rounded p-2 h-24 placeholder-black/70 resize-none"
    />
  </div>
);

FormInfo.propTypes = {
  title : PropTypes.string,
  description : PropTypes.string,
}

export default FormInfo


