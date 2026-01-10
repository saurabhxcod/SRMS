# 🎓 Student Result Management System (MERN Stack)

A **full-stack Student Result Management System** built using the **MERN stack** to manage student records, academic details, and results with secure authentication and role-based access control.

---

## 🚀 Features

* Role-based authentication (**Admin / Student**)
* Secure login using **JWT** and **bcrypt**
* Admin can add, update, and manage student records
* Students can view their academic information and results
* RESTful APIs with proper validation and error handling
* MongoDB schema relationships between Users and Students
* Clean and scalable **MVC architecture**

---

## 🛠️ Tech Stack

**Frontend:** React.js
**Backend:** Node.js, Express.js
**Database:** MongoDB (Mongoose)
**Authentication:** JWT, bcrypt
**Validation:** Joi

---

## 📂 Project Structure

```
server/
 ├── controllers/
 ├── models/
 ├── routes/
 ├── validations/
 ├── middlewares/
 ├── config/
 └── index.js

client/
 ├── src/
 └── public/
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/saurabhxcod/student-result-management-system.git
cd student-result-management-system
```

### 2️⃣ Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in the `server` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Run the backend server:

```bash
npm start
```

---

### 3️⃣ Frontend Setup

```bash
cd client
npm install
npm start
```

---

## 🔐 API Overview

| Method | Endpoint          | Description         |
| ------ | ----------------- | ------------------- |
| POST   | /api/auth/login   | User login          |
| POST   | /api/students     | Add student (Admin) |
| GET    | /api/students     | Get all students    |
| GET    | /api/students/:id | Get student by ID   |
| PUT    | /api/students/:id | Update student      |

---

## ✅ Security Highlights

* Password hashing using **bcrypt**
* JWT-based authentication
* Email and roll number uniqueness checks
* Input validation using Joi

---

## 📌 Future Enhancements

* Result & marks management module
* Pagination and search
* Role-based route protection
* Admin dashboard UI
* Deployment using Docker

---

## 👨‍💻 Author

**Saurabh Singh**
GitHub: [https://github.com/saurabhxcod](https://github.com/saurabhxcod)

---

⭐ If you find this project useful, consider giving it a star!
