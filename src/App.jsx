import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import One from "./All Assessment/assessment01/One";
import Home from "./Home";
import Two from "./All Assessment/assessment02/Two";
import Page404 from "./Page404";
import Three from "./All Assessment/assessment03/Three";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/one" element={<One />} />
        <Route path="/two" element={<Two />} />
        <Route path="/three" element={<Three />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
