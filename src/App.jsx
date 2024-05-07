import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import One from "./All Assessment/assessment01/One";
import Home from "./Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/one" element={<One />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
