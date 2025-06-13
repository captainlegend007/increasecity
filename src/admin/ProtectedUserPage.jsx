import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "./css/main.css";
import { useEffect, useState } from "react";

const ProtectedUserPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [auth, setAuth] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("Checking authorization..."); // Good initial state
  const [userData, setUserData] = useState(null); // Renamed 'db' to 'userData' for clarity and set initial to null

  axios.defaults.withCredentials = true;

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("http://localhost:5000/"); // Use await for better async handling
        console.log("Full API Response Data:", res.data); // Crucial for debugging!
        console.log("Name from API:", res.data.name); // Directly log the name property

        // *** FIX 1: Change res.status.data to res.data.status ***
        if (res.data && res.data.status === "success") {
          setAuth(true);
          setName(res.data.name || "User"); // Use fallback for name
          setMessage("You are logged in.");
          setUserData(res.data.database); // Store the entire data object
        } else {
          setAuth(false);
          // Use optional chaining for res.data.message to prevent errors if message is missing
          setMessage(res.data?.message || "You are not authorized.");
          setName(""); // Clear name if not authorized
          setUserData(null);
          // Optional: If not authorized, you might want to navigate to admin/login page
          // navigate("/admin");
        }
      } catch (err) {
        // This catches network errors or non-2xx HTTP responses (e.g., 401, 500)
        console.error("Authentication check failed:", err);
        setAuth(false);
        setMessage("Authentication check failed. Please try logging in.");
        setName("");
        setUserData(null);
        // Optional: If authentication check fails entirely, navigate to admin/login page
        // navigate("/admin");
      }
    };
    checkAuth();
  }, []); // Empty dependency array ensures this runs only once on mount

  const handleLogout = async () => {
    // Use async/await for handleLogout as well
    try {
      const res = await axios.get("http://localhost:5000/logout");
      if (res.data && res.data.status === "success") {
        // Instead of location.reload(true), which forces a full browser reload,
        // it's often better to navigate programmatically in React or clear global state.
        // For simplicity, navigate to /admin after logout.
        navigate("/admin");
        // Or if you want a full reload for some reason: window.location.reload();
      } else {
        alert(res.data?.message || "Logout failed.");
      }
    } catch (err) {
      console.error("Logout failed:", err);
      alert("An error occurred during logout.");
    }
  };

  return (
    <div className="admin">
      {/* *** FIX 2: Reverse the conditional rendering logic *** */}
      {auth ? (
        // This block runs IF 'auth' is TRUE (user IS authorized)
        <>
          <h3>You are authorized! Welcome, {name || "Guest"}!</h3>{" "}
          {/* Use name and fallback */}
          {message !== "Checking authorization..." && <p>{message}</p>}{" "}
          {/* Display login message */}{" "}
          <button onClick={handleLogout}>Logout</button>
          {userData && ( // Conditionally render userData if it exists
            <div>
              <h4>Your Full Data:</h4>
              <pre>{JSON.stringify(userData, null, 2)}</pre>{" "}
              {/* Properly display object */}
            </div>
          )}
        </>
      ) : (
        // This block runs IF 'auth' is FALSE (user IS NOT authorized or still checking)
        <div>
          <h3>{message}</h3>{" "}
          {/* Display "Checking authorization..." or "You are not authorized." */}
          {/* Show login button only if not authenticated after check completes */}
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
