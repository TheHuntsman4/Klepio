import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { NavBar, NavMobile } from "./components";
import { LandingPage, HomePage, DiagnoseStartPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/diagnose" element={<DiagnoseStartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
