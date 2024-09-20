import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Aside from "./Components/Aside";
import Bar from "./Components/Bar";
import "boxicons";
import Not from "./Components/Not";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app-row">
          <div className="app-left">
            <Aside />
          </div>
          <div className="app-center">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Not />} />
            </Routes>
          </div>
          <div className="app-right">
            <Bar />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
