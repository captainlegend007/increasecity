import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "./css/main.css";
import { useEffect, useState } from "react";
import "./userPage.css";

const ProtectedUserPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [auth, setAuth] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("Checking authorization..."); // Good initial state
  const [userData, setUserData] = useState(null); // Renamed 'db' to 'userData' for clarity and set initial to null
  const [physicalUserCount, setPhysicalUserCount] = useState(0); // New state for the count
  const [onlineUserCount, setOnlineUserCount] = useState(0);

  axios.defaults.withCredentials = true;

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("https://increasecity-backend.vercel.app/users");

        if (res.data && res.data.status === "success") {
          setAuth(true);
          setName(res.data.name || "User"); // Use fallback for name
          setMessage("You are logged in.");
          setUserData(res.data.database); // Store the entire data object

          const physicalCount = res.data.database.filter(
            (user) => user.physical === "true"
          ).length;
          setPhysicalUserCount(physicalCount); // Store the count in state

          // Count users with online attendance
          const onlineCount = res.data.database.filter(
            (user) => user.online === "true"
          ).length;
          setOnlineUserCount(onlineCount); // Store the count in state
        } else {
          setAuth(false);
          setMessage(res.data?.message || "You are not authorized.");
          setName("");
          setUserData(null);
        }
      } catch (err) {
        console.error("Authentication check failed:", err);
        setAuth(false);
        setMessage("Authentication check failed. Please try logging in.");
        setName("");
        setUserData(null);
      }
    };
    checkAuth();
  }, []);

  const refreshData = async () => {
    try {
      const res = await axios.get("https://increasecity-backend.vercel.app/users"); // Use await for better async handling

      if (res.data && res.data.status === "success") {
        setAuth(true);
        setName(res.data.name || "User"); // Use fallback for name
        setMessage("You are logged in.");
        setUserData(res.data.database); // Store the entire data object
      } else {
        setAuth(false);
        setMessage(res.data?.message || "You are not authorized.");
        setName("");
        setUserData(null);
      }
    } catch (err) {
      console.error("Authentication check failed:", err);
      setAuth(false);
      setMessage("Authentication check failed. Please try logging in.");
      setName("");
      setUserData(null);
    }
  };
  const handleLogout = async () => {
    try {
      const res = await axios.get("https://increasecity-backend.vercel.app/logout");
      if (res.data && res.data.status === "success") {
        navigate("/admin");
        alert(res.data?.message || "Logout failed.");
      }
    } catch (err) {
      console.error("Logout failed:", err);
      alert("An error occurred during logout.");
    }
  };

  return (
    <div className="admin">
      {auth ? (
        <>
          <div className="login-parent">
            <h3 className="welcome-text">Welcome, {name || "Guest"}!</h3>
            <div className="button-parent">
              <button className="refresh-button" onClick={refreshData}>
                Refresh
              </button>{" "}
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>

          <div className="overall-details">
            <div className="detail-a">
              <p className="total-users">Total Registered</p>
              <p className="total-sub">{userData.length}</p>
            </div>
            <div className="detail-a">
              <p className="total-users">Streaming Online</p>
              <p className="total-sub">{onlineUserCount}</p>
            </div>
            <div className="detail-a">
              <p className="total-users">Physcial Attendance</p>
              <p className="total-sub">{physicalUserCount}</p>
            </div>
            <div className="detail-a">
              <p className="total-users">Attending & Paid</p>
              <p className="total-sub">Null</p>
            </div>
          </div>
          {userData && userData.length > 0 ? (
            <div className="table-container">
              {/* Table Header */}
              <div className="registration-parent">
                <div className="parent-sub-d">Name</div>
                <div className="parent-sub-d">Email</div>
                <div className="parent-sub-d">Mode of Attendance</div>
              </div>
              {/* Table Rows (mapped from userData) */}
              {userData.map((user, index) => (
                <div key={index} className="registration-parent">
                  <div className="parent-sub">{user.name}</div>
                  <div className="parent-sub">0{user.number}</div>
                  <div className="parent-sub-c">
                    {user.online === "true" ? (
                      <p>Streaming</p>
                    ) : (
                      user.physical === "true" && <p>Physical</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No user data available.</p>
          )}
        </>
      ) : (
        <div>
          <h3>{message}</h3>{" "}
          {message !== "Checking authorization..." && (
            <Link to="/admin">
              <button>Login</button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};
export default ProtectedUserPage;
