# Task Management System

A web-based Task Management System that enables users to efficiently manage tasks and collaborate seamlessly with team members.

## Features

- **User Registration and Authentication:** Users can register with email and password, and log in to access the system securely.
- **Task Creation and Management:** Create, update, view, and delete tasks with title, description, due date, and status.
- **Project and User Assignment:** Users can create projects and assign tasks, collaborating effectively.
- **User Authorization:** Task creators or assigned users can modify or delete tasks; project owners can invite collaborators.
- **Task Priority and Labels:** Assign priority levels (e.g., low, medium, high) and labels (e.g., "Work," "Personal") to tasks.
- **User Notifications:** Receive notifications for upcoming due dates and task assignments.

## Technologies Used

- Node.js
- Express.js
- MongoDB (Mongoose)
- JSON Web Tokens (JWT)
- bcrypt (Password Hashing)
- body-parser (JSON Parsing)

## Getting Started

1. **Clone the Repository:**

   ```sh
   git clone https://github.com/your-username/task-management-system.git

2. **Install Dependencies:**

cd task-management-system
npm install

Set Up MongoDB:

Set up a MongoDB database and update the connection string in app.js:

javascript

mongoose.connect('mongodb://localhost/tasksDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

Start the Application:

sh

    node app.js

    Access the App:

    Open your browser and navigate to http://localhost:3000 to use the Task Management System.

API Routes

    POST /user: Register a new user
    POST /auth: User login
    POST /project: Create a new project
    GET /project: Get all projects
    PUT /project/:id: Update a project
    DELETE /project/:id: Delete a project
    POST /tasks: Create a new task
    GET /tasks: Get all tasks
    PUT /tasks/:id: Update a task
    DELETE /tasks/:id: Delete a task
    PUT /user/:id: Update a user
    DELETE /user/:id: Delete a user

Usage

    Register a new user using /user or log in with /auth.
    Create projects using /project, and assign tasks to projects.
    Manage tasks with /tasks, including updates to status and due dates.
    Collaborate by assigning tasks and sharing projects.
    ...

Contact

For inquiries or suggestions, please contact 
bereket.nigussie@a2sv.org.
