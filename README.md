Live link : https://expense-tracker-ui-phi.vercel.app

# 💰 Personal Finance Tracker

<div align="center">

![React](https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Express](https://img.shields.io/badge/Express-Backend-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Clerk](https://img.shields.io/badge/Clerk-Authentication-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)

</div>

---

## 🚀 Project Overview

A **secure and modern Personal Finance Tracking Application** built using **React + Clerk Authentication** with a powerful **Express & MongoDB backend**.

### ✨ Key Highlights

| | Feature |
|---|---|
| 🔐 | Secure authentication using Clerk |
| 💸 | Add, Edit, Delete expenses (CRUD) |
| 📊 | Monthly expense aggregation |
| 🌐 | Full-stack deployment on Vercel |

---

## 🛠️ Tech Stack

| ⚛️ Frontend | 🚀 Backend | 🍃 Database | 🔐 Auth | ▲ Deploy |
|:-----------:|:----------:|:-----------:|:-------:|:--------:|
| React | Express | MongoDB | Clerk | Vercel |

---

## 🌐 Deployment Guide

<details>
<summary>🔹 <b>Backend Deployment (Server)</b></summary>

### 📌 Steps

1. Push the `server` folder to your GitHub repository
2. Create a new project on [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Select the `server` folder as the **Root Directory**
5. Add Environment Variable:
```env
MONGO_URI=your_mongodb_connection_string
```

6. Click **Deploy** 🎉

> 🔗 Your backend will be live at: `https://your-project-name.vercel.app`

</details>

<details>
<summary>🔹 <b>Frontend Deployment (Client)</b></summary>

### 📌 Steps

1. Update `client/.env.production`:
```env
VITE_API_BASE_URL=https://your-backend-name.vercel.app
```

2. Create a new Vercel project
3. Import your GitHub repository
4. Select the `client` folder as the **Root Directory**
5. Add Environment Variable:
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

6. Click **Deploy** 🎉

</details>

---

## 💻 Local Development

<details>
<summary>🔸 <b>Backend Setup</b></summary>
```bash
cd server
npm install
npm start
```

> 📍 Runs on: `http://localhost:3001`

</details>

<details>
<summary>🔸 <b>Frontend Setup</b></summary>
```bash
cd client
npm install
npm run dev
```

> 📍 Runs on: `http://localhost:5173`
> 🔗 Automatically connects to: `http://localhost:3001`

</details>

---

## 📊 Features

| Status | Feature |
|:------:|---------|
| ✅ | Secure Authentication (Clerk) |
| ✅ | Expense CRUD Operations |
| ✅ | Monthly Expense Aggregation |
| ✅ | RESTful API Architecture |
| ✅ | Production Deployment Ready |

---

## 🚀 Future Enhancements

| | Planned Feature |
|---|---|
| 📈 | Charts & Analytics Dashboard |
| 📅 | Budget Planning Feature |
| 📱 | Fully Responsive UI |
| 🌍 | Multi-Currency Support |

---

## 🤝 Contributing

Contributions are welcome! Fork the repository and submit a pull request.

---

## ⭐ Support

If you like this project, **give it a ⭐ on GitHub!**
