# Easy Legal Backend

A robust backend service for the Easy Legal application, built with Node.js, Express, MongoDB, and Socket.IO.

## Project Overview

Easy Legal Backend provides the server-side implementation for managing legal cases, tasks, user authentication, and real-time chat functionality. The system is designed to facilitate communication and case management between legal professionals and clients.

## Features

- User Authentication & Authorization
- Case Management
- Task Management with Categories
- Real-time Chat System
- Social Relationship Management

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Real-time Communication**: Socket.IO
- **Authentication**: JWT (JSON Web Tokens)

## Project Structure

```plaintext
easy-legal-backend/
├── configuration/           # Server and database configuration
│   ├── configureChat.js    # Socket.IO chat configuration
│   ├── connectDb.js        # MongoDB connection setup
│   ├── hostExpressServer.js # Express server configuration
│   └── hostSocketServer.js  # Socket server setup
├── controllers/            # Request handlers
│   ├── CaseController.js
│   ├── ChatController.js
│   ├── TaskCategoryController.js
│   ├── TaskController.js
│   └── UserController.js
├── middleware/            # Authentication middleware
│   ├── isAuth.js
│   └── isAutho.js
├── models/               # MongoDB models
│   ├── Case.js
│   ├── Chat.js
│   ├── SocialRelationship.js
│   ├── Task.js
│   ├── TaskCategory.js
│   └── User.js
├── routes/              # API routes
│   ├── CaseRouter.js
│   ├── ChatRouter.js
│   ├── TaskCategoryRouter.js
│   ├── TaskRouter.js
│   └── UserRouter.js
├── index.js            # Application entry point
└── package.json        # Project dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/aramelheni/easy-legal-backend.git
   ```

2. Install dependencies:

   ```bash
   cd easy-legal-backend
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:

   ```env
   PORT=6005
   DB_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRES_IN=90
   ```

4. Start the server:

   ```bash
   npm start
   ```

## API Routes

### User Routes

- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - User login
- `GET /api/users/profile` - Get user profile

### Case Routes

- `GET /api/cases` - Get all cases
- `POST /api/cases` - Create a new case
- `GET /api/cases/:id` - Get case by ID
- `PUT /api/cases/:id` - Update case
- `DELETE /api/cases/:id` - Delete case

### Task Routes

- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create a new task
- `GET /api/tasks/:id` - Get task by ID
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

### Chat Routes

- `GET /api/chats` - Get user chats
- `POST /api/chats` - Start a new chat
- `GET /api/chats/:id` - Get chat messages
- `POST /api/chats/:id/message` - Send a message

## Real-time Features

The application uses Socket.IO for real-time features including:

- Live chat messaging
- Instant notifications
- Real-time updates for case status changes

## Contributing

We welcome contributions! See the [CONTRIBUTING](CONTRIBUTING.md) file for details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
