🚀 Expense Tracker – MERN Stack

A full-stack Expense Tracker application built using the MERN stack (MongoDB, Express, React, Node.js).
The app allows users to add, edit, delete expenses, view them in a clean UI, analyze spending category-wise using charts, and switch between light & dark mode.

<img width="1331" height="519" alt="Screenshot 2025-12-18 225649" src="https://github.com/user-attachments/assets/a22d1c88-d4f1-4d54-a0b7-cf302d94d4e1" />

<img width="1346" height="623" alt="Screenshot 2025-12-18 225725" src="https://github.com/user-attachments/assets/b54f2642-77df-4dd9-9666-a36b425aa3ca" />

<img width="745" height="624" alt="Screenshot 2025-12-18 225750" src="https://github.com/user-attachments/assets/b5ecc8f1-2171-42e2-b2ef-fa80a23d1925" />

✨ Features

➕ Add new expenses
✏️ Edit exsting expenses
❌ Delete expenses
📊 Category-wise analytics (Pie Chart)
🌙 Dark mode toggle
📱 Clean and responsive UI

🔗 RESTful API integration

🛠 Tech Stack

Frontend

React.js
Axios
Chart.js
CSS

Backend

Node.js
Express.js
MongoDB
Mongoose
Tools & Deployment
MongoDB Atlas

Git & GitHub

Render (Backend)

Netlify (Frontend)

📂 Project Structure
Expense-tracker-mern/
├── backend/
│   ├── models/
│   │   └── Expense.js
│   ├── routes/
│   │   └── expense.js
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
│
├── .gitignore
└── README.md

⚙️ How to Run Locally
1️⃣ Clone the repository
git clone https://github.com/karankr-singh/Expense-tracker-mern.git
cd Expense-tracker-mern

2️⃣ Setup Backend
cd backend
npm install


Create a .env file inside backend/:

MONGO_URI=your_mongodb_connection_string
PORT=5000


Start backend server:

node server.js

3️⃣ Setup Frontend
cd ../frontend
npm install
npm start


Frontend will run at:

http://localhost:3000

🔗 API Endpoints
Method	Endpoint	Description
GET	/api/expense	Get all expenses
POST	/api/expense/add	Add a new expense
PUT	/api/expense/:id	Update an expense
DELETE	/api/expense/:id	Delete an expense
GET	/api/expense/analytics/category	Category-wise analytics
📊 Analytics

Uses MongoDB aggregation pipeline

Displays category-wise totals in a Pie Chart

Updates dynamically on add/edit/delete

🧠 Learning Outcomes

Built full-stack MERN application

Implemented REST APIs

Used MongoDB aggregation for analytics

Integrated charts in React

Managed state and side effects using React hooks

Practiced Git & GitHub workflow

Deployed full-stack app on cloud platforms

📸 Screenshots

(Optional but recommended – add UI screenshots here)

🧑‍💻 Author

Karan Kumar Singh
GitHub: @karankr-singh
