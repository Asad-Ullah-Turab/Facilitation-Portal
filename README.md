# Facilitation Portal

A query submission portal where users can login and submit their queries, which will be stored in a MySQL database. The frontend of the project is implemented using HTML, CSS, and JavaScript, while the backend is built with Node.js and Express.

## Prerequisites

- Node.js: The runtime environment for executing JavaScript code server-side.
- npm (Node Package Manager): Comes with Node.js and is used for package management.
- MySQL: The database used for storing user queries.
- Git: For cloning the repository.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```
2. Navigate into the Backend directory:
   ```bash
   cd "Facilitation Portal/Backend"
   ```
3. Install the dependencies using npm:
   ```bash
   npm install
   ```
4. Create a MySQL database:
   - Open MySQL command line tool and login.
   - Create a new database using the command:
     ```sql
     CREATE DATABASE querydb;
     USE querydb;
     ```
   - Create tables in the database:
     ```sql
     CREATE TABLE pending_queries (
       id INT AUTO_INCREMENT PRIMARY KEY,
       department VARCHAR(50),
       description TEXT,
       queryType VARCHAR(50),
       contactNo VARCHAR(50),
       priority VARCHAR(20)
     );
     CREATE TABLE processing_queries (
       id INT AUTO_INCREMENT PRIMARY KEY,
       department VARCHAR(50),
       description TEXT,
       queryType VARCHAR(50),
       contactNo VARCHAR(50),
       priority VARCHAR(20)
     );
     CREATE TABLE completed_queries (
       id INT AUTO_INCREMENT PRIMARY KEY,
       department VARCHAR(50),
       description TEXT,
       queryType VARCHAR(50),
       contactNo VARCHAR(50),
       priority VARCHAR(20)
     );
     ```
5. Update the database configuration in `Backend\server.js`:
   ```javascript
   const db = mysql.createConnection({
     host: "localhost",
     user: "root", // Change this to your MySQL user
     password: "2131", // Change this to your MySQL password
     database: "querydb", // Change this to your database name
   });
   ```

## Usage

1. Ensure that all dependencies are installed.
2. Start MySql database.
3. Run the following command in `Backend` directory to start the project:

```bash
npm start
```

Replace `npm` with the appropriate package manager if you're not using npm.

4. Open `login.html`.

## Contributing

Explain how others can contribute to the project, including guidelines for submitting pull requests and reporting issues.

## License

This project is open source and available under the [MIT License](LICENSE).
