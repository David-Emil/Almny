Almny LMS

A full-stack modern Learning Management System (LMS) built with Clean Architecture using ASP.NET Core Web API, SQL Server, and React.
Almny provides a complete educational platform experience including course management, enrollments, lessons, exams, AI-powered quiz generation, progress tracking, and PDF certificates.

🚀 Features
🔐 Authentication & Authorization
JWT Authentication
Role-Based Authorization (Student / Instructor / Admin)
Secure protected APIs
📚 Course Management
Create and manage courses
Course sections & lessons
Video lesson support
Course enrollment system
🎓 Learning Experience
Student progress tracking
Lesson completion system
My Courses dashboard
📝 Exams & Quizzes
MCQ exam system
Question management
Automatic grading
Exam attempts tracking
🤖 AI Integration
AI-powered quiz generation using OpenAI API
Generate MCQ questions from lesson content automatically
📄 Certificates
Dynamic PDF certificate generation
Course completion certificates
💻 Frontend
Modern React frontend
Responsive UI with Tailwind CSS
Authentication pages
Courses listing & dashboard
🛠️ Tech Stack
Backend
ASP.NET Core Web API
Entity Framework Core
SQL Server
JWT Authentication
Clean Architecture
OpenAI SDK
QuestPDF
Frontend
React
Vite
Tailwind CSS
Axios
React Router
🏗️ Architecture
Almny
│
├── Almny.API
├── Almny.Application
├── Almny.Domain
├── Almny.Infrastructure
└── Almny.Persistence

The project follows Clean Architecture principles to ensure scalability, maintainability, and separation of concerns.

📌 Main Modules
Authentication & Authorization
Courses
Sections & Lessons
Enrollments
Progress Tracking
Exams System
AI Quiz Generator
Certificates System
⚡ Getting Started
Backend
Update-Database

Run the API:

F5

Swagger will open automatically.

Frontend
npm install
npm run dev
🔥 Future Improvements
Real-time notifications using SignalR
Video streaming support
Cloud file storage
Payment integration
Analytics dashboard
Docker deployment
CI/CD pipelines
👨‍💻 Author

Developed by David Emile as a full-stack LMS platform project for backend/frontend portfolio and learning purposes.
