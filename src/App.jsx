import React, { Suspense } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";
import PrayerRequest from "./PrayerRequest";

const Giving = React.lazy(() => import("./Giving"));
const Testimonies = React.lazy(() => import("./Testimonies"));
const Resources = React.lazy(() => import("./Resources"));
const UpcomingPrograms = React.lazy(() => import("./UpcomingPrograms"));

const App = () => {
  return (
    <Router>
      <Menu />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/echurch/prayer-request" element={<PrayerRequest />} />
          <Route path="/giving" element={<Giving />} />
          <Route path="/testimonies" element={<Testimonies />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/programs" element={<UpcomingPrograms />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;
