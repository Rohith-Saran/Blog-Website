# ✍️ BlogApp - Modern MERN Stack Blog Platform

Welcome to **BlogApp**, a full-featured, secure, and modern web application built using the complete **MERN Stack** (MongoDB, Express, React, Node.js). 

This is my second major MERN stack project, designed with an emphasis on state-of-the-art authentication flows, clean RESTful APIs, robust file uploads, and a highly responsive React frontend.

---

## 🚀 Key Features

*   🔐 **Secure Authentication System**
    *   **Password Hashing**: Implemented cryptographic safety using `bcrypt` (10 salt rounds) for user registrations.
    *   **Stateless Sessions**: JWT (JSON Web Tokens) are generated upon successful login.
    *   **HTTP-Only Cookies**: Tokens are passed and stored via secure `httpOnly` and `sameSite: 'lax'` cookies to guard against XSS/CSRF attacks.
    *   **Route Protection**: Middleware verifies user sessions before granting access to sensitive user metadata.
*   📝 **Dynamic Blog Posting & Image Uploads**
    *   **Server-Side Storage**: Handled incoming multipart form-data (title, description, and images) using `multer`.
    *   **Mongoose Schemas**: Relies on structured schemas for both user profiles and blog posts stored in MongoDB.
*   🌐 **Responsive & Reactive User Interface**
    *   **React Router v7**: Fluid single-page transitions without hard reloads.
    *   **Context API**: Shared user authentication status (`UserContext`) to seamlessly toggle between active navigation links (e.g., Register/Login vs. Logout).
    *   **Vite Native Builds**: Ultra-fast hot module replacement (HMR) and lightweight development environment.

---

## 🛠️ The Tech Stack

### Frontend
*   **Library**: [React v19](https://react.dev/)
*   **Build Tool**: [Vite v7](https://vite.dev/)
*   **Routing**: [React Router v7](https://reactrouter.com/)
*   **HTTP Client**: [Axios](https://axios-http.com/) (configured with `withCredentials` support for secure cross-site cookies)
*   **Styling**: Pure CSS3 for elegant layout styling & custom animations.

### Backend
*   **Runtime Environment**: [Node.js](https://nodejs.org/)
*   **Web Framework**: [Express v5](https://expressjs.com/) (leveraging Express 5 features)
*   **Database ODM**: [Mongoose v9](https://mongoosejs.com/)
*   **Database**: [MongoDB](https://www.mongodb.com/)
*   **Security & Middleware**: `jsonwebtoken`, `bcrypt`, `cookie-parser`, `cors`, `multer` (for handling files).

---

## 📂 Project Architecture

The workspace is split into two cleanly separated directories: `Backend` (server & database models) and `Frontend` (React application code):

```text
BlogWeb/
├── Backend/                    # Node.js + Express Backend
│   ├── Models/                 # Mongoose Database Schemas
│   │   ├── UserModel.js        # User credentials schema (username, email, password)
│   │   └── PostModel.js        # Blog post schema (title, desc, file)
│   ├── Public/Images/          # Uploaded blog post thumbnails
│   ├── index.js                # Server entry point, middleware & API endpoints
│   └── package.json            # Backend scripts & dependencies
│
└── Frontend/                   # React SPA Frontend
    ├── public/                 # Static assets
    ├── src/                    # Application source code
    │   ├── assets/             # Images and local styles
    │   ├── App.jsx             # App initialization, routes & UserContext provider
    │   ├── App.css             # Main styling classes
    │   ├── Navbar.jsx          # Header navigation bar with dynamic session status
    │   ├── Home.jsx            # Grid/List feed displaying all database posts
    │   ├── Create.jsx          # Create-post form with multer image-uploader
    │   ├── Register.jsx        # Registration form
    │   ├── Login.jsx           # Sign-in form
    │   └── main.jsx            # React root DOM renderer
    ├── vite.config.js          # Vite config
    └── package.json            # Frontend scripts & React 19 dependencies
```

---

## 🔌 API Architecture Reference

All API communications target the Express backend on `http://localhost:3001`.

| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| **GET** | `/` | 🔑 *Protected* | Checks for valid JWT in cookies and returns logged-in user profile (`email`, `username`). |
| **POST** | `/register` | 🔓 *Public* | Registers a new account. Hashes password with `bcrypt` before storing in MongoDB. |
| **POST** | `/login` | 🔓 *Public* | Validates email & password, signs JWT, and returns it inside a secure cookie. |
| **GET** | `/logout` | 🔓 *Public* | Clears the auth token cookie, logging out the user. |
| **POST** | `/create` | 🔓 *Public* | Accepts a multipart form with text fields (`title`, `desc`) and a file field (`file`) to upload an image and save the blog. |
| **GET** | `/getposts` | 🔓 *Public* | Fetches a list of all blog posts with their respective metadata and static image paths. |

---

## ⚙️ Installation & Setup

Follow these steps to run the complete MERN application locally.

### Prerequisites
*   [Node.js](https://nodejs.org/) (v16.0.0 or higher recommended)
*   [MongoDB Community Server](https://www.mongodb.com/try/download/community) (running locally on port `27017`)

---

### Step 1: Set up the MongoDB Database
Make sure your MongoDB server is up and running. By default, the backend connects to:
```text
mongodb://localhost:27017/BlogApp
```
If you wish to change the connection string, edit line 24 in `Backend/index.js`.

---

### Step 2: Spin up the Backend Server
1. Navigate into the `Backend` directory:
   ```bash
   cd Backend
   ```
2. Install all required dependencies:
   ```bash
   npm install
   ```
3. Start the server using Nodemon (which automatically restarts upon saved changes):
   ```bash
   npm start
   ```
4. The server should prompt: `Connected to MongoDB` and listen on port `3001`.

---

### Step 3: Run the React Frontend
1. Open a new terminal tab and navigate into the `Frontend` directory:
   ```bash
   cd Frontend
   ```
2. Install the necessary packages:
   ```bash
   npm install
   ```
3. Boot up the Vite local development server:
   ```bash
   npm run dev
   ```
4. Click on the local link provided by Vite (typically `http://localhost:5173`) to launch the application.

---

## 🔮 Future Enhancements & Goals

To take this platform further, I plan to:
1.  **Associate Posts with Authors**: Relate the `PostModel` schema to `UserModel` using MongoDB references (`mongoose.Schema.Types.ObjectId`) to display the creator's name on each post.
2.  **Add Post Moderation**: Implement options to edit or delete posts exclusively for the author who created them.
3.  **Upgrade Content Editor**: Replace the standard `<textarea>` element with a rich-text editor (such as Quill.js or React Quill) to support headings, bold text, lists, and inline links.
4.  **Incorporate Loading Skeletons**: Introduce beautiful fallback visual loaders while fetching posts from the backend server to elevate the user experience.

---

Developed with ❤️ by **Rohith Saran**