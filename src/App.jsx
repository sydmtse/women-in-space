import { Routes, Route } from "react-router-dom";
import "./styles.css";
import HomePage from "./pages/HomePage";
import CitationsPage from "./pages/CitationsPage";

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