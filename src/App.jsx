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
import Seven from "./All Assessment/assessment07/Seven";
import Eight from "./All Assessment/assessment08/Eight";
import Nine from "./All Assessment/assessment09/Nine";
import Ten from "./All Assessment/assessment10/Ten";
import Eleven from "./All Assessment/assessment11/Eleven";
import Twelve from "./All Assessment/assessment12/Twelve";
import Thirteen from "./All Assessment/assessment13/Thirteen";
import Page01 from "./All Assessment/assessment13/Page01";
import Page02 from "./All Assessment/assessment13/Page02";
import Page03 from "./All Assessment/assessment13/Page03";
import Fourteen from "./All Assessment/assessment14/Fourteen";
import Fifteen from "./All Assessment/assessment15/Fifteen";
import Sixteen from "./All Assessment/assessment16/Sixteen";
import Seventeen from "./All Assessment/assessment17/Seventeen";
import Eighteen from "./All Assessment/assessment18/Eighteen";

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
        <Route path="/seven" element={<Seven />} />
        <Route path="/eight" element={<Eight />} />
        <Route path="/nine" element={<Nine />} />
        <Route path="/ten" element={<Ten />} />
        <Route path="/eleven" element={<Eleven />} />
        <Route path="/twelve" element={<Twelve />} />
        <Route path="/thirteen" element={<Thirteen />} />
        {/* this is including in thirteen */}
        <Route path="/page01" element={<Page01 />} />
        <Route path="/page02" element={<Page02 />} />
        <Route path="/page03/:id" element={<Page03 />} />
        {/* this is including in thirteen */}
        <Route path="/fourteen" element={<Fourteen />} />
        <Route path="/fifteen" element={<Fifteen />} />
        <Route path="/sixteen" element={<Sixteen />} />
        <Route path="/seventeen" element={<Seventeen />} />
        <Route path="/eighteen" element={<Eighteen />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;