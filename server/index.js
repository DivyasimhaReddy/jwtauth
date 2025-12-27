// index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const EmployeeModel = require('./Model/Employee'); // Ensure correct path
const jwt=require("jsonwebtoken")


const app = express();
app.use(express.json());
app.use(cors());

// ---------- MongoDB Connection ----------
mongoose.connect(
  "mongodb+srv://chinnag927_db_user:gdsr1234@jwt.yyrfe54.mongodb.net/jwt"
)
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

// ---------- REGISTER ----------
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await EmployeeModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await EmployeeModel.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User registered successfully",
      userId: newUser._id,
    });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ---------- LOGIN ----------

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const user = await EmployeeModel.findOne({ email });
    if (!user) return res.status(400).json({ message: "No record found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid Credentials" });

    // Only include necessary info in JWT
    const payload = { userId: user._id };
    const jwtToken = jwt.sign(payload, "fgfyudgfuydgy", { expiresIn: "1h" });

    // Send token as JSON
    res.json({ token: jwtToken });

  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server Error" });
  }
});


// ---------- Start Server ----------
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
