# Administrative Process Simplification Platform
<img width="959" alt="1" src="https://github.com/user-attachments/assets/1ccde2d2-0cc6-4fd7-aec8-09afa0baf896" />

<img width="960" alt="2" src="https://github.com/user-attachments/assets/2a6e1380-ef30-4a70-b1c9-d3e30fe3a54c" />

<img width="957" alt="3" src="https://github.com/user-attachments/assets/96fe3621-0162-4561-8de8-3ce94eaa876b" />

## 🌟 Overview

The Administrative Process Simplification Platform is a modern web application designed to streamline administrative procedures for citizens. This digital solution improves government service quality by enabling users to submit documents, track applications, and receive status updates through an intuitive interface. The platform aims to modernize traditional administrative processes, reducing paperwork and wait times.

## ✨ Features

- **Document Submission:** Upload identity documents, birth certificates, and other required paperwork
- **Application Tracking:** Monitor status of applications with unique reference numbers
- **Administrative Dashboard:** Allow government officials to review, approve or reject submissions
- **Secure Authentication:** Protect sensitive user information with JWT-based authentication
- **Archiving System:** Maintain records of past applications and decisions

## 🛠️ Technology Stack

### Backend
- **Java Spring Boot:** RESTful API architecture with service-oriented design
- **Spring Security:** Authentication and authorization
- **Spring Data MongoDB:** Data persistence layer
- **MongoDB:** NoSQL database for flexible document storage
- **Maven:** Dependency management

### Frontend
- **React.js:** Component-based UI architecture
- **Context API:** State management solution
- **Axios:** HTTP client for API communication
- **React Router:** Navigation management
- **Styled Components:** Styling and theming

### DevOps & Infrastructure
- **Docker:** Containerization for consistent deployment
- **GitHub Actions:** CI/CD pipeline
- **Cloud Hosting:** Deployment platform

## 🚀 Installation & Setup

### Prerequisites
- Java JDK 17 or higher
- Node.js 16.x or higher
- Maven 3.8.x or higher
- MongoDB

### Backend Setup
```bash
# Clone the repository
git clone https://github.com/yourusername/admin-process-platform.git

# Navigate to backend directory
cd admin-process-platform/backend

# Install dependencies
mvn clean install

# Start the Spring Boot application
mvn spring-boot:run
```

### Frontend Setup
```bash
# Navigate to frontend directory
cd ../frontend

# Install dependencies
npm install

# Start the React development server
npm start
```

## 🏗️ Project Structure

```
admin-process-platform/
├── backend/
│   ├── src/main/java/com/example/api/
│   │   ├── controller/       # REST API endpoints
│   │   │   ├── DemandeController.java
│   │   │   ├── PostController.java
│   │   │   ├── StorageController.java
│   │   │   └── UserController.java
│   │   ├── exception/        # Custom exceptions
│   │   │   ├── PostNotFoundException.java
│   │   │   ├── UserNotAllowedToModify.java
│   │   │   └── UserNotFoundException.java
│   │   ├── model/            # Entity classes
│   │   │   ├── Demande.java
│   │   │   ├── employe.java
│   │   │   ├── FileData.java
│   │   │   ├── Jeton.java
│   │   │   ├── Post.java
│   │   │   └── User.java
│   │   ├── repository/       # Data access layer
│   │   │   ├── DemandeRepository.java
│   │   │   ├── FileDataRepo.java
│   │   │   ├── PostRepository.java
│   │   │   └── UserRepository.java
│   │   ├── service/          # Business logic
│   │   │   ├── DemandeService.java
│   │   │   ├── PostService.java
│   │   │   ├── StorageService.java
│   │   │   ├── userService.java
│   │   │   └── ApiApplication.java
│   │   └── config/           # Application configuration
│   └── src/test/             # Test cases
├── frontend/
│   ├── public/               # Static files
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   │   ├── DemandesPourAdmin/
│   │   │   ├── PostingService/
│   │   │   ├── ProcessusAdministartive/
│   │   │   ├── Sidebar/
│   │   │   ├── SinglePost/
│   │   │   ├── Topbar/
│   │   │   └── Slider.jsx
│   │   ├── Context/          # Context API providers
│   │   │   ├── Action.js
│   │   │   ├── Context.js
│   │   │   └── Reducer.js
│   │   ├── pages/            # Page components
│   │   │   ├── AdminDemande/
│   │   │   ├── DeposerDemande/
│   │   │   ├── Homepage/
│   │   │   ├── Login/
│   │   │   ├── PosterService/
│   │   │   └── SingleService/
│   │   ├── App.js            # Main application component
│   │   ├── data.js           # Static data
│   │   └── index.js          # Application entry point
│   ├── package.json          # Dependencies and scripts
│   └── README.md             # Frontend documentation
└── docs/                     # Documentation
```

## 🔄 Application Flow

1. Users register and authenticate in the system
2. Users initiate an administrative request via the "DEPOSER DEMANDE" button
3. Users upload required documents (birth certificates, ID cards, etc.)
4. The system assigns a unique tracking number (e.g., Q123456)
5. Administrators review and process submissions
6. Users receive status updates (accepted, rejected, pending)
7. Users can access records in the archive section

## 🔐 Environment Variables

Create `.env` files in both backend and frontend directories:

### Backend (application.properties)
```
spring.data.mongodb.database=processadministrative
spring.data.mongodb.port=27017
spring.data.mongodb.host=localhost
server.PORT=9099
```

### Frontend
```
REACT_APP_API_URL=http://localhost:9099
```
