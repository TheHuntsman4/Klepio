import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { NavBar, NavDesktop, NavMobile } from "./components";
import {
  LandingPage,
  HomePage,
  DiagnoseStartPage,
  ResultsPage,
  Pain1,
  Pain2,
  Pain3,
  Swelling1,
  Ulcer1,
  Common1,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
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
        <Route path="/diagnose/pain2" element={<Pain2 />} />
        <Route path="/diagnose/pain3" element={<Pain3 />} />
        <Route path="/diagnose/swelling" element={<Swelling1 />} />
        <Route path="/diagnose/ulcer" element={<Ulcer1 />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
