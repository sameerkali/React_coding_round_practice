import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header";
import ContestCardtwothree from "./Pages/Test/ContestCardtwothree";
import { Provider } from "react-redux";
import { store } from "./StateManager/Store";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/h" element={<Home />} />
            <Route path="/" element={<ContestCardtwothree />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
