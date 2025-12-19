const express = require('express'); 
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./Model/Employee');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://chinnag927_db_user:gdsr1234@jwt.yyrfe54.mongodb.net/")

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await EmployeeModel.findOne({ email }); // only check email

        if (!user) {
            return res.json({ message: "No record found" });
        }

        if (user.password !== password) {
            return res.json({ message: "Invalid Credentials" });
        }

        return res.json({ message: "Login Successful", user }); // frontend detects success
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Server Error" });
    }
});




app.post('/register', async (req, res) => {

    EmployeeModel.create(req.body)
    .then(employees=>res.json(employees)) 
    .catch(err=>res.json(err));
}) ;


app.listen(3000, () => {
    console.log("Server started on port 3000");
});