# 🚀 Task Flow - Modern Task Management System

A modern, fully-featured task management application built with React, Redux Toolkit, and Tailwind CSS. **Task Flow** helps users organize their daily routines efficiently with a clean UI, built-in dark mode, and persistent local storage.

## 🌐 Live Demo

🔗 [_Preview Link_](https://task-managment-system-iota.vercel.app/)

## ✨ Features

- **Dashboard Overview:** Get a quick birds-eye view of total, completed, and pending tasks along with recent task activities.
- **Advanced State Management:** Utilizes **Redux Toolkit** for predictable state management across the application.
- **Local Storage Sync:** Custom Redux middleware automatically synchronizes your tasks with local storage, ensuring no data is ever lost upon refresh.
- **Dynamic Filtering & Sorting:** Quickly filter tasks by status (All, Pending, Done) and sort them by Date, Title, or Priority.
- **Task Categorization & Prioritization:** Assign specific categories (Work, Study, Personal) and priority levels (High, Medium, Low) to tasks.
- **Beautiful UI & Dark Mode:** Built entirely from scratch using **Tailwind CSS v4**, featuring a seamless Light/Dark mode toggle.
- **Custom UI Components:** Reusable and scalable UI components including Modals, Badges, Buttons, and interactive Confirm Dialogs.
- **Toast Notifications:** Real-time feedback using `react-hot-toast` for user actions (Create, Update, Delete).

## 🛠️ Technologies Used

- **React 19** (Vite)
- **Redux Toolkit** & **React-Redux**
- **React Router DOM** (Nested Layouts)
- **Tailwind CSS v4**
- **Lucide React** (Icons)
- **React Hot Toast** (Notifications)
- **UUID** (Unique Identifiers)

## 📦 Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ahmedtika74/Task-Managment-System.git
   cd Task-Managment-System
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to `http://localhost:5173`

## 🗂️ Project Structure

```text
src/
├── app/                  # Redux Store & Middleware
│   └── features/         # Redux Slices (tasksSlice.js)
├── components/           # React Components
│   ├── common/           # Shared components (ConfirmDialog)
│   ├── layout/           # App layouts (MainLayout, Sidebar, Header)
│   └── ui/               # Reusable UI elements (Buttons, Modals, Cards)
├── hooks/                # Custom React Hooks (useTheme, useTaskModals)
├── pages/                # Route Pages (Dashboard, TasksPage, NotFound)
└── utils/                # Helper functions
```
