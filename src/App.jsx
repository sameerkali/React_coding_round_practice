import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import One from "./All Assessment/assessment01/One";
import Home from "./Home";
import Two from "./All Assessment/assessment02/Two";
import Page404 from "./Page404";
import Three from "./All Assessment/assessment03/Three";
import Four from "./All Assessment/assessment04/Four";
import Five from "./All Assessment/assessment05/Five";
import Six from "./All Assessment/assessment06/Six";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/one" element={<One />} />
        <Route path="/two" element={<Two />} />
        <Route path="/three" element={<Three />} />
        <Route path="/four" element={<Four />} />
        <Route path="/five" element={<Five />} />
        <Route path="/six" element={<Six />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
