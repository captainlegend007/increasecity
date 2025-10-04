import React, { Suspense, useState, lazy } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";
import PrayerRequest from "./PrayerRequest";
import EChurchTestimonies from "./EChurchTestimonies";
import FirstTimer from "./FirstTimer";
import AdminLogin from "./admin/AdminLogin";
import ProtectedUserPage from "./admin/ProtectedUserPage";
import IncreaseCelebration from "./IncreaseCelebration";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// 🟢 LAZY-LOADED COMPONENTS (Code Splitting)
const Giving = lazy(() => import("./Giving"));
const Testimonies = lazy(() => import("./Testimonies"));
const Resources = lazy(() => import("./Resources"));
const UpcomingPrograms = lazy(() => import("./UpcomingPrograms"));

const App = () => {
  const [user, setUser] = useState(false);
  const [mongoDbData, setmongoDbData] = useState({});
  const userAuthentication = (value) => {
    setUser(value);
  };

  const mongoDb = (value) => {
    setmongoDbData(value);
  };

  // 🟢 Custom Loading Spinner Component
  const LoadingFallback = () => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 150px)", // Full height minus header/footer
        fontSize: "20px",
        color: "#3498db",
      }}
    >
      Loading Page Content...
    </div>
  );

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Router>
        <Menu />

        {/* 🟢 Suspense wraps the entire Routes block */}
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            {/* 🟢 Non-lazy components are fine outside Suspense, 
                 but putting them inside <Routes> wrapped by Suspense is standard. */}
            <Route path="/" element={<Header />} />
            <Route path="/increasecity" element={<Header />} />
            <Route path="/echurch/prayer-request" element={<PrayerRequest />} />
            <Route
              path="/echurch/share-your-testimonies"
              element={<EChurchTestimonies />}
            />
            <Route path="/echurch/first-timers" element={<FirstTimer />} />

            {/* 🟢 Lazy-loaded components are used here */}
            <Route path="/giving" element={<Giving />} />
            <Route path="/testimonies" element={<Testimonies />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/programs" element={<UpcomingPrograms />} />

            <Route
              path="/increase-celebration-registration"
              element={<IncreaseCelebration />}
            />
            <Route
              path="/admin"
              element={
                <AdminLogin userAuthentication={userAuthentication} mongoDb={mongoDb} />
              }
            />
            <Route
              path="/legend"
              element={<ProtectedUserPage isAuthenticated={user} data={mongoDbData} />}
            />
          </Routes>
        </Suspense>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
