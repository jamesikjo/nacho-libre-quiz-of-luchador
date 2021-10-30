require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

//creating app
const app = express();

// routes
const routes = require("./routes/quiz");

// connect database
connectDB();

// initialize middleware
app.use(express.json({ extended: false })); //get body and headers in root req obj
app.get("/", (req, res) => res.send("server is active"));

// cors
app.use(cors({ origin: true, credentials: true }));

// use routes in /routes/quiz.js
app.use("/api/quiz", routes);

// setting up port
const PORT = process.env.PORT || 8000;

// Accessing the path module
const path = require("path");

// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
