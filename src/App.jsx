import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About";

function App() {
  const [query, setQuery] = useState("");
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route
          path="/home"
          element={<Home query={query} setQuery={setQuery} />}
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
