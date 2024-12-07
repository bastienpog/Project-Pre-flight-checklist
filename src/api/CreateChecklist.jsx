import axios from "axios";

const CreateChecklist = async (formData) => {
  const todo = (formData.tasks || []).map((task) => ({
    description: typeof task === 'object' ? task.description : task,
  }));
  
    const response = await axios.post(
      "https://greenvelvet.alwaysdata.net/pfc/checklist/add", 
      {
        title: formData.title,
        description: formData.description,
        todo: todo,
      }, 
      { headers: { Token: "dc9d5fc5e28fdcb51ab9b3cd5be0545a9b35eda4" } } 
    );
    return response.data;

};

export default CreateChecklist