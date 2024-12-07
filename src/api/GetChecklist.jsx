import axios from "axios";

const GetChecklist = async (id) => {
  try {
    const response = await axios.get(
    `https://greenvelvet.alwaysdata.net/pfc/checklist?id=${id}`, 
      { headers: {token: "dc9d5fc5e28fdcb51ab9b3cd5be0545a9b35eda4" } } 
    );
    return response.data
  } catch (error) {
    console.error("Erreur :", error);
  }
};

export default GetChecklist