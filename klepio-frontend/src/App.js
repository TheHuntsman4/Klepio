import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { NavBar, NavDesktop, NavMobile } from "./components";
import {
  LandingPage,
  HomePage,
  DiagnoseStartPage,
  ResultsPage,
  Pain1,
  Swelling1,
  Ulcer1,
} from "./pages";

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
              <HomePage />
            </>
          }
        />
        <Route path="/diagnose" element={<DiagnoseStartPage />} />
        <Route path="/diagnose/pain" element={<Pain1 />} />
        <Route path="/diagnose/swelling" element={<Swelling1 />} />
        <Route path="/diagnose/ulcer" element={<Ulcer1 />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
