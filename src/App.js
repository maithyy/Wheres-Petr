import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import RandomizePetr from "./components/RandomizePetr/RandomizePetr";
import ChangeImage from "./components/ChangeImage/ChangeImage";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<RandomizePetr />} />
        <Route path="/picture" element={<ChangeImage />} />
      </Routes>
    </Router>
  );
}

export default App;
