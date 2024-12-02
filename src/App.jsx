import {useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import ChecklistCard from "./components/ChecklistCard";
import Nav from "./components/Nav";
import PopUp from "./components/PopUp/PopUp";
import { PopupProvider } from "./components/PopUp/PopUpProvider";
import SearchBar from "./components/SearchBar";
import Sidebar from "./components/Sidebar";

const notes = [
  {
    title: "Note 1",
    categories: ["category 1", "category 2"],
    description: "Check if all action for SEO are done",
  },
  {
    title: "Note 2",
    categories: ["category 4", "category 6"],
    description: "Check if all action for SEO are done",
  },
  {
    title: "Note 3",
    categories: ["category 2", "category 6"],
    description: "Check if all action for SEO are done",
  },
  {
    title: "Note 4",
    categories: ["category 1", "category 4"],
    description: "Check if all action for SEO are done",
  },
];

function App() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const allCategories = useMemo(() => {
    return [...new Set(notes.flatMap((note) => note.categories))];
  }, []);

  const filteredItems = useMemo(() => {
    return notes.filter((note) => {

      const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategories = selectedCategories.length === 0 || selectedCategories.every((category) => note.categories.includes(category));

      return matchesSearch && matchesCategories;
    });
  }, [selectedCategories, searchTerm]);

  const toggleCategory = (category) => {
    setSelectedCategories((prev) => (prev.includes(category) ? prev.filter((cat) => cat !== category) : [...prev, category]));
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSearchTerm("");
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <PopupProvider>
      <div className="min-h-screen p-4 pb-24 xl:ml-64">
        <Sidebar categories={allCategories} selectedCategories={selectedCategories} onCategoryToggle={toggleCategory} onClearFilters={clearFilters} />
        <div>
          <SearchBar onSearch={handleSearch} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredItems.map((note, index) => (
              <Link key={index} to={"/Checklist"}>
                <ChecklistCard {...note} />
              </Link>
            ))}
          </div>
          <PopUp />
          <Nav categories={allCategories} selectedCategories={selectedCategories} onCategoryToggle={toggleCategory} onClearFilters={clearFilters}/>
        </div>
      </div>
    </PopupProvider>
  );
}

export default App;
