import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { NavBar } from "./components";
import { LandingPage, HomePage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
      <NavBar />
    </BrowserRouter>
  );
}

export default App;
