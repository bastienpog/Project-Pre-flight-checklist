import { useState } from "react";
import FormBottomNav from "../components/FormBottomNav";
import FormTaskList from "../components/FormTaskList"
import FormInfo from "../components/FormInfo"
import FormCategories from "../components/FormCategories"



const Form = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    categories: ['category 1', 'category 2'],
    tasks: [
      'Conduct Comprehensive Keyword Research and Optimize On-Page Content',
      'Improve Website Load Speed by Optimizing Media and Code'
    ]
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
      categories: [...formData.categories, category]
    });
  };

  const handleRemoveCategory = (index) => {
    setFormData({
      ...formData,
      categories: formData.categories.filter((_, i) => i !== index)
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
      tasks: formData.tasks.filter((_, i) => i !== index)
    });
  };

  const handleAddTask = () => {
    setFormData({
      ...formData,
      tasks: [...formData.tasks, '']
    });
  };

  const handleSave = () => {
    console.log('Saving form data:', formData);
    // Add your save logic here
  };

  const handleBack = () => {
    console.log('Navigating back');
    // Add your navigation logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <FormInfo
        title={formData.title}
        description={formData.description}
        onTitleChange={handleTitleChange}
        onDescriptionChange={handleDescriptionChange}
      />
      
      <FormCategories
        categories={formData.categories}
        onAddCategory={handleAddCategory}
        onRemoveCategory={handleRemoveCategory}
      />
      
      <FormTaskList
        tasks={formData.tasks}
        onUpdateTask={handleUpdateTask}
        onRemoveTask={handleRemoveTask}
        onAddTask={handleAddTask}
      />
      
      <FormBottomNav
        onBack={handleBack}
        onSave={handleSave}
      />
    </div>
  );
};

export default Form;