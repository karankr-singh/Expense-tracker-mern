import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

// chart imports
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function App() {
  const [expenses, setExpenses] = useState([]);
  const [analytics, setAnalytics] = useState([]);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState(null);
  const [dark, setDark] = useState(false);

  // fetch all expenses
  const fetchExpenses = async () => {
    const res = await axios.get("http://localhost:5000/api/expense");
    setExpenses(res.data);
  };

  // fetch analytics
  const fetchAnalytics = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/expense/analytics/category"
    );
    setAnalytics(res.data);
  };

  // initial load
  useEffect(() => {
    fetchExpenses();
    fetchAnalytics();
  }, []);

  // dark mode toggle
  useEffect(() => {
    document.body.className = dark ? "dark" : "";
  }, [dark]);

  // add / update expense
  const submitExpense = async () => {
    if (!amount || !category) return alert("Amount & Category required");

    if (editId) {
      await axios.put(`http://localhost:5000/api/expense/${editId}`, {
        amount,
        category,
        description,
      });
      setEditId(null);
    } else {
      await axios.post("http://localhost:5000/api/expense/add", {
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

  // edit expense
  const editExpense = (e) => {
    setEditId(e._id);
    setAmount(e.amount);
    setCategory(e.category);
    setDescription(e.description);
  };

  // delete expense
  const deleteExpense = async (id) => {
    await axios.delete(`http://localhost:5000/api/expense/${id}`);
    fetchExpenses();
    fetchAnalytics();
  };

  // pie chart data
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
      <div className="header">
        <h2>Expense Tracker</h2>
        <button className="toggle" onClick={() => setDark(!dark)}>
          🌙
        </button>
      </div>

      {/* Form */}
      <div className="form">
        <input
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          placeholder="Description"
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
          <button className="delete" onClick={() => deleteExpense(e._id)}>
            ❌
          </button>
        </div>
      ))}

      {/* Analytics Chart */}
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
