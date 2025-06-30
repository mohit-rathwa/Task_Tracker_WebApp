# 📝 Task Tracker Web App

A full-stack Task Tracker web application built using **React.js**, **Node.js**, **Express**, and **MongoDB**. Users can create, view, update, and delete tasks with deadlines.

---

## 🚀 Features

- Add, edit, and delete tasks
- Mark tasks as completed
- Set deadlines for each task
- Responsive UI
- RESTful API backend

---

## 🛠️ Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express
- **Database:** MongoDB (Mongoose)
- **API Testing:** Axios
- **Tools:** Git, GitHub, VS Code

---

## 📁 Project Structure

```
task-tracker/
├── client/          # React frontend
│   └── src/
│       └── App.js
├── server/          # Node backend
│   └── index.js
```

---

## 🧑‍💻 Getting Started

### Prerequisites

- Node.js
- MongoDB (Local or Atlas)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MridulPathania01/Task-tracker-App.git
   cd task-tracker
   ```

2. Start the backend:
   ```bash
   cd server
   npm install
   node index.js
   ```

3. Start the frontend:
   ```bash
   cd ../client
   npm install
   npm start
   ```

---

## 🌐 API Endpoints

| Method | Endpoint       | Description            |
|--------|----------------|------------------------|
| GET    | /tasks         | Fetch all tasks        |
| POST   | /tasks         | Add a new task         |
| PUT    | /tasks/:id     | Update a task          |
| DELETE | /tasks/:id     | Delete a task          |

---

🙌 About Me
👋 Hi, I'm Mohit Rathwa — passionate about building useful and clean web applications. This project helped me explore frontend-backend integration and API-based development.

Check more at: github.com/mohit-rathwa
