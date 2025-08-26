import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = ({ userAuthentication, mongoDb }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const navigate = useNavigate();

  const adminLoginCheck = async (e) => {
    e.preventDefault();
    const data = { username, password };
    axios.defaults.withCredentials = true;

    try {
      await axios
        .post("https://increasecity-backend.vercel.app/login", data)
        .then((res) => {
          console.log(res.data.values);
          if (res.data.status === "success") {
            alert("Valid User");
            // userAuthentication(true);
            navigate("/legend");
          } else {
            alert("Unauthorized User");
          }
        });
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
