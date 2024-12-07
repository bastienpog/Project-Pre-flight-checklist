import axios from "axios";

const SaveChecklist = async (id, formData) => {

  const todo = (formData.tasks || formData.todo || []).map((task) => ({
    title:"",
    description: typeof task === 'object' ? task.description : task,
    statut:1
  }));
    const response = await axios.post(
      `https://greenvelvet.alwaysdata.net/pfc/checklist/update`, 
      {
        id:id,
        title: formData.title,
        description: formData.description,
        todo: todo,
      }, 
      { headers: { Token: "dc9d5fc5e28fdcb51ab9b3cd5be0545a9b35eda4" } } 
    );
    return response.data;
  
};

export default SaveChecklist