import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CreateChecklist from "../api/CreateChecklist";
import GetChecklist from "../api/GetChecklist";
import SaveChecklist from "../api/SaveChecklist";
import BottomNav from "../components/BottomNav";
import Info from "../components/Info";
import { PopupProvider } from "../components/PopUp/PopUpProvider";
import TaskList from "../components/TaskList";

const Form = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    categories: [],
    todo: [],
  });



  useEffect(() => {
    const fetchChecklist = async () => {
        if (id) {
          const checklist = await GetChecklist(id);
          setFormData(checklist);
        }
    };
    fetchChecklist();
  }, [id]);

  const handleTitleChange = (e) => {
    setFormData((prev) => ({ ...prev, title: e.target.value }));
  };

  const handleDescriptionChange = (e) => {
    setFormData((prev) => ({ ...prev, description: e.target.value }));
  };

  const handleAddCategory = (category) => {
    setFormData((prev) => ({
      ...prev,
      categories: [...prev.categories, category],
    }));
  };

  const handleRemoveCategory = (index) => {
    setFormData((prev) => ({
      ...prev,
      categories: prev.categories.filter((_, i) => i !== index),
    }));
  };

  const handleUpdateTask = (index, newValue) => {
    setFormData((prev) => {
      const newTodo = [...prev.todo];
      newTodo[index] = { ...newTodo[index], description: newValue };
      return { ...prev, todo: newTodo };
    });
  };

  const handleRemoveTask = (index) => {
    setFormData((prev) => ({
      ...prev,
      todo: prev.todo.filter((_, i) => i !== index),
    }));
  };

  const handleAddTask = () => {
    setFormData((prev) => ({
      ...prev,
      todo: [...prev.todo, { description: "", status: false }],
    }));
  };

  const handleSave = async (event) => {
    if (event) {
      event.preventDefault();
    }
    const payload = {
      ...formData, // Use entire formData object
      tasks: formData.todo || [],
    };

    if (id) {
      await SaveChecklist(id, payload);
    } else {
      await CreateChecklist(payload);
    }

    alert("Checklist saved successfully!");
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
          {/* 
          <Categories 
            editable={true} 
            categories={formData.categories} 
            onAddCategory={handleAddCategory} 
            onRemoveCategory={handleRemoveCategory} 
          /> */}
        </div>

        <TaskList editable={true} tasks={formData.todo} onUpdateTask={handleUpdateTask} onRemoveTask={handleRemoveTask} onAddTask={handleAddTask} />

        <BottomNav
          editable={true}
          onSave={handleSave} // Add this prop to BottomNav component
        />
      </div>
    </PopupProvider>
  );
};

export default Form;
