const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Change this to your MySQL user
  password: "2131", // Change this to your MySQL password
  database: "querydb", // Change this to your database name
});

db.connect((err) => {
  if (err) {
    console.error("DB connection error: ", err);
    return;
  }
  console.log("Connected to the database");
});

app.post("/submit-query", (req, res) => {
  const { department, description, queryType, contactNo, priority } = req.body;

  const query =
    "INSERT INTO pending_queries (department, description, queryType, contactNo, priority) VALUES (?, ?, ?, ?, ?)";
  db.query(
    query,
    [department, description, queryType, contactNo, priority],
    (err, result) => {
      if (err) {
        console.error("Failed to insert query: ", err);
        res.status(500).send("Error saving the query");
        return;
      }
      res.send("Query saved successfully");
    }
  );
});

// Fetch data from the mysql database
app.get("/fetchDataPending", (req, res) => {
  const query = "SELECT * FROM pending_queries";
  db.query(query, (err, result) => {
    if (err) {
      console.error("Failed to fetch data: ", err);
      res.status(500).send("Error fetching data");
      return;
    }
    res.send(result);
    console.log(result);
  });
});
// Fetch data from the mysql database
app.get("/fetchDataProcessing", (req, res) => {
  const query = "SELECT * FROM processing_queries";
  db.query(query, (err, result) => {
    if (err) {
      console.error("Failed to fetch data: ", err);
      res.status(500).send("Error fetching data");
      return;
    }
    res.send(result);
    console.log(result);
  });
});
// Fetch data from the mysql database
app.get("/fetchDataCompleted", (req, res) => {
  const query = "SELECT * FROM completed_queries";
  db.query(query, (err, result) => {
    if (err) {
      console.error("Failed to fetch data: ", err);
      res.status(500).send("Error fetching data");
      return;
    }
    res.send(result);
    console.log(result);
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
