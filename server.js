const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));


// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MySQL Connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Replace with your MySQL password
  database: 'dbyuva'
});

connection.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL database!');
});

// API Endpoints
app.post('/api/attendance', (req, res) => {
  const formData = req.body;
  const sql = 'INSERT INTO attendance SET ?';
  connection.query(sql, formData, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ success: false });
    } else {
      console.log(`Attendance submitted: ${result.insertId}`);
      res.json({ success: true });
    }
  });
});

app.get("/",(req,res)=>{
     res.render("index")
    
});

app.get('/api/attendance', (req, res) => {
  const sql = 'SELECT * FROM attendance';
  connection.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ success: false });
    } else {
      res.json(results);
    }
  });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
