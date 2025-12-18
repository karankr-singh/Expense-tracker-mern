const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/expense_tracker")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB error:", err));

// routes
const expenseRoutes = require("./routes/expense");
app.use("/api/expense", expenseRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Expense Tracker API is running 🚀");
});

// start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
