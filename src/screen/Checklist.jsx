import BottomNav from "../components/BottomNav";
import Categories from "../components/Categories";
import Info from "../components/Info";
import PopUp from "../components/PopUp/PopUp";
import { PopupProvider } from "../components/PopUp/PopUpProvider";
import TaskList from "../components/TaskList";

const Checklist = () => {
  const noteData = {
    title: "Note 1",
    description:
      "This SEO checklist is a guide designed to help you optimize your website and improve its visibility. By following this step-by-step checklist, you can ensure that your site is fully optimized.",
    status: "In progress",
    tasksDone: 10,
    totalTasks: 25,
    categories: ["category 1", "category 2", "category 3"],
    tasks: [
      "Conduct Comprehensive Keyword Research and Optimize On-Page Content",
      "Improve Website Load Speed by Optimizing Media and Code",
      "Ensure Mobile Optimization with a Responsive, User-Friendly Design",
      "Refine Internal Linking Strategy to Enhance Site Navigation and SEO Value",
      "Develop a Strategy for Acquiring High-Quality Backlinks",
    ],
  };

  return (
    <PopupProvider>
      <div className="min-h-screen pb-20 xl:ml-64">
        <PopUp />
        <div className="xl:bg-customBlue xl:fixed xl:left-0 xl:top-0 xl:w-64 xl:h-full xl:text-white">
          <Info
            title={noteData.title}
            description={noteData.description}
            status={noteData.status}
            tasksDone={noteData.tasksDone}
            totalTasks={noteData.totalTasks}
          />

          <Categories categories={noteData.categories} />
        </div>

        <TaskList tasks={noteData.tasks} />

        <BottomNav/>
      </div>
    </PopupProvider>
  );
};

export default Checklist;
