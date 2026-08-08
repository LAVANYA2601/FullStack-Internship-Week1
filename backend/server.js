const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.send("Backend is Running Successfully!");
});

// Login API
app.post("/login", (req, res) => {

    const { email, password } = req.body;

    res.json({
        message: "Login Successful",
        email: email
    });

});

// Signup API
app.post("/signup", (req, res) => {

    const { name, email, password } = req.body;

    res.json({
        message: "Signup Successful",
        name: name,
        email: email
    });

});

// Start Server
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});