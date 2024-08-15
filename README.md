
# ArchHexagonal

This is a code on NodeJs and Express to learning and practice hexagonal architecure

## Table of Contents

- [Installation](#installation)
- [Running the API](#running-the-api)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Anvidneo/arch-hexagonal.git
   cd arch-hexagonal
   ```

2. **Install dependencies**

   Make sure you have [Node.js](https://nodejs.org/) installed. Then run:

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory of your project and configure the necessary environment variables. Example:

   ```bash
   PORT=3000
   DB_HOST=localhost
   DB_USER=root
   DB_PASS=yourpassword
   ```

## Running the API

1. **Start the server**

   - **For development**: Start the server with `nodemon`, which automatically restarts when file changes are detected.

     ```bash
     npm run dev
     ```

   - **For production**: Start the server in production mode.

     ```bash
     npm start
     ```

   By default, the API will be accessible at `http://localhost:3000/`.

3. **Accessing the API**

   Once the server is running, you can access the API at the following URL:

   ```plaintext
   http://localhost:3000/
   ```

   Replace `3000` with the port number you've specified in your `.env` file if it's different.

## API Endpoints

Document the available API endpoints with their respective HTTP methods, paths, and a brief description of their functionality. For example:

- `GET /api/v1/users` - Retrieves a list of all users.
- `POST /api/v1/users` - Creates a new user.
- `GET /api/v1/users/:id` - Retrieves details of a specific user by ID.
- `PUT /api/v1/users/:id` - Updates a user's details by ID.
- `DELETE /api/v1/users/:id` - Deletes a user by ID.

You can expand this section with more details, including request and response examples, status codes, and any required authentication or headers.
