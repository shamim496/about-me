# 🌟 Full-Stack About Me Application

A modern, full-stack web application built with **Java Spring Boot** backend and **React** frontend. This project showcases personal information with a beautiful, responsive UI.

![Tech Stack](https://img.shields.io/badge/Backend-Spring%20Boot-green)
![Tech Stack](https://img.shields.io/badge/Frontend-React-blue)
![Java](https://img.shields.io/badge/Java-17+-orange)
![Node](https://img.shields.io/badge/Node-16+-brightgreen)

---

## 📁 Project Structure

```
about me/
├── backend/                          # Spring Boot Backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/aboutme/
│   │   │   │   ├── AboutMeApplication.java      # Main application
│   │   │   │   ├── config/
│   │   │   │   │   └── WebConfig.java           # CORS configuration
│   │   │   │   ├── controller/
│   │   │   │   │   └── AboutMeController.java   # REST API controller
│   │   │   │   └── model/
│   │   │   │       └── AboutMe.java             # Data model
│   │   │   └── resources/
│   │   │       └── application.properties        # App configuration
│   │   └── test/                                 # Test files
│   └── pom.xml                                   # Maven dependencies
│
└── frontend/                         # React Frontend
    ├── public/
    │   └── index.html                            # HTML template
    ├── src/
    │   ├── App.jsx                               # Main React component
    │   ├── App.css                               # Component styles
    │   ├── index.js                              # React entry point
    │   └── index.css                             # Global styles
    └── package.json                              # NPM dependencies
```

---

## 🚀 Features

### Backend (Spring Boot)

- ✅ **REST API** - Clean API endpoint at `/api/about`
- ✅ **CORS Enabled** - Configured for React frontend
- ✅ **JSON Response** - Structured data format
- ✅ **Hot Reload** - Spring Boot DevTools included
- ✅ **Health Check** - `/api/health` endpoint

### Frontend (React)

- ✅ **Modern UI** - Beautiful gradient design
- ✅ **Responsive** - Works on all devices
- ✅ **Animations** - Smooth fade-in effects
- ✅ **API Integration** - Fetches data from backend
- ✅ **Loading States** - User-friendly feedback
- ✅ **Error Handling** - Graceful error messages
- ✅ **Skill Badges** - Colorful, interactive tags

---

## 📋 Prerequisites

Before running this project, make sure you have:

- ☕ **Java 17+** - [Download here](https://www.oracle.com/java/technologies/downloads/)
- 📦 **Maven 3.6+** - [Download here](https://maven.apache.org/download.cgi)
- 🟢 **Node.js 16+** - [Download here](https://nodejs.org/)
- 📝 **npm** or **yarn** - Comes with Node.js

### Verify Installation

```bash
# Check Java version
java -version

# Check Maven version
mvn -version

# Check Node.js version
node -v

# Check npm version
npm -v
```

---

## 🔧 Setup & Installation

### 1️⃣ Backend Setup (Spring Boot)

```bash
# Navigate to backend directory
cd backend

# Install dependencies and run
mvn clean install
mvn spring-boot:run
```

The backend server will start on **http://localhost:8080**

You should see:

```
===========================================
✅ About Me API Server is running!
📡 API URL: http://localhost:8080/api/about
===========================================
```

### 2️⃣ Frontend Setup (React)

Open a **new terminal** and run:

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm start
```

The React app will automatically open at **http://localhost:3000**

---

## 🌐 API Documentation

### Base URL

```
http://localhost:8080/api
```

### Endpoints

#### 1. Get About Me Information

```
GET /api/about
```

**Response:**

```json
{
  "name": "Shamim Hasan",
  "age": 25,
  "profession": "Full Stack Developer",
  "skills": ["Java", "React", "JavaScript", "PHP", "Spring Boot", "Node.js"],
  "hobby": "Gaming & Coding",
  "country": "Bangladesh",
  "bio": "Passionate software developer with expertise in building modern web applications. I love creating beautiful and functional solutions that make a difference."
}
```

#### 2. Health Check

```
GET /api/health
```

**Response:**

```
✅ About Me API is running successfully!
```

---

## 🎨 Customization

### Modify Personal Information

Edit the backend controller to change your information:

**File:** `backend/src/main/java/com/aboutme/controller/AboutMeController.java`

```java
AboutMe aboutMe = new AboutMe(
    "Your Name",              // Change name
    25,                       // Change age
    "Your Profession",        // Change profession
    Arrays.asList("Skill1", "Skill2", "Skill3"), // Add your skills
    "Your Hobby",            // Change hobby
    "Your Country",          // Change country
    "Your bio text here..."  // Update bio
);
```

### Modify Colors & Styling

Edit the React CSS for custom styling:

**File:** `frontend/src/App.css`

Change the gradient colors, card styles, or skill badge colors.

---

## 🧪 Testing

### Test Backend API

Using browser or curl:

```bash
# Test About endpoint
curl http://localhost:8080/api/about

# Test Health endpoint
curl http://localhost:8080/api/health
```

### Test Frontend

1. Open **http://localhost:3000** in your browser
2. Verify all information displays correctly
3. Check responsive design by resizing browser
4. Test on mobile devices

---

## 📦 Building for Production

### Backend

```bash
cd backend
mvn clean package
java -jar target/about-me-backend-1.0.0.jar
```

### Frontend

```bash
cd frontend
npm run build
```

The production build will be in the `frontend/build/` directory.

---

## 🐛 Troubleshooting

### Backend Issues

**Problem:** Port 8080 already in use

```bash
# Find process using port 8080 (Windows)
netstat -ano | findstr :8080

# Kill the process
taskkill /PID <process_id> /F
```

**Problem:** Maven dependencies not downloading

```bash
mvn clean install -U
```

### Frontend Issues

**Problem:** Cannot connect to API

- ✅ Make sure backend is running on port 8080
- ✅ Check CORS configuration in `WebConfig.java`
- ✅ Verify API URL in `App.jsx` is correct

**Problem:** npm install fails

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

---

## 🎯 Technologies Used

| Technology  | Version | Purpose               |
| ----------- | ------- | --------------------- |
| Java        | 17+     | Backend language      |
| Spring Boot | 3.2.0   | Backend framework     |
| Maven       | 3.6+    | Dependency management |
| React       | 18.2.0  | Frontend library      |
| Node.js     | 16+     | JavaScript runtime    |
| CSS3        | -       | Styling               |

---

## 📸 Screenshots

The application features:

- 🎨 Beautiful gradient background
- 💳 Centered card layout
- 🏷️ Colorful skill badges
- 📱 Fully responsive design
- ✨ Smooth animations

---

## 📄 License

This project is free to use for educational and personal purposes.

---

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

---

## 📞 Contact

**Shamim Hasan**  
Full Stack Developer  
📍 Bangladesh

---

## 🌟 Enjoy!

If you found this project helpful, please consider giving it a star! ⭐

---

**Built with ❤️ using Spring Boot & React**
