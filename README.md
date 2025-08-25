# 📝 Memories — A MERN Stack Project

A full-stack **MERN application** where users can create, view, and manage digital “memories.” This project demonstrates my ability to design, build, and connect both frontend and backend systems using modern web development tools.

---

## 🔎 Overview

* **Frontend:** Built with React, styled using Material-UI, state managed with Redux.
* **Backend:** Node.js + Express REST API with MongoDB via Mongoose.
* **Features:** Create new posts, view a feed of memories, and manage stored content.
* **Focus:** Demonstrates my skills with the MERN stack, CRUD operations, and full project structure from UI to database.

---

## 🧑‍💼 For Reviewers (What this demonstrates)

* End-to-end development with the **MERN stack**
* Ability to structure a scalable full-stack app
* Integration of React, Redux, and REST APIs
* Deployment-ready project with clear organization

---

## ✨ Features

* Create and submit “memories” with title, content, and image.
* View a feed of all posts in real time.
* Responsive design using Material-UI.
* Backend REST API with full CRUD support.
* Connected to MongoDB Atlas cluster for data persistence.

---

## 🧱 Tech Stack

* **Frontend:** React, Redux, Material-UI
* **Backend:** Node.js, Express
* **Database:** MongoDB + Mongoose
* **Build/Tools:** npm, concurrently (for dev)

---

## 🗂️ Project Structure

```
memories/
 ┣ client/                # React frontend
 ┃ ┣ src/components/      # Form, Posts, Post components
 ┃ ┣ src/actions/         # Redux actions
 ┃ ┣ src/reducers/        # Redux reducers
 ┃ ┗ src/api/             # Axios API client
 ┣ server/                # Node.js + Express backend
 ┃ ┣ controllers/         # Business logic for posts
 ┃ ┣ models/              # Mongoose models
 ┃ ┣ routes/              # REST API routes
 ┃ ┗ index.js             # Server entry point
 ┗ package.json           # Project metadata
```

---

## 🚀 Getting Started

### Prerequisites

* Node.js v18+
* MongoDB Atlas account (or local MongoDB instance)

### Clone & Install

```bash
git clone https://github.com/your-username/memories.git
cd memories
```

Install client & server dependencies:

```bash
cd client && npm install
cd ../server && npm install
```

### Run the App

```bash
# From root directory
npm run dev
```

This uses `concurrently` to run both client and server in development mode.

---

## 📚 Learning Notes

* Set up Redux for state management with async actions.
* Built RESTful routes with Express and connected them to Mongoose models.
* Practiced modern UI development with Material-UI.
* Managed environment variables for MongoDB connection and server config.

---

## 👋 Contact

**Leonard Weaver**

**LinkedIn:** [linkedin.com/in/leonard-weaver-9083472a5](https://www.linkedin.com/in/leonard-weaver-9083472a5)

**Email:** [Leonard.Weaver45@gmail.com](mailto:Leonard.Weaver45@gmail.com)
