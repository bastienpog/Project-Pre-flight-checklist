import { useState } from "react";
import BottomNav from "../components/BottomNav";
import Categories from "../components/Categories";
import Info from "../components/Info";
import TaskList from "../components/TaskList";
import { PopupProvider } from "../components/PopUp/PopUpProvider";

const Form = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    categories: ["category 1", "category 2"],
    tasks: ["Conduct Comprehensive Keyword Research and Optimize On-Page Content", "Improve Website Load Speed by Optimizing Media and Code"],
  });

  const handleTitleChange = (e) => {
    setFormData({ ...formData, title: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    setFormData({ ...formData, description: e.target.value });
  };

  const handleAddCategory = (category) => {
    setFormData({
      ...formData,
      categories: [...formData.categories, category],
    });
  };

  const handleRemoveCategory = (index) => {
    setFormData({
      ...formData,
      categories: formData.categories.filter((_, i) => i !== index),
    });
  };

  const handleUpdateTask = (index, newValue) => {
    const newTasks = [...formData.tasks];
    newTasks[index] = newValue;
    setFormData({ ...formData, tasks: newTasks });
  };

  const handleRemoveTask = (index) => {
    setFormData({
      ...formData,
      tasks: formData.tasks.filter((_, i) => i !== index),
    });
  };

  const handleAddTask = () => {
    setFormData({
      ...formData,
      tasks: [...formData.tasks, ""],
    });
  };

  const handleSave = () => {

  };

  return (
    <PopupProvider>
      <div className="min-h-screen bg-gray-50 pb-20 xl:ml-64">
        <div className="xl:bg-customBlue xl:fixed xl:left-0 xl:top-0 xl:w-64 xl:h-full">
          <Info
            editable={true}
            title={formData.title}
            description={formData.description}
            onTitleChange={handleTitleChange}
            onDescriptionChange={handleDescriptionChange}
          />

          <Categories editable={true} categories={formData.categories} onAddCategory={handleAddCategory} onRemoveCategory={handleRemoveCategory} />
        </div>
        <TaskList editable={true} tasks={formData.tasks} onUpdateTask={handleUpdateTask} onRemoveTask={handleRemoveTask} onAddTask={handleAddTask} />

        <BottomNav onSave={handleSave} form={true} />
      </div>
    </PopupProvider>
  );
};

export default Form;
