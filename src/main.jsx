import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Checklist from "./screen/Checklist.jsx";
import Form from "./screen/Form.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Checklist" element={<Checklist />} />
      <Route path="/Form" element={<Form />} />
    </Routes>
  </BrowserRouter>
);
