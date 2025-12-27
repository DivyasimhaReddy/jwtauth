import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      console.log(res.data);

      // ✅ TOKEN means LOGIN SUCCESS
      if (res.data.token) {
        console.log("JWT Token:", res.data.token);
        localStorage.setItem("token", res.data.token);
        navigate("/home"); // ✅ MOVE HERE
      } else {
        alert("Login failed");
      }

    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Server error");
    }
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
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>

        <p className="text-center mt-3">
          Don’t have an account? <Link to="/register">Signup</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
