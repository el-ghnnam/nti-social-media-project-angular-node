```markdown
# 📱 SociConnect - MEAN Stack Social Media App

![MEAN Stack](https://img.shields.io/badge/MEAN-Angular%2BExpress%2BNode.js%2BMongoDB-blue)
![JWT Auth](https://img.shields.io/badge/Auth-JWT-brightgreen)
![Responsive](https://img.shields.io/badge/UI-Responsive-orange)

**SociConnect** is a feature-rich social media platform built with the MEAN stack (MongoDB, Express.js, Angular, and Node.js), offering JWT-based authentication, post management, user profiles, and interactive UI elements.

---

## ✨ Features

### 🔒 Authentication
- Secure JWT-based login system
- Password hashing with bcrypt
- Auth-protected API routes
- Persistent login with `localStorage`

### 📝 Post Management
- Create, edit, and delete posts
- Rich content support (text, images)
- Personalized feed for each user
- Like and comment functionality

### 👤 User Profiles
- Display username, avatar, and profile details
- View posts by user
- Edit personal info (upcoming)

### 🎨 Responsive UI
- Facebook/Twitter-inspired design
- Mobile-friendly layout
- Built with Angular + Bootstrap
- Real-time updates via observables

---

## 🛠 Tech Stack

**Frontend**
- Angular 15+
- RxJS for reactive state
- Bootstrap, HTML5, CSS3

**Backend**
- Node.js 16+
- Express.js
- MongoDB Atlas
- Mongoose ODM

**Authentication**
- JSON Web Tokens (JWT)
- bcrypt for password encryption
- Auth middleware for route protection

---

## 📂 Project Structure

```

social-media-app/
├── backend/
│   ├── config/          # DB and environment configs
│   ├── controllers/     # Business logic
│   ├── middleware/      # JWT auth middleware
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API route definitions
│   ├── server.js        # Express app entry point
│   └── .env             # Environment variables
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/  # UI components
│   │   │   ├── services/    # API interaction
│   │   │   ├── models/      # TypeScript interfaces
│   │   │   └── guards/      # Auth route guards
│   │   ├── assets/          # Images and styles
│   │   └── environments/    # Environment configs
│   └── angular.json         # Angular CLI config
│
├── .gitignore
├── package.json
└── README.md

````

---

## 🚀 Installation Guide

### 🔧 Prerequisites
- Node.js v16 or later
- Angular CLI v15+
- MongoDB Atlas account (or local MongoDB setup)

### 🔙 Backend Setup
```bash
cd backend
npm install
````

Create a `.env` file:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/socialdb
JWT_SECRET=your_strong_secret
PORT=3000
```

Start the server:

```bash
npm start
```

### 🖥 Frontend Setup

```bash
cd frontend
npm install
```

Edit `src/environments/environment.ts`:

```ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api'
};
```

Run the dev server:

```bash
ng serve
```

Visit: `http://localhost:4200`

---

## 📡 API Documentation

### 🔐 Authentication

| Method | Endpoint          | Description                   |
| ------ | ----------------- | ----------------------------- |
| POST   | `/api/auth/login` | Authenticate user, return JWT |

### 👤 Users

| Method | Endpoint                        | Description          |
| ------ | ------------------------------- | -------------------- |
| GET    | `/api/users/:id`                | Get user by ID       |
| GET    | `/api/users/username/:username` | Get user by username |

### 📝 Posts (JWT Protected)

| Method | Endpoint                 | Description           |
| ------ | ------------------------ | --------------------- |
| GET    | `/api/posts`             | Fetch user posts      |
| POST   | `/api/posts`             | Create a post         |
| PUT    | `/api/posts/:id`         | Update a post         |
| DELETE | `/api/posts/:id`         | Delete a post         |
| POST   | `/api/posts/:id/like`    | Like/unlike a post    |
| POST   | `/api/posts/:id/comment` | Add comment to a post |

---

## 📸 Screenshots

| Login Page                                 | Dashboard                                      | Create Post                               |
| ------------------------------------------ | ---------------------------------------------- | ----------------------------------------- |
| ![Login](https://i.imgur.com/example1.png) | ![Dashboard](https://i.imgur.com/example2.png) | ![Post](https://i.imgur.com/example3.png) |

---

## 🛡 Security Highlights

* JWT token expiration (1hr)
* HTTP-only cookie usage (optional)
* Encrypted passwords (bcrypt)
* Protected API routes
* Input sanitization
* Configurable CORS

---

## 📅 Roadmap

* [ ] 🧾 User registration page
* [ ] 🖼 Profile picture upload
* [ ] 🔔 Real-time notifications
* [ ] 👥 Friends/follow system
* [ ] 🌙 Dark mode toggle
* [ ] 🔁 Post sharing
* [ ] 🔍 Advanced search

---

## 🤝 Contributing

1. **Fork** the repository
2. Create a **feature branch**:

   ```bash
   git checkout -b feature/MyFeature
   ```
3. **Commit** your changes:

   ```bash
   git commit -m 'Add MyFeature'
   ```
4. **Push** to GitHub:

   ```bash
   git push origin feature/MyFeature
   ```
5. Open a **Pull Request**

---

## 📜 License

This project is licensed under the **MIT License**. See the `LICENSE` file for details.

---

## ✉️ Contact

**Ahmed Ibrahim**
[Twitter](https://twitter.com/yourtwitter) • [email@example.com](mailto:email@example.com)
GitHub: [@yourusername](https://github.com/yourusername)
Project Repo: [SociConnect](https://github.com/yourusername/social-media-app)

```

---
