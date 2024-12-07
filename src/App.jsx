import { useEffect, useMemo, useState } from "react";
import handleGetRequest from "./api/GetAllChecklists";
import "./App.css";
import ChecklistCard from "./components/ChecklistCard";
import Nav from "./components/Nav";
import PopUp from "./components/PopUp/PopUp";
import { PopupProvider } from "./components/PopUp/PopUpProvider";
import SearchBar from "./components/SearchBar";
import Sidebar from "./components/Sidebar";

function App() {
  const [notes, setNotes] = useState({ response: [] });

  const fetchChecklists = async () => {
    try {
      const fetchedNotes = await handleGetRequest();
      setNotes(fetchedNotes);
    } catch (error) {
      console.error("Error fetching checklists:", error);
    }
  };

  useEffect(() => {
    fetchChecklists();
  }, []);

  function transformChecklists(apiResponse) {
    return {
      response: apiResponse.response.map((checklist) => {
        const categories = (checklist.description.match(/~~[^~]+~~/g) || []).map((category) => category.replace(/~~/g, ""));

        const description = checklist.description.replace(/~~[^~]+~~/g, "").trim();

        return {
          ...checklist,
          description,
          categories,
        };
      }),
    };
  }

  const transformNotes = transformChecklists(notes);
  console.log(transformNotes);

  const allCategories = useMemo(() => {
    return [...new Set(transformNotes.response.flatMap((note) => note.categories))];
  }, [transformNotes]);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = useMemo(() => {
    return transformNotes.response.filter((note) => {
      const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategories = selectedCategories.length === 0 || selectedCategories.every((category) => note.categories.includes(category));

      return matchesSearch && matchesCategories;
    });
  }, [selectedCategories, searchTerm, transformNotes]);

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
    <PopupProvider fetchChecklists={fetchChecklists}>
      <div className="min-h-screen p-4 pb-24 xl:ml-64">
        <>
          <Sidebar
            categories={allCategories}
            selectedCategories={selectedCategories}
            onCategoryToggle={toggleCategory}
            onClearFilters={clearFilters}
          />
          <div>
            <SearchBar onSearch={handleSearch} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredItems.map((note) => (
                <ChecklistCard {...note} />
              ))}
            </div>
            <PopUp />
            <Nav categories={allCategories} selectedCategories={selectedCategories} onCategoryToggle={toggleCategory} onClearFilters={clearFilters} />
          </div>
        </>
      </div>
    </PopupProvider>
  );
}

export default App;
