# Ascendia

Ascendia is a simple learning platform inspired by Coursera.
This repository contains a minimal Node.js/Express application
providing basic CRUD endpoints for managing courses.

## Getting Started

1. Install dependencies:
   ```sh
   npm install
   ```

2. Start the application:
   ```sh
   npm start
   ```

The server will run on port `3000` by default.

## API Endpoints

- `GET /` - Welcome message
- `GET /courses` - List all courses
- `GET /courses/:id` - Retrieve a single course
- `POST /courses` - Create a course (expects `title` and `description`)
- `PUT /courses/:id` - Update a course
- `DELETE /courses/:id` - Remove a course

This project is intentionally lightweight and uses an
in-memory data store for simplicity. It can serve as a
starting point for further development.
