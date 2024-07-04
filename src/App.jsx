import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Page404 from "./Page404";
import Page01 from "./All Assessment/assessment13/Page01";
import Page02 from "./All Assessment/assessment13/Page02";
import Page03 from "./All Assessment/assessment13/Page03";
import StopWatch from "./All Assessment/assessment01/StopWatch";
import SelectableGrid from "./All Assessment/assessment02/SelectableGrid";
import PasswordGenerator from "./All Assessment/assessment03/PasswordGenerator";
import ProgressBar from "./All Assessment/assessment04/ProgressBar";
import InfiniteScroll from "./All Assessment/assessment05/InfiniteScroll";
import SearchSuggestions from "./All Assessment/assessment06/SearchSuggestions";
import ColorChangingButton from "./All Assessment/assessment07/ColorChangingButton";
import HolyGrailLayout from "./All Assessment/assessment08/HolyGrailLayout";
import TabsComposition from "./All Assessment/assessment09/TabsComposition";
import UseEffectHookPolyfill from "./All Assessment/assessment10/UseEffectHookPolyfill";
import JobBoardApi from "./All Assessment/assessment11/JobBoardApi";
import BlinkGame from "./All Assessment/assessment12/BlinkGame";
import Breadcrumbs from "./All Assessment/assessment13/Breadcrumbs";
import OtpLogin from "./All Assessment/assessment14/OtpLogin";
import LikeButton from "./All Assessment/assessment15/LikeButton";
import ImageToTextConverter from "./All Assessment/assessment16/ImageToTextConverter";
import DrawBoard from "./All Assessment/assessment17/DrawBoard";
import TextToSpeech from "./All Assessment/assessment18/TextToSpeech";
import Card from "./Components/Card";
import Marquee from "./Components/Marquee";
import ProblemsPage from "./Components/allProblems/ProblemsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stopWatch" element={<StopWatch />} />
        <Route path="/selectableGrid" element={<SelectableGrid />} />
        <Route path="/passwordGenerator" element={<PasswordGenerator />} />
        <Route path="/progressBar" element={<ProgressBar />} />
        <Route path="/infiniteScroll" element={<InfiniteScroll />} />
        <Route path="/searchSuggestions" element={<SearchSuggestions />} />
        <Route path="/colorChangingButton" element={<ColorChangingButton />} />
        <Route path="/holyGrailLayout" element={<HolyGrailLayout />} />
        <Route path="/tabsComposition" element={<TabsComposition />} />
        <Route
          path="/useEffectHookPolyfill"
          element={<UseEffectHookPolyfill />}
        />
        <Route path="/jobBoardApi" element={<JobBoardApi />} />
        <Route path="/blinkGame" element={<BlinkGame />} />
        <Route path="/breadcrumbs" element={<Breadcrumbs />} />
        {/* this is including in Breadcrumbs */}
        <Route path="/page01" element={<Page01 />} />
        <Route path="/page02" element={<Page02 />} />
        <Route path="/page03/:id" element={<Page03 />} />
        {/* this is including in Breadcrumbs */}
        <Route path="/otpLogin" element={<OtpLogin />} />
        <Route path="/likeButton" element={<LikeButton />} />
        <Route
          path="/imageToTextConverter"
          element={<ImageToTextConverter />}
        />
        <Route path="/drawBoard" element={<DrawBoard />} />
        <Route path="/textToSpeech" element={<TextToSpeech />} />
        <Route path="*" element={<Page404 />} />
        <Route path="card" element={<Card />} />
        <Route path="mq" element={<Marquee />} />
        <Route path="/problems" element={<ProblemsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
