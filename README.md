Expense Tracker – MERN Stack

A full-stack **Expense Tracker application** built using the **MERN stack** that allows users to manage daily expenses, view category-wise analytics, and interact with a clean, responsive UI.
The project is fully deployed with a **React frontend on Netlify** and a **Node.js backend on Render**, using **MongoDB Atlas** as the database.

---
📸Screenshots

Dark Mode
 <img width="1349" height="589" alt="Screenshot 2025-12-19 170723" src="https://github.com/user-attachments/assets/2be4a91a-1b10-4d42-9f7b-a3f903adfa94" />

Light Mode
<img width="1350" height="595" alt="Screenshot 2025-12-19 170736" src="https://github.com/user-attachments/assets/ec055af0-f46c-4650-83d1-eba2359f4cb6" />

🚀 Live Demo

* **Frontend (Netlify):**
  👉 [https://expense-tracker-kr.netlify.app/](https://expense-tracker-kr.netlify.app/)

* **Backend API (Render):**
  👉 [https://expense-tracker-mern-852p.onrender.com/](https://expense-tracker-mern-852p.onrender.com/)

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Axios
* Chart.js & react-chartjs-2
* CSS (Dark Mode supported)
* Netlify (Deployment)

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* dotenv
* CORS
* Render (Deployment)

---

## ✨ Features

* ➕ Add new expenses
* ✏️ Edit existing expenses
* ❌ Delete expenses
* 📊 Category-wise expense analytics (Pie Chart)
* 🌙 Dark mode toggle
* 🌐 Fully deployed (Frontend + Backend)
* 🔐 Environment variable support

---

## 📂 Project Structure

```
Expense-tracker-mern/
│
├── backend/
│   ├── models/
│   │   └── Expense.js
│   ├── routes/
│   │   └── expense.js
│   ├── server.js
│   ├── package.json
│
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── package.json
│
└── README.md
```

---

## 🔗 API Endpoints

### Expense Routes

| Method | Endpoint                          | Description             |
| ------ | --------------------------------- | ----------------------- |
| GET    | `/api/expense`                    | Fetch all expenses      |
| POST   | `/api/expense/add`                | Add new expense         |
| PUT    | `/api/expense/:id`                | Update expense          |
| DELETE | `/api/expense/:id`                | Delete expense          |
| GET    | `/api/expense/analytics/category` | Category-wise analytics |

---

## 🧑‍💻 Run Locally

### 1️⃣ Clone Repository

```bash
git clone https://github.com/karankr-singh/Expense-tracker-mern.git
cd Expense-tracker-mern
```

---

### 2️⃣ Start Backend

```bash
cd backend
npm install
node server.js
```

Backend runs on:
👉 `http://localhost:5000`

---

### 3️⃣ Start Frontend

```bash
cd frontend
npm install
npm start
```

Frontend runs on:
👉 `http://localhost:3000`

---

## 🌍 Deployment

* **Backend:** Deployed on **Render**
* **Frontend:** Deployed on **Netlify**
* **Database:** MongoDB Atlas

---

## 🧠 Key Learnings

* Full CRUD operations in MERN stack
* Handling environment variables in production
* Fixing deployment issues (CORS, base directory, API paths)
* Real-world debugging of DELETE API and UI state updates
* Connecting MongoDB Atlas with deployed backend

---

## 📌 Future Improvements

* User authentication (Login / Signup)
* Monthly & yearly analytics
* Export expenses to CSV
* Category dropdown with validation
* Mobile-first UI enhancements

---

## 👨‍💻 Author

**Karan Kumar Singh**

* GitHub: [https://github.com/karankr-singh](https://github.com/karankr-singh)

