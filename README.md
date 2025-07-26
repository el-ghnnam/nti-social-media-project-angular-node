```markdown
# 📱 SociConnect - MEAN Stack Social Media App

![MEAN Stack](https://img.shields.io/badge/MEAN-Angular%2BExpress%2BNode.js%2BMongoDB-blue)
![JWT Auth](https://img.shields.io/badge/Auth-JWT-brightgreen)
![Responsive](https://img.shields.io/badge/UI-Responsive-orange)

A feature-rich social media platform built with the MEAN stack (MongoDB, Express.js, Angular, and Node.js) featuring JWT authentication, post management, and user interactions.

## ✨ Key Features

### 🔒 Authentication System
- JWT-based user authentication
- Secure password storage with bcrypt hashing
- Protected API endpoints
- Persistent login with localStorage

### 📝 Post Management
- Create, edit, and delete posts
- Rich post format (text, images)
- Personalized feed (user-specific posts)
- Like/comment functionality

### 👤 User Profiles
- Profile information display
- Username and avatar across posts
- User-specific actions and data

### 🎨 Modern UI
- Clean, Facebook/Twitter-inspired design
- Responsive layout (mobile-friendly)
- Interactive elements with Angular
- Real-time data updates

## 🛠️ Tech Stack

**Frontend**:
- Angular 15+
- RxJS for state management
- HTML5/CSS3
- Bootstrap for responsive design

**Backend**:
- Node.js 16+
- Express.js
- MongoDB Atlas (Cloud Database)
- Mongoose ODM

**Authentication**:
- JSON Web Tokens (JWT)
- bcrypt for password hashing
- Protected routes middleware

## 📂 Project Structure

```
social-media-app/
├── backend/                 # Node.js/Express server
│   ├── config/              # Database and environment config
│   ├── controllers/         # Route controllers
│   ├── middleware/          # Auth middleware
│   ├── models/              # Mongoose models
│   ├── routes/              # API routes
│   ├── server.js            # Server entry point
│   └── .env                 # Environment variables
│
├── frontend/                # Angular application
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/  # Angular components
│   │   │   ├── services/    # API services
│   │   │   ├── models/      # Frontend models
│   │   │   └── guards/      # Route guards
│   │   ├── assets/          # Images, styles
│   │   └── environments/    # Angular environments
│   └── angular.json         # Angular config
│
├── .gitignore
├── package.json
└── README.md
```

## 🚀 Installation Guide

### Prerequisites
- Node.js 16+
- Angular CLI 15+
- MongoDB Atlas account (or local MongoDB)

### Backend Setup
1. Navigate to backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create `.env` file:
   ```env
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.example.mongodb.net/socialdb?retryWrites=true&w=majority
   JWT_SECRET=your_strong_secret_here
   PORT=3000
   ```
4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure API base URL in `environment.ts`:
   ```typescript
   export const environment = {
     production: false,
     apiUrl: 'http://localhost:3000/api'
   };
   ```
4. Start Angular dev server:
   ```bash
   ng serve
   ```
5. Open `http://localhost:4200` in your browser

## 🌐 API Documentation

### Authentication
| Endpoint           | Method | Description                     |
|--------------------|--------|---------------------------------|
| `/api/auth/login`  | POST   | Authenticate user, returns JWT  |

### Users
| Endpoint                          | Method | Description                     |
|-----------------------------------|--------|---------------------------------|
| `/api/users/:id`                  | GET    | Get user by ID                  |
| `/api/users/username/:username`   | GET    | Get user by username            |

### Posts (JWT Protected)
| Endpoint               | Method | Description                     |
|------------------------|--------|---------------------------------|
| `/api/posts`           | GET    | Get all posts for current user  |
| `/api/posts`           | POST   | Create new post                 |
| `/api/posts/:id`       | PUT    | Update post                     |
| `/api/posts/:id`       | DELETE | Delete post                     |
| `/api/posts/:id/like`  | POST   | Like/unlike a post              |
| `/api/posts/:id/comment` | POST | Add comment to post            |

## 📸 Screenshots

![Login Screen](https://i.imgur.com/example1.png) 
*Login Page with form validation*

![Dashboard](https://i.imgur.com/example2.png)
*User dashboard with posts feed*

![Post Creation](https://i.imgur.com/example3.png)
*Create new post interface*

## 🛡️ Security Features
- JWT token expiration (1 hour)
- HTTP-only cookies for sensitive data
- Password hashing with bcrypt
- Protected API endpoints
- Input sanitization
- CORS policy configuration

## 📅 Future Roadmap
- [ ] User registration page
- [ ] Profile picture uploads
- [ ] Real-time notifications
- [ ] Friends/follow system
- [ ] Dark mode toggle
- [ ] Post sharing feature
- [ ] Advanced search functionality

## 🤝 Contributing
1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License
Distributed under the MIT License. See `LICENSE` for more information.

## ✉️ Contact
Ahmed Ibrahim - [@yourtwitter](https://twitter.com/yourtwitter) - email@example.com

Project Link: [https://github.com/yourusername/social-media-app](https://github.com/yourusername/social-media-app)
```
