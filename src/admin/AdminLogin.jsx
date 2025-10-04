import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AdminLogin = ({ userAuthentication, mongoDb }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const adminLoginCheck = async (e) => {
    e.preventDefault();
    const credentials = { username, password };
    try {
      const { data } = await axios.post(
        "https://increasecity-backend-nu.vercel.app/login",
        credentials
      );
      console.log(data);
      if (data.success) {
        toast.success("Login Successful");
        navigate("/legend");
        setAuthenticated(true);
      } else {
        toast.error("Unauthorized User");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form className="form">
        <h2 className="form-header">ADMIN LOGIN</h2>
        <p type="Name:">
          <input
            className="prayer-input"
            placeholder="Authorized Username..."
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          ></input>
        </p>
        <p type="Password:">
          <input
            className="prayer-input"
            placeholder="Authorized Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></input>
        </p>
        <button className="send-message" onClick={adminLoginCheck}>
          Login
        </button>
        <div classname="form-div"></div>
      </form>
    </div>
  );
};

export default AdminLogin;
