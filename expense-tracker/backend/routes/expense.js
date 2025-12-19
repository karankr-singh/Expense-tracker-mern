const express = require("express");
const router = express.Router();
const Expense = require("../models/Expense");

/* =========================
   ADD EXPENSE (CREATE)
   POST /api/expense/add
========================= */
router.post("/add", async (req, res) => {
  try {
    const expense = new Expense(req.body);
    const savedExpense = await expense.save();
    res.json(savedExpense);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* =========================
   GET ALL EXPENSES (READ)
   GET /api/expense
========================= */
router.get("/", async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ createdAt: -1 });
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* =========================
   UPDATE EXPENSE
   PUT /api/expense/:id
========================= */
router.put("/:id", async (req, res) => {
  try {
    const updatedExpense = await Expense.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedExpense);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* =========================
   DELETE EXPENSE
   DELETE /api/expense/:id
========================= */
const deleteExpense = async (id) => {
  try {
    await axios.delete(`${API_URL}/api/expense/${id}`);
    fetchExpenses();
    fetchAnalytics();
  } catch (err) {
    console.error("Delete failed:", err.response?.data || err.message);
    alert("Failed to delete expense");
  }
};


/* =========================
   ANALYTICS (CATEGORY TOTAL)
   GET /api/expense/analytics/category
========================= */
router.get("/analytics/category", async (req, res) => {
  try {
    const analytics = await Expense.aggregate([
      {
        $group: {
          _id: "$category",
          total: { $sum: "$amount" },
        },
      },
    ]);
    res.json(analytics);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
