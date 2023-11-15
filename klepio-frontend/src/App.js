import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { NavBar, NavDesktop, NavMobile } from "./components";
import { LandingPage, HomePage, DiagnoseStartPage, ResultsPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <LandingPage />
            </>
          }
        />
        <Route
          path="/home"
          element={
            <>
              <NavBar />
              <LandingPage />
            </>
          }
        />
        <Route path="/diagnose" element={<DiagnoseStartPage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
