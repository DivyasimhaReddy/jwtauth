import { useState } from "react";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import axios from "axios";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/login", { email, password })
      .then((res) => {
        // ✅ Log the backend message
        console.log("Backend message:", res.data.message);
  
        if (res.data.message === "Login Successful") {
          navigate("/home");
        } else {
          alert(res.data.message); // shows error if login fails
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", backgroundColor: "#f2f2f2" }}
    >
      <div
        className="p-4"
        style={{
          width: "350px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h3 className="text-center mb-4">Login</h3>

        <form onSubmit={handleSubmit}> 
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            style={{ borderRadius: "5px" }}
          >
            Login
          </button>
        </form>

        <p className="text-center mt-3 mb-0" style={{ fontSize: "14px" }}>
          Don’t have an account?{" "}
          <Link to="/register" className="btn btn-link p-0" style={{ fontSize: "14px" }}>
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
