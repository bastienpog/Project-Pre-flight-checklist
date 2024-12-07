import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import GetChecklist from "../api/GetChecklist";
import BottomNav from "../components/BottomNav";
import Categories from "../components/Categories";
import Info from "../components/Info";
import PopUp from "../components/PopUp/PopUp";
import { PopupProvider } from "../components/PopUp/PopUpProvider";
import TaskList from "../components/TaskList";

const Checklist = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchChecklists = async () => {
        if (id) {
          const checklist = await GetChecklist(id);
          setData(checklist);
        }

    };
    fetchChecklists();
  }, [id]);

  function transformChecklist(item) {
    if (!item) {
      return null;
    }

    const description = item.description || "";

    const categories = (description.match(/~~([^~]+)~~/g) || []).map((category) => category.replace(/~~/g, ""));

    const cleanDescription = description.replace(/~~[^~]+~~/g, "").trim();

    return {
      ...item,
      description: cleanDescription,
      categories,
    };
  }

  const transformData = transformChecklist(data);

  if (!data) {
    return <div>No checklist found</div>;
  }

  return (
    <PopupProvider>
      <div className="min-h-screen pb-20 xl:ml-64">
        <PopUp />
        <div className="xl:bg-customBlue xl:fixed xl:left-0 xl:top-0 xl:w-64 xl:h-full xl:text-white">
          <Info title={transformData.title} description={transformData.description} />
          <Categories categories={transformData.categories} />
        </div>

        <TaskList tasks={data.todo} />

        <BottomNav id={id} />
      </div>
    </PopupProvider>
  );
};

export default Checklist;
