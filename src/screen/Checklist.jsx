import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import GetChecklist from "../api/GetChecklist";
import BottomNav from "../components/BottomNav";
import Info from "../components/Info";
import PopUp from "../components/PopUp/PopUp";
import { PopupProvider } from "../components/PopUp/PopUpProvider";
import TaskList from "../components/TaskList";

const Checklist = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChecklists = async () => {
      setIsLoading(true);
      try {
        if (id) {
          const checklist = await GetChecklist(id);
          setData(checklist);
          setError(null);
        }
      } catch (error) {
        console.error("Error fetching checklists:", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchChecklists();
  }, [id]);

  // Render loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Render error state
  if (error) {
    return <div>Error loading checklist: {error.message}</div>;
  }

  // Render only if data exists
  if (!data) {
    return <div>No checklist found</div>;
  }

  return (
    <PopupProvider>
      <div className="min-h-screen pb-20 xl:ml-64">
        <PopUp />
        <div className="xl:bg-customBlue xl:fixed xl:left-0 xl:top-0 xl:w-64 xl:h-full xl:text-white">
          <Info
            title={data.title}
            description={data.description}
          />
        </div>

        <TaskList 
          tasks={data.todo} 
        />

        <BottomNav id={id}/>
      </div>
    </PopupProvider>
  );
};

export default Checklist;
