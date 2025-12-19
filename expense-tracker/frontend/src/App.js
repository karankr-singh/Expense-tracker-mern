import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

// Chart imports
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

// ✅ FINAL API URL (env + fallback for Netlify)
const API_URL =
  process.env.REACT_APP_API_URL ||
  "https://expense-tracker-mern-852p.onrender.com";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [analytics, setAnalytics] = useState([]);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState(null);
  const [dark, setDark] = useState(false);

  // Fetch all expenses
  const fetchExpenses = async () => {
    const res = await axios.get(`${API_URL}/api/expense`);
    setExpenses(res.data);
  };

  // Fetch analytics
  const fetchAnalytics = async () => {
    const res = await axios.get(
      `${API_URL}/api/expense/analytics/category`
    );
    setAnalytics(res.data);
  };

  // Initial load
  useEffect(() => {
    fetchExpenses();
    fetchAnalytics();
  }, []);

  // Dark mode toggle
  useEffect(() => {
    document.body.className = dark ? "dark" : "";
  }, [dark]);

  // Add / Update expense
  const submitExpense = async () => {
    if (!amount || !category) {
      alert("Amount and Category are required");
      return;
    }

    if (editId) {
      await axios.put(`${API_URL}/api/expense/${editId}`, {
        amount,
        category,
        description,
      });
      setEditId(null);
    } else {
      await axios.post(`${API_URL}/api/expense/add`, {
        amount,
        category,
        description,
      });
    }

    setAmount("");
    setCategory("");
    setDescription("");
    fetchExpenses();
    fetchAnalytics();
  };

  // Edit expense
  const editExpense = (e) => {
    setEditId(e._id);
    setAmount(e.amount);
    setCategory(e.category);
    setDescription(e.description || "");
  };

  // Delete expense
  const deleteExpense = async (id) => {
    await axios.delete(`${API_URL}/api/expense/${id}`);
    fetchExpenses();
    fetchAnalytics();
  };

  // Pie chart data
  const pieData = {
    labels: analytics.map((a) => a._id),
    datasets: [
      {
        label: "Expenses",
        data: analytics.map((a) => a.total),
        backgroundColor: [
          "#2563eb",
          "#16a34a",
          "#f59e0b",
          "#dc2626",
          "#9333ea",
        ],
      },
    ],
  };

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <h2>Expense Tracker</h2>
        <button className="toggle" onClick={() => setDark(!dark)}>
          {dark ? "☀️" : "🌙"}
        </button>
      </div>

      {/* Form */}
      <div className="form">
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          placeholder="Category (Food, Travel, etc.)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={submitExpense}>
          {editId ? "Update Expense" : "Add Expense"}
        </button>
      </div>

      {/* Expense List */}
      {expenses.map((e) => (
        <div className="expense" key={e._id}>
          <span>₹{e.amount}</span>
          <span>{e.category}</span>
          <span>{e.description}</span>
          <button className="edit" onClick={() => editExpense(e)}>
            ✏️
          </button>
          <button
            className="delete"
            onClick={() => deleteExpense(e._id)}
          >
            ❌
          </button>
        </div>
      ))}

      {/* Analytics */}
      <h3 style={{ marginTop: "30px" }}>Expense Analytics</h3>
      {analytics.length > 0 ? (
        <Pie data={pieData} />
      ) : (
        <p>No analytics data</p>
      )}
    </div>
  );
}

export default App;
