import { useState } from "react";
import "./App.css";
import ChecklistCard from "./components/ChecklistCard";
import Nav from "./components/Nav";
import PopUp from "./components/PopUp/PopUp";
import { PopupProvider } from "./components/PopUp/PopUpProvider";
import SearchBar from "./components/SearchBar";
import Sidebar from "./components/Sidebar";
import Form from "./screen/Form";
import Checklist from "./screen/Checklist"

const notes = [
  {
    title: "Note 1",
    categories: ["category", "category"],
    description: "Check if all action for SEO are done",
  },
  {
    title: "Note 2",
    categories: ["category", "category"],
    description: "Check if all action for SEO are done",
  },
  {
    title: "Note 3",
    categories: ["category", "category"],
    description: "Check if all action for SEO are done",
  },
  {
    title: "Note 4",
    categories: ["category", "category"],
    description: "Check if all action for SEO are done",
  },
];

function App() {
  const [filteredItems, setFilteredItems] = useState(notes);

  const handleSearch = (searchTerm) => {
    const filtered = notes.filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  };
  return (
    <>
      {/* <PopupProvider>
        <div className="min-h-screen p-4 pb-24 xl:ml-64">
          <Sidebar />
          <div>
            <SearchBar onSearch={handleSearch}/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredItems.map((note, index) => (
                <ChecklistCard key={index} {...note} />
              ))}
            </div>
            <PopUp />
            <Nav />
          </div>
        </div>
      </PopupProvider> */}
      {/* <Checklist/> */}
      <Form/>
    </>
  );
}

export default App;
