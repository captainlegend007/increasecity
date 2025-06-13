import React, { Suspense, useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";
import PrayerRequest from "./PrayerRequest";
import EChurchTestimonies from "./EChurchTestimonies";
import FirstTimer from "./FirstTimer";
import AdminLogin from "./admin/AdminLogin";
import ProtectedUserPage from "./admin/ProtectedUserPage";

const Giving = React.lazy(() => import("./Giving"));
const Testimonies = React.lazy(() => import("./Testimonies"));
const Resources = React.lazy(() => import("./Resources"));
const UpcomingPrograms = React.lazy(() => import("./UpcomingPrograms"));

const App = () => {
  const [user, setUser] = useState(false);
  const [mongoDbData, setmongoDbData] = useState({});
  const userAuthentication = (value) => {
    setUser(value);
  };

  const mongoDb = (value) => {
    setmongoDbData(value);
  };
  return (
    <Router>
      <Menu />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/echurch/prayer-request" element={<PrayerRequest />} />
          <Route
            path="/echurch/share-your-testimonies"
            element={<EChurchTestimonies />}
          />
          <Route path="/echurch/first-timers" element={<FirstTimer />} />
          <Route path="/giving" element={<Giving />} />
          <Route path="/testimonies" element={<Testimonies />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/programs" element={<UpcomingPrograms />} />
          <Route
            path="/admin"
            element={
              <AdminLogin
                userAuthentication={userAuthentication}
                mongoDb={mongoDb}
              />
            }
          />
          <Route
            path="/legend"
            element={
              <ProtectedUserPage isAuthenticated={user} data={mongoDbData} />
            }
          />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;
