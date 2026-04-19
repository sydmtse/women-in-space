import { Routes, Route } from "react-router-dom";
import "./styles.css";
import HomePage from "./pages/Homepage";
import CitationsPage from "./pages/Citationspage";

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/citations" element={<CitationsPage />} />
      </Routes>
    </div>
  );
}